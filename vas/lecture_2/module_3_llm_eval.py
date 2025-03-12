import gradio as gr
import json
from together import Together

# Sample dataset with input texts and corresponding quiz questions
dataset = {
    "input": [
        {
            "content": "Quantum Computing Basics",
            "category": "text",
            "source": "educational_material",
        },
        {
            "content": "Machine Learning Fundamentals",
            "category": "text",
            "source": "educational_material",
        },
        {
            "content": "Climate Change Science",
            "category": "wikipedia",
            "source": "https://en.wikipedia.org/wiki/Climate_change",
        },
        {
            "content": "human_biology_101.pdf",
            "category": "pdf",
            "source": "course_materials",
        },
        {
            "content": "World War II Overview",
            "category": "wikipedia",
            "source": "https://en.wikipedia.org/wiki/World_War_II",
        },
    ],
    "expected_output": [
        [
            {
                "question": "What is a qubit?",
                "options": [
                    "A classical computer bit",
                    "A quantum bit that can be in superposition",
                    "A measurement unit",
                    "A quantum programming language",
                ],
                "correct": 1,
                "justification": "A qubit is a quantum bit that can exist in superposition, meaning it can be in multiple states simultaneously, unlike classical bits which can only be 0 or 1.",
            },
            {
                "question": "Which principle states that you cannot measure a quantum state without affecting it?",
                "options": [
                    "Einstein's Relativity",
                    "Newton's Third Law",
                    "Heisenberg's Uncertainty Principle",
                    "Schrödinger's Cat Principle",
                ],
                "correct": 2,
                "justification": "Heisenberg's Uncertainty Principle is a fundamental principle of quantum mechanics that states the act of measuring a quantum system inevitably disturbs it, making it impossible to simultaneously know certain pairs of physical properties with absolute precision.",
            },
            {
                "question": "What is quantum entanglement?",
                "options": [
                    "A programming error",
                    "A mathematical equation",
                    "A physical connection between particles",
                    "A quantum state where particles are interconnected",
                ],
                "correct": 3,
                "justification": "Quantum entanglement is a unique quantum phenomenon where two or more particles become interconnected in such a way that the quantum state of each particle cannot be described independently, even when separated by large distances.",
            },
        ],
        [
            {
                "question": "What is a key component of machine learning?",
                "options": [
                    "Manual programming only",
                    "Learning from data and patterns",
                    "Hardware manufacturing",
                    "Network cables",
                ],
                "correct": 1,
                "justification": "Machine learning fundamentally relies on algorithms that can learn from and make predictions based on data patterns, rather than being explicitly programmed with fixed rules.",
            },
            {
                "question": "What is supervised learning?",
                "options": [
                    "Learning without a teacher",
                    "Learning with labeled data",
                    "Learning by observation",
                    "Learning through reinforcement",
                ],
                "correct": 1,
                "justification": "Supervised learning is a type of machine learning where the algorithm learns from labeled training data, using pairs of input examples and their desired outputs to learn a mapping function.",
            },
            {
                "question": "What is a neural network?",
                "options": [
                    "A biological brain",
                    "A computer processor",
                    "A mathematical model inspired by brain structure",
                    "A type of computer memory",
                ],
                "correct": 2,
                "justification": "A neural network is a computational model that mimics the structure and function of biological neural networks, using interconnected nodes (artificial neurons) to process information and learn patterns.",
            },
        ],
        [
            {
                "question": "What is the greenhouse effect?",
                "options": [
                    "Plant growth in greenhouses",
                    "Atmospheric heat trapping",
                    "Solar panel technology",
                    "Wind patterns",
                ],
                "correct": 1,
                "justification": "The greenhouse effect is a natural process where certain gases in Earth's atmosphere trap heat from the sun, similar to how a greenhouse works, keeping the planet warm enough to sustain life.",
            },
            {
                "question": "Which gas is the most abundant greenhouse gas?",
                "options": [
                    "Carbon dioxide",
                    "Methane",
                    "Water vapor",
                    "Nitrous oxide",
                ],
                "correct": 2,
                "justification": "Water vapor is the most abundant greenhouse gas in Earth's atmosphere, playing a crucial role in the planet's natural greenhouse effect and climate regulation.",
            },
            {
                "question": "What is a carbon footprint?",
                "options": [
                    "A fossil record",
                    "A shoe size",
                    "Total greenhouse gas emissions",
                    "A measurement of coal",
                ],
                "correct": 2,
                "justification": "A carbon footprint measures the total amount of greenhouse gases produced directly and indirectly by human activities, expressed as carbon dioxide equivalent.",
            },
        ],
        [
            {
                "question": "What is the basic unit of life?",
                "options": [
                    "Atom",
                    "Cell",
                    "Molecule",
                    "Tissue",
                ],
                "correct": 1,
                "justification": "The cell is considered the basic unit of life because it is the smallest structure capable of performing all the functions necessary for life, including metabolism, growth, and reproduction.",
            },
            {
                "question": "What is the function of DNA?",
                "options": [
                    "Energy production",
                    "Waste removal",
                    "Genetic information storage",
                    "Cell movement",
                ],
                "correct": 2,
                "justification": "DNA (Deoxyribonucleic acid) serves as the storage medium for genetic information, containing the instructions needed for an organism to develop, survive, and reproduce.",
            },
            {
                "question": "Which organ system circulates blood?",
                "options": [
                    "Digestive system",
                    "Respiratory system",
                    "Nervous system",
                    "Cardiovascular system",
                ],
                "correct": 3,
                "justification": "The cardiovascular system, consisting of the heart, blood vessels, and blood, is responsible for circulating blood throughout the body to transport oxygen, nutrients, and waste products.",
            },
        ],
        [
            {
                "question": "When did World War II begin?",
                "options": [
                    "1935",
                    "1939",
                    "1941",
                    "1945",
                ],
                "correct": 1,
                "justification": "World War II officially began on September 1, 1939, when Nazi Germany invaded Poland, leading Britain and France to declare war on Germany two days later.",
            },
            {
                "question": "Who were the Axis Powers?",
                "options": [
                    "USA, UK, and France",
                    "Germany, Italy, and Japan",
                    "Russia, China, and India",
                    "Canada, Australia, and New Zealand",
                ],
                "correct": 1,
                "justification": "The Axis Powers were the alliance of Germany, Italy, and Japan who fought against the Allied Powers during World War II, forming the core of the Axis alliance.",
            },
            {
                "question": "What event marked the end of WWII in the Pacific?",
                "options": [
                    "Battle of Midway",
                    "D-Day invasion",
                    "Atomic bombings of Japan",
                    "Fall of Berlin",
                ],
                "correct": 2,
            },
        ],
    ],
}

