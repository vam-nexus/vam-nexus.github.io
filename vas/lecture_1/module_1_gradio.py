# import libraries
import requests
from PIL import Image

# suppress warnings
import warnings

warnings.filterwarnings("ignore")

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


if __name__ == "__main__":
    emails = ["issam.laradji@gmail.com", "issam.laradji@gmail.com"]

    def get_response(user_message):
        # 1. Add your external knowledge here
        external_knowledge = """
        Life is a journey of self-discovery and growth.
        It's a process of learning, adapting, and evolving.
        """

        # 2. Generate a text response using the llm
        chatbot_prompt = f"""
        You are a senior singer who gives advice to new singers

        respond to this {user_message} following these instructions:

        ## Instructions:
        * be very concise
        * always start with ahhhhhhh
        * then sing something after your advice
        * Ground all your answers based on this {external_knowledge}
        """

        response = client.chat.completions.create(
            model="meta-llama/Meta-Llama-3-8B-Instruct-Lite",
            messages=[{"role": "user", "content": chatbot_prompt}],
        )
        response = response.choices[0].message.content

        # 3. Generate image based on the response
        image_prompt = f"A {response} in a pop art style"
        image = gen_image(image_prompt)

        return response, image

    # Example usage
    user_message = "How can I improve my singing?"
    response, image = get_response(user_message)
    print(f"User: {user_message}")
    print(f"Bot: {response}")
    print("Image has been generated and saved as 'image.png'")
