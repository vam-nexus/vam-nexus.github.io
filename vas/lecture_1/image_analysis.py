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

# Get Client
your_api_key = "9806a2601560024637df1e4acd804862faa67e08637db6598d920b64eebba43e"
client = Together(api_key=your_api_key)


def prompt_llm(prompt, image_path=None, show_cost=False):
    # This function allows us to prompt an LLM via the Together API

    # model
    model = "togetherai/Qwen-QwQ-32B-Preview"

    # Calculate the number of tokens
    tokens = len(prompt.split())

    # Calculate and print estimated cost for each model
    if show_cost:
        print(f"\nNumber of tokens: {tokens}")
        cost = (0.1 / 1_000_000) * tokens
        print(f"Estimated cost for {model}: ${cost:.10f}\n")

    # Prepare the messages
    messages = [{"role": "user", "content": prompt}]

    # If an image is provided, add it to the messages
    if image_path:
        with open(image_path, "rb") as img_file:
            image_data = img_file.read()
        messages.append({"role": "user", "content": image_data, "type": "image"})

    # Make the API call
    response = client.chat.completions.create(
        model=model,
        messages=messages,
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


print("LLM Ready!")

# Example usage
response = prompt_llm(
    "What are the key benefits of learning Python for AI development?",
    image_path="/Users/issam.laradji/projects/vam-nexus.github.io/image.png",
    show_cost=False,
)
print(response)
