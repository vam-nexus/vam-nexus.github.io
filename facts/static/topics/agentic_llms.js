const quizData = {
    "info": {
        "title": "Agentic LLMs Exploration",
        "description": "Enhance your understanding of agentic large language models (LLMs) and their integration into AI systems."
    },
    "cards": [
        {
            "type": "concept",
            "content": {
                "heading": "What are Agentic LLMs?",
                "sentence1": "Agentic LLMs are AI systems where LLM outputs control the workflow, integrating LLM responses into code.",
                "sentence2": "Agency is not binary but exists on a spectrum, giving more or less power to an LLM in controlling workflows.",
                "sentence3": "These systems allow LLMs to access real-world information and act on programs, improving task-solving capabilities."
            }
        },
        {
            "type": "quiz",
            "question": "What is a key feature of agentic LLMs?",
            "choices": ["Pre-determined workflows", "Agency in workflows", "Random workflow generation", "Manual input required"],
            "answer": "Agency in workflows",
            "justification": "Agentic LLMs control or influence the workflow by integrating outputs into the operational flow of an application."
        },
        {
            "type": "quiz",
            "question": "In which situation might an agentic LLM setup be beneficial?",
            "choices": ["When tasks are predictable", "When minimal flexibility is needed", "For handling complex, uncertain tasks", "For basic arithmetic operations"],
            "answer": "For handling complex, uncertain tasks",
            "justification": "Agentic setups are beneficial when workflows cannot be easily determined in advance, allowing LLMs to adapt to complex task requirements."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Code Agents in Agentic LLMs",
                "sentence1": "Code agents utilize LLMs to write actions in executable code, rather than just data formats like JSON.",
                "sentence2": "Writing actions in code offers advantages in composability, object management, and generality.",
                "sentence3": "The representation of code actions is well covered in LLM training datasets, ensuring effective training outcomes."
            }
        },
        {
            "type": "quiz",
            "question": "Why are actions written in code preferred over JSON for agentic LLMs?",
            "choices": ["JSON is less structured", "Code lacks generality", "Code allows more complex operations", "JSON is not recognized by LLMs"],
            "answer": "Code allows more complex operations",
            "justification": "Code supports composability, object management, and can express complex sequences of actions, unlike JSON."
        },
        {
            "type": "quiz",
            "question": "What makes smolagents unique?",
            "choices": ["Complex architecture", "Requires large datasets", "Simplicity and code-first approach", "Limited to closed AI models"],
            "answer": "Simplicity and code-first approach",
            "justification": "Smolagents are designed with simplicity, minimal abstractions, and prioritize executing actions in code-based formats."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Building an Agent with Agentic LLMs",
                "sentence1": "Constructing an agent requires at least a list of tools and an LLM to drive the agent's decisions.",
                "sentence2": "Tools in this context are functions with specified inputs and outputs, documented with descriptions.",
                "sentence3": "LLMs act as the engine, determining when and how the tools should be utilized to achieve desired outcomes."
            }
        },
        {
            "type": "quiz",
            "question": "What is a fundamental element needed to construct an agent?",
            "choices": ["A single-purpose app", "A pre-built user interface", "A list of tools", "A static database"],
            "answer": "A list of tools",
            "justification": "The tools are essential for executing actions as directed by the LLM, forming a core part of the agent's functionality."
        },
        {
            "type": "quiz",
            "question": "Which LLM model can be used for building an agent?",
            "choices": ["Only proprietary models", "Only models from OpenAI", "Any LLM model", "Only models trained on text"],
            "answer": "Any LLM model",
            "justification": "Agentic systems can employ any LLM, leveraging models from open-source, proprietary providers, or a combination thereof."
        },
        {
            "type": "concept",
            "content": {
                "heading": "The Role of Smolagents",
                "sentence1": "Smolagents focus on simplicity and security, providing sandboxed environments for executing code.",
                "sentence2": "They integrate with various hubs and support multiple LLM models, offering flexibility and diversity in deployment.",
                "sentence3": "Smolagents are poised to succeed transformers.agents, simplifying agentic deployments within AI frameworks."
            }
        },
        {
            "type": "quiz",
            "question": "Which feature is NOT a characteristic of smolagents?",
            "choices": ["First-class code execution", "Limited to fixed models", "Hub integrations", "Simplified logic"],
            "answer": "Limited to fixed models",
            "justification": "Smolagents support multiple LLMs and integrate easily with various hubs, whereas being limited to fixed models is not a characteristic."
        },
        {
            "type": "quiz",
            "question": "How do smolagents ensure security in their operations?",
            "choices": ["By using open networks", "Through manual checks", "By executing in sandboxed environments", "By avoiding external tools"],
            "answer": "By executing in sandboxed environments",
            "justification": "Sandboxed environments provide a controlled setting for executing potentially risky actions, enhancing security."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Composability and Generality in Agentic LLMs",
                "sentence1": "Code provides a way to nest actions within each other, unlike JSON where actions are rigidly structured.",
                "sentence2": "A broad range of tasks can be expressed succinctly in code, providing more flexibility to system designers.",
                "sentence3": "The reliance on code aligns with training datasets, ensuring that LLMs can effectively learn these processes."
            }
        },
        {
            "type": "quiz",
            "question": "What allows agentic LLMs to manage object outputs effectively?",
            "choices": ["Using JSON objects", "Direct input manipulation", "Executing actions in code", "Uploading to a cloud server"],
            "answer": "Executing actions in code",
            "justification": "Code actions allow for sophisticated object management, enhancing the agent's capability to store and manipulate data."
        },
        {
            "type": "quiz",
            "question": "Which is an advantage of writing actions in code over JSON for representation in LLMs?",
            "choices": ["Limited scalability", "Reduced training data relevance", "Abundance in LLM training data", "Increased complexity"],
            "answer": "Abundance in LLM training data",
            "justification": "Code actions are frequently part of LLM training datasets, meaning models are already familiar with such representations."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Agentic Systems and Real-world Tasks",
                "sentence1": "Agentic systems streamline complex real-world tasks that exceed predefined, static workflows.",
                "sentence2": "They enable programs to evolve from simple instruction sets to dynamic task execution processes.",
                "sentence3": "Examples include apps responding to diverse user needs, with LLMs determining the most effective response paths."
            }
        },
        {
            "type": "quiz",
            "question": "Why are agentic systems suitable for complex tasks?",
            "choices": ["Strict predefined workflows", "They avoid real-time adjustments", "They provide adaptable workflows", "Focus only on arithmetic tasks"],
            "answer": "They provide adaptable workflows",
            "justification": "Adaptable workflows allow agentic systems to manage tasks that conventional fixed-path logic can't handle efficiently."
        },
        {
            "type": "quiz",
            "question": "What is the role of the LLM in an agentic system?",
            "choices": ["To compute static data", "To approve manual entries", "To decide the execution flow", "To document actions"],
            "answer": "To decide the execution flow",
            "justification": "LLMs determine the workflow actions based on input data, granting them the ability to adjust the system's operations."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Implementing Tools in Agentic LLM Systems",
                "sentence1": "Tools are functions that the agent can call, each with specific inputs, outputs, and functionality descriptions.",
                "sentence2": "Tools are annotated with type hints and docstrings for ease of integration and understanding.",
                "sentence3": "Effective tool design allows agents to perform a wide variety of tasks by leveraging external resources and APIs."
            }
        },
        {
            "type": "quiz",
            "question": "What is important when designing tools for agentic LLM systems?",
            "choices": ["Generic input types", "Opaque outputs", "Clear type hints and descriptions", "Manual result processing"],
            "answer": "Clear type hints and descriptions",
            "justification": "Type hints and descriptions ensure that tools are understandable and can be effectively used by the agent to perform tasks."
        },
        {
            "type": "quiz",
            "question": "How do tools function within an agentic system?",
            "choices": ["As standalone apps", "Integrated with LLMs inputs", "Independent of any system", "Exclusively manual tools"],
            "answer": "Integrated with LLMs inputs",
            "justification": "Tools interact with LLMs by receiving inputs, performing actions, and returning outputs needed for task completion."
        },
        {
            "type": "concept",
            "content": {
                "heading": "The Efficacy of Open Models in Agentic LLM Systems",
                "sentence1": "Open source models now rival closed models in agentic workflow performance.",
                "sentence2": "Benchmarks show that open models can effectively execute complex agentic tasks.",
                "sentence3": "Developers can leverage a variety of open models, benefiting from community-driven improvements and transparency."
            }
        },
        {
            "type": "quiz",
            "question": "What is a significant advantage of open models in agentic systems?",
            "choices": ["Lack of community support", "Limited functionality", "Community-driven improvements", "Restricted use cases"],
            "answer": "Community-driven improvements",
            "justification": "Open models benefit from continuous enhancements and feedback from a global developer community, fostering rapid advancements."
        },
        {
            "type": "quiz",
            "question": "How do benchmarks help in evaluating open models for agentic workflows?",
            "choices": ["By ignoring task complexity", "By focusing on commercial value", "By providing performance insights", "By comparing manual actions"],
            "answer": "By providing performance insights",
            "justification": "Benchmarks offer critical data on model performance across various tasks, helping to assess their suitability for agentic systems."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Smolagents and Transformative Potential",
                "sentence1": "Smolagents aim to replace transformers.agents, providing a more streamlined, efficient approach.",
                "sentence2": "Their design emphasizes simplicity, aligning with the evolving needs of AI-driven applications.",
                "sentence3": "As AI complexity grows, the need for versatile, easy-to-use agents like smolagents becomes even more pronounced."
            }
        },
        {
            "type": "quiz",
            "question": "Which attribute is NOT part of smolagents' purpose?",
            "choices": ["Complicated interface", "Ease of use", "Flexibility", "Supporting diverse LLMs"],
            "answer": "Complicated interface",
            "justification": "Smolagents are designed to simplify the agent design and implementation process, avoiding overly complicated interfaces."
        },
        {
            "type": "quiz",
            "question": "Why are smolagents considered transformative for AI applications?",
            "choices": ["They focus on niche applications", "They rely on deprecated technology", "They simplify complex tasks", "They cannot adapt to new models"],
            "answer": "They simplify complex tasks",
            "justification": "Smolagents streamline the integration of LLMs into workflows, making AI systems more efficient and scalable."
        }
    ]
}