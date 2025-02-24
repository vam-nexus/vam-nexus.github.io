const quizData = {
  "info": {
    "title": "Effective Agents Study",
    "description": "Learn and test your knowledge about building effective large language model agents using simple, composable patterns."
  },
  "cards": [
    {
      "type": "concept",
      "content": {
        "heading": "Introduction to Effective Agents",
        "sentence1": "Effective agents are systems built with large language models that can operate autonomously or within defined workflows.",
        "sentence2": "The key to success lies in simplicity, composability, and understanding when to use agents.",
        "sentence3": "Agents should only be used when autonomy and model-driven decision-making are crucial."
      }
    },
    {
      "type": "quiz",
      "question": "What is the primary building block of agentic systems?",
      "choices": ["Static Model", "Augmented LLM", "Traditional AI", "Neural Networks"],
      "answer": "Augmented LLM",
      "justification": "Augmented LLMs are central to agentic systems, as they can incorporate additional capabilities like retrieval, tools, and memory."
    },
    {
      "type": "quiz",
      "question": "Which workflow is best for breaking a task into predictable subtasks?",
      "choices": ["Parallelization", "Prompt Chaining", "Routing", "Evaluator-Optimizer"],
      "answer": "Prompt Chaining",
      "justification": "Prompt chaining is ideal for tasks that can be systematically decomposed into manageable subtasks."
    },
    {
      "type": "concept",
      "content": {
        "heading": "When to Use Agents",
        "sentence1": "Agents are beneficial for tasks requiring flexibility and decision-making at scale.",
        "sentence2": "They should be avoided if simpler solutions suffice, due to higher latency and cost.",
        "sentence3": "Workflows are preferable for predictable and consistent task execution."
      }
    },
    {
      "type": "quiz",
      "question": "What is a common trade-off when using agentic systems?",
      "choices": ["Speed for simplicity", "Latency and cost for performance", "Flexibility for rigidity", "Accuracy for complexity"],
      "answer": "Latency and cost for performance",
      "justification": "Agentic systems often trade off increased latency and cost to achieve better task performance."
    },
    {
      "type": "quiz",
      "question": "Why might workflows be preferred over agents for certain tasks?",
      "choices": ["They require specialized knowledge", "They are more complex", "They offer predictability", "They are slower"],
      "answer": "They offer predictability",
      "justification": "Workflows are favored for tasks with predefined paths, offering predictability and consistency."
    },
    {
      "type": "concept",
      "content": {
        "heading": "Frameworks in Building Agents",
        "sentence1": "Frameworks like LangGraph and Amazon Bedrock simplify implementing agentic systems.",
        "sentence2": "They can, however, obscure prompts and underlying code, making debugging harder.",
        "sentence3": "Direct use of LLM APIs is encouraged for understanding basic patterns."
      }
    },
    {
      "type": "quiz",
      "question": "What should developers focus on when using frameworks for agents?",
      "choices": ["Ease of use", "Complexity", "Cost effectiveness", "Understanding the underlying code"],
      "answer": "Understanding the underlying code",
      "justification": "Thorough understanding of underlying code prevents errors due to incorrect assumptions."
    },
    {
      "type": "quiz",
      "question": "Which framework provides a drag and drop GUI for building LLM workflows?",
      "choices": ["LangGraph", "Rivet", "Vellum", "Amazon Bedrock"],
      "answer": "Rivet",
      "justification": "Rivet is known for its drag and drop GUI, facilitating the creation of LLM workflows."
    },
    {
      "type": "concept",
      "content": {
        "heading": "Building Blocks: The Augmented LLM",
        "sentence1": "Augmented LLMs enhance basic models with abilities like retrieval and tool usage.",
        "sentence2": "They serve as the fundamental building blocks for agentic systems.",
        "sentence3": "Effective documentation and tool integration are critical for augmented LLMs."
      }
    },
    {
      "type": "quiz",
      "question": "What is an essential feature of the augmented LLM?",
      "choices": ["Static capabilities", "Learning from scratch", "Use of third-party tools", "Manual decision-making"],
      "answer": "Use of third-party tools",
      "justification": "Augmented LLMs actively use third-party tools to enhance their functionality."
    },
    {
      "type": "quiz",
      "question": "Why is the Model Context Protocol important for augmented LLMs?",
      "choices": ["It limits tool usage", "It integrates with other ecosystems", "It provides security", "It reduces complexity"],
      "answer": "It integrates with other ecosystems",
      "justification": "The Model Context Protocol helps augmented LLMs connect with a variety of tools and external resources."
    },
    {
      "type": "concept",
      "content": {
        "heading": "Workflow: Prompt Chaining",
        "sentence1": "Prompt chaining breaks down tasks into sequential LLM calls.",
        "sentence2": "Each step processes the output from the previous call.",
        "sentence3": "It enhances accuracy by making each task more manageable."
      }
    },
    {
      "type": "quiz",
      "question": "Which task is a good fit for prompt chaining?",
      "choices": ["Predicting stock trends", "Generating marketing copy", "Drawing complex artwork", "Organizing events"],
      "answer": "Generating marketing copy",
      "justification": "Generating and subsequently translating marketing copy can be sequentially broken down using prompt chaining."
    },
    {
      "type": "quiz",
      "question": "What is a primary advantage of using prompt chaining?",
      "choices": ["Reduced LLM calls", "Faster process completion", "Increased accuracy", "Simplification of tasks"],
      "answer": "Increased accuracy",
      "justification": "Prompt chaining improves accuracy by allowing tasks to be broken into smaller, more precisely handled subtasks."
    },
    {
      "type": "concept",
      "content": {
        "heading": "Workflow: Routing",
        "sentence1": "Routing directs inputs to specialized follow-up tasks.",
        "sentence2": "It enables building specialized prompts for different input categories.",
        "sentence3": "This approach is effective for tasks with distinct input classifications."
      }
    },
    {
      "type": "quiz",
      "question": "Which task benefits most from the routing workflow?",
      "choices": ["Photograph editing", "Customer service query handling", "Weather forecasting", "Travel scheduling"],
      "answer": "Customer service query handling",
      "justification": "Routing different types of customer queries (e.g., refunds vs. technical support) to specialized responses can enhance efficiency and effectiveness."
    },
    {
      "type": "quiz",
      "question": "Why might routing be chosen over prompt chaining for a given task?",
      "choices": ["To increase latency", "To handle distinct input types separately", "To simplify tasks", "To reduce output"],
      "answer": "To handle distinct input types separately",
      "justification": "Routing excels when a task involves varied input categories that require distinct handling."
    },
    {
      "type": "concept",
      "content": {
        "heading": "Workflow: Parallelization",
        "sentence1": "Parallelization allows LLMs to process tasks simultaneously.",
        "sentence2": "This can be done by sectioning tasks or through voting for diverse outputs.",
        "sentence3": "It is ideal for tasks with multiple independent subtasks."
      }
    },
    {
      "type": "quiz",
      "question": "In parallelization, what does 'sectioning' refer to?",
      "choices": ["Verifying outputs", "Breaking tasks into independent subtasks", "Combining duplicate tasks", "Applying identical processes"],
      "answer": "Breaking tasks into independent subtasks",
      "justification": "Sectioning involves dividing a task into independent parts that can be processed in parallel for faster completion."
    },
    {
      "type": "quiz",
      "question": "When is the voting method used in parallelization?",
      "choices": ["For uniform outputs", "For diverse perspectives", "To simplify outputs", "To change tasks"],
      "answer": "For diverse perspectives",
      "justification": "Voting involves running the same task multiple times to gain diverse outputs and perspectives."
    },
    {
      "type": "concept",
      "content": {
        "heading": "Workflow: Orchestrator-Workers",
        "sentence1": "An orchestrator dynamically breaks tasks into subtasks and delegates them to worker LLMs.",
        "sentence2": "This workflow is flexible, allowing task decomposition on-the-fly.",
        "sentence3": "It is suited for unpredictable, complex tasks."
      }
    },
    {
      "type": "quiz",
      "question": "What sets orchestrator-workers apart from parallelization?",
      "choices": ["Using static paths", "Fixed chaining", "Flexibility in task breakdown", "Single-focus tasks"],
      "answer": "Flexibility in task breakdown",
      "justification": "The orchestrator-workers model adapts dynamically, breaking down tasks as required, unlike the static decomposition in parallelization."
    },
    {
      "type": "quiz",
      "question": "What is a key characteristic of the orchestrator-workers workflow?",
      "choices": ["Predictable subtasking", "Static task delegation", "Dynamic delegation", "Single channel operation"],
      "answer": "Dynamic delegation",
      "justification": "The orchestrator dynamically delegates subtasks, providing flexibility in managing complex tasks."
    },
    {
      "type": "concept",
      "content": {
        "heading": "Workflow: Evaluator-Optimizer",
        "sentence1": "This workflow involves an iterative loop of generating and evaluating responses.",
        "sentence2": "The optimizer refines outputs based on evaluations.",
        "sentence3": "Ideal for tasks with clear evaluation criteria."
      }
    },
    {
      "type": "quiz",
      "question": "What kind of tasks are suited for evaluator-optimizer workflows?",
      "choices": ["Tasks requiring constant feedback", "Instant-response tasks", "Low complexity tasks", "Non-verifiable outcomes"],
      "answer": "Tasks requiring constant feedback",
      "justification": "Evaluator-Optimizer workflows excel when tasks can be iteratively improved using structured feedback and clear evaluation metrics."
    },
    {
      "type": "quiz",
      "question": "In the evaluator-optimizer workflow, what role does the evaluator play?",
      "choices": ["Task initiator", "Feedback provider", "Task definer", "Final approver"],
      "answer": "Feedback provider",
      "justification": "The evaluator's main function is to provide feedback that the optimizer uses to refine the task output."
    },
    {
      "type": "concept",
      "content": {
        "heading": "Autonomous Agents",
        "sentence1": "Agents independently handle tasks from start to finish using LLMs.",
        "sentence2": "They gain 'ground truth' at each step, ensuring progress and accuracy.",
        "sentence3": "Agents are ideal for open-ended problems in trusted environments."
      }
    },
    {
      "type": "quiz",
      "question": "What ensures progress in autonomous agent tasks?",
      "choices": ["Guesswork", "Random trials", "Access to ground truth", "Predefined scripts"],
      "answer": "Access to ground truth",
      "justification": "Agents progress efficiently by obtaining and using ground truth information from their environment at each step."
    },
    {
      "type": "quiz",
      "question": "Why are autonomous agents considered higher risk?",
      "choices": ["They require human monitoring", "They are cost-effective", "They have lower performance", "They can compound errors"],
      "answer": "They can compound errors",
      "justification": "Autonomous agents, due to their independence and complexity, can multiply errors during operations if not properly managed."
    },
    {
      "type": "concept",
      "content": {
        "heading": "Combining and Customizing Patterns",
        "sentence1": "These workflow patterns are not rigid and can be adapted to fit specific needs.",
        "sentence2": "Customization often involves combining workflows to optimize performance.",
        "sentence3": "The key is to measure performance and refine implementations iteratively."
      }
    },
    {
      "type": "quiz",
      "question": "Why is it recommended to start with simple prompts when building agents?",
      "choices": ["To reduce initial complexity", "To skip testing", "For faster deployment", "To reach more users"],
      "answer": "To reduce initial complexity",
      "justification": "Beginning with simple prompts minimizes complexity, allowing focus on basic functionality before scaling up."
    },
    {
      "type": "quiz",
      "question": "What is a crucial principle in designing agent-computer interfaces?",
      "choices": ["Obscurity", "Simplicity", "Anonymity", "Complex demonstrations"],
      "answer": "Simplicity",
      "justification": "Simplicity ensures that agent-computer interactions are intuitive, reducing errors and improving reliability."
    },
    {
      "type": "concept",
      "content": {
        "heading": "Effective Use Cases for Agents",
        "sentence1": "Agents excel in applications requiring both conversation and action.",
        "sentence2": "Examples include customer support and coding tasks where feedback loops add value.",
        "sentence3": "Successful implementations feature clear success metrics and human oversight."
      }
    }
  ]
}