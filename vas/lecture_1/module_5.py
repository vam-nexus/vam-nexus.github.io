# suppress warnings
import warnings

warnings.filterwarnings("ignore")

# import libraries
import requests
from PIL import Image
import gradio as gr
from together import Together

# Get Client
your_api_key = "9806a2601560024637df1e4acd804862faa67e08637db6598d920b64eebba43e"
client = Together(api_key=your_api_key)

# Add imports for RAG functionality
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np


class EmailResponseRetriever:
    def __init__(self):
        self.encoder = SentenceTransformer("all-MiniLM-L6-v2")
        # Sample email response examples with more casual tone
        self.examples = {
            "medical_records": """
                ORIGINAL EMAIL:
                Hey there, I was hoping to get my medical records. What do I need to do?
                
                MY RESPONSE:
                Hi! Happy to help you get those records. We just need a few quick things:
                1. Your signed OK (we'll send you the form)
                2. A quick form to fill out
                3. Your ID
                Just upload everything to our secure portal and we'll take care of the rest! Let me know if you need help.
            """,
            "insurance_verification": """
                ORIGINAL EMAIL:
                Quick question - do you guys take Aetna insurance?
                
                MY RESPONSE:
                Hey there! Yes, we work with Aetna and most other major insurance companies.
                Could you shoot me your:
                - Member ID
                - Group number
                I'll double-check everything and get back to you super quick (usually within a day).
                Sound good?
            """,
            "appointment_scheduling": """
                ORIGINAL EMAIL:
                Something came up and I need to move my appointment. Help!
                
                MY RESPONSE:
                Hey! No worries at all - life happens! 😊
                I've got a couple of spots open:
                - Tuesday @ 2pm
                - Wednesday morning at 10am
                Just let me know what works better for you and I'll get it switched right away!
            """,
            "medication_refill": """
                ORIGINAL EMAIL:
                Running low on my meds - need a refill asap!
                
                MY RESPONSE:
                Hey! Thanks for the heads up about your meds. I'm on it!
                Here's what's happening next:
                1. We'll review your refill request today
                2. Give your pharmacy a call
                3. They should have it ready in 1-2 days
                Need it sooner? Just let me know!
            """,
        }
        # Pre-compute embeddings for examples
        self.example_embeddings = {
            k: self.encoder.encode(v) for k, v in self.examples.items()
        }

    def get_relevant_response(self, query, top_k=2):
        query_embedding = self.encoder.encode(query)
        similarities = {
            k: cosine_similarity([query_embedding], [emb])[0][0]
            for k, emb in self.example_embeddings.items()
        }
        sorted_examples = sorted(similarities.items(), key=lambda x: x[1], reverse=True)

        relevant_examples = []
        for example_name, score in sorted_examples[:top_k]:
            if score > 0.3:  # Similarity threshold
                relevant_examples.append(self.examples[example_name])

        return (
            "\n\n".join(relevant_examples)
            if relevant_examples
            else "No relevant example found."
        )


def prompt_llm(prompt, show_cost=False):
    # This function allows us to prompt an LLM via the Together API

    # model
    model = "meta-llama/Meta-Llama-3-8B-Instruct-Lite"

    # Calculate the number of tokens
    tokens = len(prompt.split())

    # Calculate and print estimated cost for each model
    if show_cost:
        print(f"\nNumber of tokens: {tokens}")
        cost = (0.1 / 1_000_000) * tokens
        print(f"Estimated cost for {model}: ${cost:.10f}\n")

    # Make the API call
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}],
    )
    return response.choices[0].message.content


def gen_image(prompt, width=256, height=256):
    # This function allows us to generate images from a prompt
    response = client.images.generate(
        prompt=prompt,
        model="stabilityai/stable-diffusion-xl-base-1.0",  # Using a supported model
        steps=30,
        n=1,
    )
    image_url = response.data[0].url
    image_filename = "image.png"

    # Download the image using requests instead of wget
    response = requests.get(image_url)
    with open(image_filename, "wb") as f:
        f.write(response.content)
    img = Image.open(image_filename)
    img = img.resize((height, width))

    return img


