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


class PolicyRetriever:
    def __init__(self):
        self.encoder = SentenceTransformer("all-MiniLM-L6-v2")
        # Sample medical policies - in production, this would come from a database
        self.policies = {
            "privacy": """
                Patient Privacy Policy:
                - All patient information is confidential and protected under HIPAA
                - Access to medical records requires patient consent
                - Data sharing with third parties strictly regulated
            """,
            "appointments": """
                Appointment Policy:
                - 24-hour notice required for cancellations
                - Telehealth options available for eligible consultations
                - Emergency cases prioritized based on severity
            """,
            "insurance": """
                Insurance Policy:
                - We accept major insurance providers
                - Pre-authorization required for specific procedures
                - Co-pay due at time of service
            """,
            "medication": """
                Medication Policy:
                - Prescription refills require 48-hour notice
                - Controlled substances have strict monitoring protocols
                - Generic alternatives offered when available
            """,
        }
        # Pre-compute embeddings for policies
        self.policy_embeddings = {
            k: self.encoder.encode(v) for k, v in self.policies.items()
        }

    def get_relevant_policy(self, query, top_k=2):
        query_embedding = self.encoder.encode(query)
        similarities = {
            k: cosine_similarity([query_embedding], [emb])[0][0]
            for k, emb in self.policy_embeddings.items()
        }
        sorted_policies = sorted(similarities.items(), key=lambda x: x[1], reverse=True)

        relevant_policies = []
        for policy_name, score in sorted_policies[:top_k]:
            if score > 0.3:  # Similarity threshold
                relevant_policies.append(self.policies[policy_name])

        return (
            "\n\n".join(relevant_policies)
            if relevant_policies
            else "No relevant policy found."
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
        self.policy_retriever = PolicyRetriever()

        # Move prompts to be an instance variable
        self.prompts = {
            "analyzer": """SYSTEM: You are an expert email analyzer for a medical company. 
            Your role is to break down emails into key components and provide clear, actionable insights.

            INSTRUCTIONS:
            • Extract main topics and key points from the email
            • Determine urgency level (Low, Medium, High)
            • List all required actions in bullet points
            • Analyze tone of the message (formal, informal, urgent, etc.)
            • Identify relevant company policies that apply
            • Highlight any compliance concerns
            • Limit response to 50 words maximum
            • Show response only without additional commentary

            CONTEXT (Company Policies):
            {policies}

            Email: {content}""",
            "drafter": """SYSTEM: You are a professional email response specialist for a medical company. 
            Draft responses that align with our policies and maintain HIPAA compliance.

            INSTRUCTIONS:
            • Address all key points from the original email
            • Ensure response aligns with provided company policies
            • Verify HIPAA compliance in all content
            • Include clear next steps and action items
            • Maintain professional and empathetic tone
            • Add necessary disclaimers where applicable
            • Limit response to 50 words maximum
            • Show response only without additional commentary

            CONTEXT (Relevant Policies):
            {policies}

            Based on this analysis: {content}""",
            "reviewer": """SYSTEM: You are a senior email quality assurance specialist for a medical company. 
            Ensure responses meet healthcare communication standards and comply with policies.

            INSTRUCTIONS:
            • Verify compliance with all relevant policies
            • Check for HIPAA violations
            • Assess professional tone and clarity
            • Review completeness of response
            • Evaluate appropriate handling of sensitive information
            • Confirm all action items are clearly stated
            • Limit response to 50 words maximum
            • Show response only without additional commentary

            CONTEXT (Relevant Policies):
            {policies}

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
            "policy_justifier": """SYSTEM: You are a policy expert. In 2 lines, explain why the following policies are relevant 
            to this email content. Be specific and concise.

            Email content: {content}
            Selected policies: {policies}""",
        }

    def process(self, content):
        # Get relevant policies for the email content
        relevant_policies = self.policy_retriever.get_relevant_policy(content)
        return prompt_llm(
            self.prompts[self.role].format(content=content, policies=relevant_policies)
        )


class EmailProcessingSystem:
    def __init__(self, client):
        self.analyzer = EmailAgent("analyzer", client)
        self.drafter = EmailAgent("drafter", client)
        self.reviewer = EmailAgent("reviewer", client)
        self.policy_justifier = EmailAgent("policy_justifier", client)

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

            # Get relevant policies for display
            relevant_policies = self.analyzer.policy_retriever.get_relevant_policy(
                email_content
            )

            # Add policy justification
            policy_justification = self.policy_justifier.process(
                f"Email: {email_content}\nPolicies: {relevant_policies}"
            )

            # Display formatted output
            print("\n" + "=" * 50)
            print("ORIGINAL EMAIL:\n")
            print(email_content)
            print("\n" + "=" * 50)
            print("DRAFT RESPONSE:\n")
            print(draft)
            print("\n" + "=" * 50)
            print("POLICY USED:\n")
            print(relevant_policies)
            print("\nPOLICY JUSTIFICATION:\n")
            print(policy_justification)
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