# TODO: 1. Customize your API key or use environment variables for security
your_api_key = "9806a2601560024637df1e4acd804862faa67e08637db6598d920b64eebba43e"
client = Together(api_key=your_api_key)


def prompt_llm(prompt):
    model = "meta-llama/Meta-Llama-3-8B-Instruct-Lite"
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}],
    )
    return response.choices[0].message.content


def show_data_point(index):
    input_data = dataset["input"][index]
    quiz_data = dataset["expected_output"][index]

    # Update header with current index + 1
    header_text = f"## Example {index + 1}"

    # Format the input display with markdown and symbols, now with a box
    input_text = """
<div style="border: 2px solid #ddd; border-radius: 8px; padding: 15px; background-color: #ddfff5;">

### 📖 Topic: {content}

🏷️ **Category**: {category}

🔗 **Source**: {source}

</div>
""".format(
        **input_data
    )

    # Format the output in markdown with styled box
    output_text = """
<div style="border: 2px solid #ddd; border-radius: 8px; padding: 15px; background-color: #ddfff5;">

### 📝 Quiz Questions

"""
    for i, quiz in enumerate(quiz_data, 1):
        output_text += f"#### Q{i}: {quiz['question']}\n\n"
        for j, option in enumerate(quiz["options"]):
            output_text += f"{chr(97 + j)}) {option}\n\n"
        output_text += f"\n✅ **Correct Answer**: {chr(96 + quiz['correct'] + 1)}\n"
        if "justification" in quiz:
            output_text += f"\n💡 **Explanation**: {quiz['justification']}\n"
        output_text += "\n---\n\n"

    output_text += "</div>"

    return header_text, input_text, output_text


def evaluate_output(llm_output, index):
    expected = dataset["expected_output"][index]

    # TODO: 5. Customize the evaluation prompt to match your specific evaluation criteria
    evaluation_prompt = f"""As an expert evaluator, compare the generated quiz questions with the expected output and rate them on three criteria (scale 1-10):

Generated Output:
{llm_output}

Expected Output:
{json.dumps(expected, indent=2)}

Rate on these criteria:
1. Content Accuracy: How well do the questions test relevant knowledge?
2. Question Quality: Are questions clear, well-structured, and unambiguous?
3. Educational Value: How effective are the explanations and learning value?

Provide ratings and brief justifications in this format:
Content Accuracy: [X/10]
[Brief justification]

Question Quality: [X/10]
[Brief justification]

Educational Value: [X/10]
[Brief justification]

Overall Average: [X/10]
"""

    response = prompt_llm(evaluation_prompt)
    return response