class EmailAgent:
    def __init__(self, role, client):
        self.role = role
        self.client = client
        self.response_retriever = EmailResponseRetriever()

        self.prompts = {
            "analyzer": """SYSTEM: You are an expert email analyzer for a medical company. 
            Your role is to break down emails into key components and provide clear, actionable insights.

            INSTRUCTIONS:
            • Extract main topics and key points from the email
            • Determine urgency level (Low, Medium, High)
            • List all required actions in bullet points
            • Analyze tone of the message (formal, informal, urgent, etc.)
            • Consider similar past responses
            • Highlight any compliance concerns
            • Limit response to 50 words maximum
            • Show response only without additional commentary

            SIMILAR PAST RESPONSES:
            {examples}

            Email: {content}""",
            "drafter": """SYSTEM: You are a professional email response specialist for a medical company. 
            Draft responses that align with our past successful responses while maintaining HIPAA compliance.

            INSTRUCTIONS:
            • Address all key points from the original email
            • Use a friendly, conversational tone like in our examples
            • Ensure HIPAA compliance in all content
            • Include clear next steps and action items
            • Maintain professional yet approachable tone
            • Add necessary disclaimers where applicable
            • Limit response to 50 words maximum
            • Show response only without additional commentary

            SIMILAR PAST RESPONSES:
            {examples}

            Based on this analysis: {content}""",
            "reviewer": """SYSTEM: You are a senior email quality assurance specialist for a medical company. 
            Ensure responses meet healthcare communication standards and match our friendly tone.

            INSTRUCTIONS:
            • Verify alignment with example responses
            • Check for HIPAA violations
            • Assess professional yet friendly tone
            • Review completeness of response
            • Evaluate appropriate handling of sensitive information
            • Confirm all action items are clearly stated
            • Limit response to 50 words maximum
            • Show response only without additional commentary

            SIMILAR PAST RESPONSES:
            {examples}

            Evaluate this draft response: {content}""",
            "sentiment": """SYSTEM: You are an expert in analyzing email sentiment and emotional context in 
            healthcare communications.

            INSTRUCTIONS:
            • Analyze overall sentiment (positive, negative, neutral)
            • Identify emotional undertones
            • Detect urgency or stress indicators
            • Assess patient/sender satisfaction level
            • Flag any concerning language
            • Recommend tone adjustments if needed
            • Limit response to 50 words maximum
            • Show response only without additional commentary

            Email: {content}""",
            "example_justifier": """SYSTEM: You are an example matching expert. In 2 lines, explain why the following example responses are relevant 
            to this email content. Be specific and concise.

            Email content: {content}
            Selected examples: {examples}""",
        }

    def process(self, content):
        # Get relevant example responses for the email content
        relevant_examples = self.response_retriever.get_relevant_response(content)
        return prompt_llm(
            self.prompts[self.role].format(content=content, examples=relevant_examples)
        )


class EmailProcessingSystem:
    def __init__(self, client):
        self.drafter = EmailAgent("drafter", client)
        self.reviewer = EmailAgent("reviewer", client)
        self.example_justifier = EmailAgent("example_justifier", client)

    def process_email(self, email_content):
        # Step 1: Analyze sentiment
        sentiment = prompt_llm(
            self.drafter.prompts["sentiment"].format(content=email_content)
        )

        # Step 2: Draft response
        draft = self.drafter.process(email_content)

        # Get relevant example responses for display
        relevant_examples = self.drafter.response_retriever.get_relevant_response(
            email_content
        )

        # Add example justification
        example_justification = self.example_justifier.process(
            f"Email: {email_content}\nExamples: {relevant_examples}"
        )

        # Step 3: Review response
        review = self.reviewer.process(draft)

        return {
            "status": "success",
            "final_draft": draft,
            "review": review,
            "examples": relevant_examples,
            "justification": example_justification,
        }


def process_emails(emails_list):
    email_system = EmailProcessingSystem(client)
    results = {}

    for email in emails_list:
        result = email_system.process_email(email)
        results[email] = result

    return results


