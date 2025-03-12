import gradio as gr
import json

# TODO: Replace this sample dataset with your own domain-specific examples
# Format:
# - input: list of dictionaries containing content, category, and source
# - expected_output: list of lists containing quiz questions for each input
dataset = {
    "input": [
        {
            "keystrokes": 150,
            "mouse_movements": 300,
            "time_spent": "2 hours",
            "task": "coding",
        },
        {
            "keystrokes": 50,
            "mouse_movements": 100,
            "time_spent": "30 minutes",
            "task": "reading",
        },
        {
            "content": "Climate Change Science",
            "category": "wikipedia",
            "source": "https://en.wikipedia.org/wiki/Climate_change",
        },
        {
            "keystrokes": 30,
            "mouse_movements": 50,
            "time_spent": "15 minutes",
            "task": "browsing",
        },
        {
            "keystrokes": 100,
            "mouse_movements": 200,
            "time_spent": "1 hour",
            "task": "designing",
        },
    ],
    "expected_output": [
        [
            {
                "recommendation": "Take a 5-minute break to stretch and rest your eyes.",
                "reason": "You've been coding for 2 hours with high activity, which can lead to fatigue.",
            },
        ],
        [
            {
                "recommendation": "Try a quick focus exercise to enhance concentration.",
                "reason": "Low activity during reading suggests potential distraction.",
            },
        ],
        [
            {
                "recommendation": "Consider a short walk to refresh your mind.",
                "reason": "Extended writing session with high activity can cause mental fatigue.",
            },
        ],
        [
            {
                "recommendation": "Engage in a brief meditation to regain focus.",
                "reason": "Short browsing session with low activity indicates possible lack of engagement.",
            },
        ],
        [
            {
                "recommendation": "Switch tasks to maintain creativity and prevent burnout.",
                "reason": "Designing for an hour with moderate activity can benefit from task variation.",
            },
        ],
    ],
}


def show_data_point(index):
    # Simplified input display template
    input_template = """
    <div style="border: 2px solid #ddd; border-radius: 8px; padding: 15px; background-color: white;">
    
    ### 📖 Topic: {content}
    
    
    🏷️ **Category**: {category}
    
    🔗 **Source**: {source}
    </div>
    """

    input_data = dataset["input"][index]
    quiz_data = dataset["expected_output"][index]

    header_text = f"## Example {index + 1}"
    input_text = input_template.format(**input_data)

    # Format quiz questions with cleaner structure
    output_parts = [
        '<div style="border: 2px solid #ddd; border-radius: 8px; padding: 15px; background-color: white;">',
        "\n\n### 📝 Quiz Questions\n\n",
    ]

    for i, quiz in enumerate(quiz_data, 1):
        output_parts.extend(
            [
                f"#### Q{i}: {quiz['question']}\n\n",
                *[
                    f"{chr(97 + j)}) {option}\n\n\n"
                    for j, option in enumerate(quiz["options"])
                ],
                f"\n✅ **Correct Answer**: {chr(96 + quiz['correct'] + 1)}\n",
                f"\n💡 **Explanation**: {quiz.get('justification', 'No explanation provided.')}\n",
                "\n---\n\n",
            ]
        )

    output_parts.append("</div>")
    output_text = "".join(output_parts)

    return header_text, input_text, output_text


# Create Gradio interface
with gr.Blocks(theme=gr.themes.Soft()) as demo:
    gr.Markdown(
        """
    # 📚 Omniscient Dataset Explorer
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

        with gr.Column(scale=1):
            gr.Markdown("## Input")
            input_text = gr.Markdown(
                label="Input",
                value=show_data_point(0)[1],  # Initialize with first example
            )
        with gr.Column(scale=2):
            gr.Markdown("## Expected Output")
            output_text = gr.Markdown(  # Changed from Textbox to Markdown
                label="Expected Output",
                value=show_data_point(0)[2],  # Initialize with first example
            )

    index_slider.change(
        show_data_point,
        inputs=[index_slider],
        outputs=[header, input_text, output_text],  # Add header to outputs
    )

if __name__ == "__main__":
    demo.launch()
