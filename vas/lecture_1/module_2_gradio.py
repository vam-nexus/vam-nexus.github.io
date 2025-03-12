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

    def process(self, content):
        prompts = {
            # Analyzer prompt - extracts key information from email
            "analyzer": """SYSTEM: You are an expert email analyzer with years of experience in professional communication. Your role is to break down emails into their key components and provide clear, actionable insights.

            As an email analyzer, examine this email content and extract:
            1. Main topics and key points
            2. Urgency level
            3. Required actions
            4. Tone of the message

            INSTRUCTIONS:
            • Focus on extracting factual information without interpretation
            • Identify any deadlines or time-sensitive elements
            • Categorize the email priority (high/medium/low)
            • Show output only - no explanations or additional commentary
            
            Email: {content}
            
            Provide a structured analysis.""",
            # Drafter prompt - creates email response based on analysis
            "drafter": """SYSTEM: You are a professional email response specialist with extensive experience in business communication. Your role is to craft clear, effective, and appropriate email responses based on provided analysis.

            As an email response drafter, using this analysis: {content}
            Create a professional email response that:
            1. Addresses all key points
            2. Matches the appropriate tone
            3. Includes clear next steps

            INSTRUCTIONS:
            • Maintain consistent professional tone throughout response
            • Include specific details from the analysis
            • End with clear actionable next steps
            • Show output only - provide just the email response
            
            Write the complete response.""",
            # Reviewer prompt - evaluates the draft response
            "reviewer": """SYSTEM: You are a senior email quality assurance specialist with a keen eye for detail and professional standards. Your role is to ensure all email responses meet the highest standards of business communication.

            As an email quality reviewer, evaluate this draft response: {content}
            Check for:
            1. Professionalism and appropriateness
            2. Completeness (all points addressed)
            3. Clarity and tone
            4. Potential improvements

            INSTRUCTIONS:
            • Verify all original questions/requests are addressed
            • Check for appropriate formality and politeness
            • Ensure response is concise and well-structured
            • Show output only - return APPROVED or NEEDS_REVISION with brief feedback
            
            Return either APPROVED or NEEDS_REVISION with specific feedback.""",
        }

        return prompt_llm(prompts[self.role].format(content=content))


def process_email(email_content):
    # Create agents
    analyzer = EmailAgent("analyzer", client)
    drafter = EmailAgent("drafter", client)

    # Process email
    analysis = analyzer.process(email_content)
    draft = drafter.process(analysis)

    return analysis, draft


# Example emails
example_emails = [
    """Dear Team,
I hope this email finds you well. We need to reschedule tomorrow's project meeting due to a conflict. Could we move it to Friday at 2 PM instead?
Best regards,
John""",
    """Subject: Urgent: Server Downtime
The production server is currently experiencing issues. We need immediate assistance to resolve this. Please respond ASAP.
-Sarah from DevOps""",
    """Hi Marketing Team,
Just wanted to follow up on the Q4 report. When can we expect the first draft for review?
Thanks,
Mike""",
]


class EmailDemo:
    def __init__(self):
        self.current_index = 0

    def get_current_email(self):
        return example_emails[self.current_index]

    def next_email(self, _):
        self.current_index = (self.current_index + 1) % len(example_emails)
        return example_emails[self.current_index]


demo_state = EmailDemo()

# Create Gradio interface
with gr.Blocks() as demo:
    gr.Markdown("# 📧 Email Processing System")
    gr.Markdown("View example emails and get AI-powered analysis and responses.")

    with gr.Row():
        email_input = gr.Textbox(
            value=demo_state.get_current_email(), lines=5, label="📝 Email Content"
        )
        next_button = gr.Button("⏭️ Next Example Email")

    process_button = gr.Button("🔄 Process Email")

    with gr.Row():
        analysis_output = gr.Textbox(
            lines=8, label="📊 Analysis", show_copy_button=True
        )
        draft_output = gr.Textbox(
            lines=8, label="✉️ Draft Response", show_copy_button=True
        )

    # Set up event handlers
    next_button.click(
        demo_state.next_email, inputs=[email_input], outputs=[email_input]
    )

    process_button.click(
        process_email, inputs=[email_input], outputs=[analysis_output, draft_output]
    )

if __name__ == "__main__":
    demo.launch()
