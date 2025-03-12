# suppress warnings
import warnings

warnings.filterwarnings("ignore")

# import libraries
import requests
from PIL import Image


import gradio as gr
from together import Together


import gradio as gr
from together import Together


# import libraries
import requests
from PIL import Image

# suppress warnings
import warnings

warnings.filterwarnings("ignore")


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
        self.analyzer = EmailAgent("analyzer", client)
        self.drafter = EmailAgent("drafter", client)
        self.reviewer = EmailAgent("reviewer", client)
        self.example_justifier = EmailAgent("example_justifier", client)

    def process_email(self, email_content):
        max_attempts = 3
        attempt = 1

        while attempt <= max_attempts:
            print(f"\nProcessing email - Attempt {attempt}")

            # Step 1: Analyze email
            print("\nAnalyzing email content...")
            analysis = self.analyzer.process(email_content)

            # Step 2: Analyze sentiment
            print("\nAnalyzing sentiment...")
            sentiment = prompt_llm(
                self.analyzer.prompts["sentiment"].format(content=email_content)
            )

            # Step 3: Draft response
            print("\nDrafting response based on analysis...")
            draft = self.drafter.process(analysis)

            # Get relevant example responses for display
            relevant_examples = self.analyzer.response_retriever.get_relevant_response(
                email_content
            )

            # Add example justification
            example_justification = self.example_justifier.process(
                f"Email: {email_content}\nExamples: {relevant_examples}"
            )

            # Display formatted output
            print("\n" + "=" * 50)
            print("ORIGINAL EMAIL:\n")
            print(email_content)
            print("\n" + "=" * 50)
            print("DRAFT RESPONSE:\n")
            print(draft)
            print("\n" + "=" * 50)
            print("EXAMPLE USED:\n")
            print(relevant_examples)
            print("\nEXAMPLE JUSTIFICATION:\n")
            print(example_justification)
            print("\n" + "=" * 50)

            # Ask user for feedback on the draft
            print("\nAre you satisfied with this draft? (y/n)")
            user_feedback = input().lower()

            if user_feedback != "y":
                print("\nMoving to next attempt...")
                attempt += 1
                continue

            # Step 4: Review response
            print("\nReviewing draft response...")
            review = self.reviewer.process(draft)
            print("\nReview completed. Feedback:")
            print(review)

            if "APPROVED" in review:
                return {
                    "status": "success",
                    "analysis": analysis,
                    "final_draft": draft,
                    "review": review,
                }
            else:
                print(f"\nRevision needed. Feedback: {review}")
                attempt += 1

        return {"status": "failed", "message": "Maximum revision attempts reached"}


def process_emails(emails_list):
    email_system = EmailProcessingSystem(client)
    results = {}

    for email in emails_list:
        print(f"\nProcessing email: {email}")
        print("\nWould you like to process this email? (y/n)")

        user_input = input().lower()
        if user_input != "y":
            print("Skipping this email...")
            continue

        result = email_system.process_email(email)
        results[email] = result

    return results


if __name__ == "__main__":
    print("\n\nWelcome to the Medical Company Email Processing System!\n")
    # Updated example with medical context
    sample_emails = [
        """Subject: Patient Data Access Request
        Hello, I'm a referring physician and need access to my patient's recent test results. 
        What's the procedure for requesting these records? Thanks.""",
        """Subject: Insurance Coverage Question
        Hi, I'm scheduled for a procedure next week and wanted to confirm if my insurance 
        is accepted at your facility. I have BlueCross BlueShield. Best regards.""",
    ]

    results = process_emails(sample_emails)