# Add this before create_gradio_interface()
sample_emails = [
    """Hi, I need to get my medical records from last month's visit. 
    Can you help me with the process? Thanks!""",
    """Hello, I'm trying to schedule an appointment for next week. 
    I have Aetna insurance and wanted to confirm you accept it before booking.""",
    """My appointment is tomorrow at 2pm but something urgent came up at work. 
    Is there any way I could reschedule?""",
    """Running low on my blood pressure medication. 
    Need to get it refilled before next week. What's the process?""",
    """Hi there, just moved to the area and looking for a new primary care doctor. 
    Are you accepting new patients with United Healthcare?""",
]


def create_gradio_interface():
    state = {
        "current_index": 0,
        "approved_count": 0,
        "disapproved_count": 0,
        "results": {},
    }

    email_system = EmailProcessingSystem(client)

    def process_current_email(email_index):
        email = sample_emails[email_index]
        result = email_system.process_email(email)
        state["results"][email] = result

        return (
            result["final_draft"],
            result["examples"],
            result["justification"],
            state["approved_count"],
            state["disapproved_count"],
        )

    def update_email_display(index):
        return sample_emails[index]

    def approve_response():
        state["approved_count"] += 1
        return {
            approve_btn: gr.Button(interactive=False),
            disapprove_btn: gr.Button(interactive=False),
            approved_count: state["approved_count"],
        }

    def disapprove_response():
        state["disapproved_count"] += 1
        return {
            approve_btn: gr.Button(interactive=False),
            disapprove_btn: gr.Button(interactive=False),
            disapproved_count: state["disapproved_count"],
        }

    # Create the Gradio interface
    with gr.Blocks(title="Medical Email Processing System") as interface:
        gr.Markdown("# 🏥 Medical Email Processing System")
        gr.Markdown("### Process and review medical email responses with AI assistance")

        with gr.Row():
            email_index = gr.Slider(
                minimum=0,
                maximum=len(sample_emails) - 1,
                step=1,
                value=0,
                label="📧 Email Number",
                interactive=True,
            )

            with gr.Column():
                approved_count = gr.Number(
                    value=0, label="✅ Approved Emails", interactive=False
                )
                disapproved_count = gr.Number(
                    value=0, label="❌ Disapproved Emails", interactive=False
                )

        original_email = gr.Textbox(
            label="📥 Original Email",
            lines=4,
            scale=2,
            container=True,
        )

        with gr.Row():
            process_btn = gr.Button("🔄 Process This Email", variant="primary")
            skip_btn = gr.Button("⏭️ Skip This Email", variant="secondary")

        # Output displays
        draft_response = gr.Textbox(
            label="📝 Draft Response",
            lines=4,
            container=True,
        )
        examples = gr.Textbox(
            label="📚 Similar Examples",
            lines=8,
            container=True,
        )
        justification = gr.Textbox(
            label="💡 Example Justification",
            lines=2,
            container=True,
        )

        with gr.Row():
            approve_btn = gr.Button(
                "✅ Approve Draft", interactive=False, variant="success"
            )
            disapprove_btn = gr.Button(
                "❌ Disapprove Draft", interactive=False, variant="stop"
            )

        # Event handlers
        email_index.change(
            fn=update_email_display,
            inputs=[email_index],
            outputs=[original_email],
        )

        approve_btn.click(
            fn=approve_response, outputs=[approve_btn, disapprove_btn, approved_count]
        )

        disapprove_btn.click(
            fn=disapprove_response,
            outputs=[approve_btn, disapprove_btn, disapproved_count],
        )

        process_btn.click(
            fn=process_current_email,
            inputs=[email_index],
            outputs=[
                draft_response,
                examples,
                justification,
                approved_count,
                disapproved_count,
            ],
        ).then(
            lambda: {
                approve_btn: gr.Button(interactive=True),
                disapprove_btn: gr.Button(interactive=True),
            },
            outputs=[approve_btn, disapprove_btn],
            api_name=False,
        )

        skip_btn.click(
            fn=process_current_email,
            inputs=[email_index],
            outputs=[
                draft_response,
                examples,
                justification,
                approved_count,
                disapproved_count,
            ],
        )

        # Initialize the original email display with the first email
        original_email.value = sample_emails[0]

    return interface


if __name__ == "__main__":
    interface = create_gradio_interface()
    interface.launch()