# Create Gradio interface
with gr.Blocks(theme=gr.themes.Soft()) as demo:
    gr.Markdown(
        """
    # 📚 Omniscient Prompt XRay with LLM Evaluation
    Explore quiz questions generated for different topics.
    """
    )
    header = gr.Markdown("## Example 1")  # We'll update this dynamically
    with gr.Row():
        index_slider = gr.Slider(
            minimum=0,
            maximum=len(dataset["input"]) - 1,
            step=1,
            value=0,
            label="Data Point Index",
            container=False,
        )

    with gr.Row():
        # Input section with prompt
        with gr.Column(scale=1):
            gr.Markdown("## Input")
            with gr.Row():
                input_text = gr.Markdown(
                    label="Input",
                    value=show_data_point(0)[1],
                )
        with gr.Column():
            run_prompt_btn = gr.Button("Run Prompt")

            # TODO: 2. Modify this prompt template to match your specific use case
            prompt_llm_text = gr.TextArea(
                label="Prompt Template",
                value="""You are an expert quiz generator, skilled at creating engaging and educational multiple-choice questions.

# TODO: 3. Customize these instructions for your specific requirements
Generate 3 multiple-choice questions about the given topic with 4 
options each. Include explanations for the correct answers.

# TODO: 4. Adjust the output format as needed
Use this external format for the output:
- Q1: Question 1
- A1: Option 1
- A2: Option 2
- A3: Option 3
- A4: Option 4
- Correct Answer: 1
- Explanation: Explanation for the correct answer

## Use this external knowledge to generate the questions:
{content}

## Instructions
- Make sure to include the explanations for the correct answers.
- Make sure to include the options in the correct format.
- Make sure to include the question number in the correct format.
- Make sure to include the question in the correct format.
- Make sure to include the options in the correct format.
- Make sure to include the correct answer in the correct format.""",
                lines=10,
                interactive=True,
                container=True,
                show_label=True,
                elem_classes="custom-textarea",
            )

    with gr.Row():
        with gr.Column(scale=1):
            gr.Markdown("## Expected Output")
            output_text = gr.Markdown(
                label="Expected Output",
                value=show_data_point(0)[2],
            )

        # Output section with LLM output and expected output
        with gr.Column(scale=1):
            gr.Markdown("## LLM Output")
            llm_output = gr.TextArea(
                label="LLM Output",
                value="LLM output will appear here...",
                lines=10,
            )

            with gr.Row():
                approve_btn = gr.Button("Approve and Save")
                evaluate_btn = gr.Button("Evaluate Output")
                save_status = gr.Markdown("")
            evaluation_output = gr.TextArea(
                label="Evaluation",
                value="Evaluation will appear here...",
                lines=10,
                interactive=False,
            )

    # Add function to save approved output
    def save_approved_output(index, prompt_template, llm_output):
        input_data = dataset["input"][index]
        output_data = {
            "input": input_data,
            "prompt": prompt_template,
            "llm_output": llm_output,
        }

        # Save to JSON file with timestamp
        from datetime import datetime

        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"approved_outputs_{timestamp}.json"

        with open(filename, "w") as f:
            json.dump(output_data, f, indent=4)

        return f"✅ Saved! File: `{filename}`"

    # Connect the approve button
    approve_btn.click(
        save_approved_output,
        inputs=[index_slider, prompt_llm_text, llm_output],
        outputs=[save_status],
    )

    index_slider.change(
        show_data_point,
        inputs=[index_slider],
        outputs=[header, input_text, output_text],
    )

    def generate_llm_response(index, prompt_template):
        input_data = dataset["input"][index]
        prompt = prompt_template.format(content=input_data["content"])
        response = prompt_llm(prompt)
        return response

    # Connect the run prompt button to only generate response
    run_prompt_btn.click(
        generate_llm_response,
        inputs=[index_slider, prompt_llm_text],
        outputs=[llm_output],
    )

    # Keep the separate evaluate button functionality
    evaluate_btn.click(
        evaluate_output,
        inputs=[llm_output, index_slider],
        outputs=[evaluation_output],
    )

if __name__ == "__main__":
    demo.launch(debug=True)
