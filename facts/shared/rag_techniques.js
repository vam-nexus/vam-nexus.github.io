const quizData = {
    "info": {
        "title": "RAG Techniques Overview",
        "description": "Enhance your understanding of Retrieval-Augmented Generation techniques and applications."
    },
    "cards": [
        {
            "type": "concept",
            "content": {
                "heading": "Understanding RAG: Retrieval and Generation Phases",
                "sentence1": "RAG systems combine document retrieval and generation using large language models.",
                "sentence2": "The retrieval phase involves gathering relevant documents or data chunks.",
                "sentence3": "The generation phase synthesizes this data with the model's knowledge to produce answers."
            }
        },
        {
            "type": "quiz",
            "question": "Which of the following is not a phase in RAG systems?",
            "choices": ["Retrieval", "Generation", "Analysis", "Indexing"],
            "answer": "Analysis",
            "justification": "RAG systems comprise retrieval and generation phases. Analysis is not a distinct phase in RAG."
        },
        {
            "type": "quiz",
            "question": "What is the primary function of the retrieval phase in RAG?",
            "choices": ["To generate text", "To index data", "To retrieve relevant documents", "To analyze data accuracy"],
            "answer": "To retrieve relevant documents",
            "justification": "The retrieval phase's main goal is to gather relevant documents or data chunks for further processing in RAG systems."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Challenges in Naive RAG",
                "sentence1": "Naive RAG directly uses retrieved data as input, often without refinement.",
                "sentence2": "It faces challenges in complex queries and may have slower responses.",
                "sentence3": "This approach may lead to inefficiencies and higher costs with large datasets."
            }
        },
        {
            "type": "quiz",
            "question": "Which of the following is a major drawback of Naive RAG?",
            "choices": ["Complexity in setup", "Cost-efficiency", "Inability to handle simple queries", "Inaccurate results for complex queries"],
            "answer": "Inaccurate results for complex queries",
            "justification": "Naive RAG can struggle with providing accurate results for complex queries, highlighting one of its key limitations."
        },
        {
            "type": "quiz",
            "question": "Why might Naive RAG incur higher costs?",
            "choices": ["Due to faster response times", "Because of inefficient data retrieval", "Because it uses less data", "It involves simpler computational tasks"],
            "answer": "Because of inefficient data retrieval",
            "justification": "Naive RAG can be costly due to slower and inefficient retrieval processes, especially with large datasets."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Advanced RAG Techniques",
                "sentence1": "Advanced RAG techniques improve accuracy, efficiency, and relevance in data retrieval and generation.",
                "sentence2": "Techniques include re-ranking, auto-merging, and advanced filtering.",
                "sentence3": "These methods ensure the retrieval of the most relevant information quickly."
            }
        },
        {
            "type": "quiz",
            "question": "Which technique is not typically used in Advanced RAG?",
            "choices": ["Re-ranking", "Auto-merging", "Filtering", "Static retrieval"],
            "answer": "Static retrieval",
            "justification": "Static retrieval is generally associated with less advanced systems, whereas advanced RAG employs dynamic techniques."
        },
        {
            "type": "quiz",
            "question": "What is the key benefit of Advanced RAG techniques?",
            "choices": ["Reduced data storage", "Simplified algorithms", "Improved retrieval accuracy", "Minimized pre-processing"],
            "answer": "Improved retrieval accuracy",
            "justification": "Advanced RAG techniques offer better accuracy and efficiency in retrieving and generating data."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Pre-Retrieval and Data-Indexing Techniques",
                "sentence1": "Pre-retrieval techniques enhance data quality before it's indexed.",
                "sentence2": "Data cleaning and organization are crucial to improve retrieval outcomes.",
                "sentence3": "Techniques like increasing information density and deduplication are employed."
            }
        },
        {
            "type": "quiz",
            "question": "Why is data cleaning important before indexing?",
            "choices": ["To increase database size", "To integrate with other systems", "To improve retrieval outcomes", "To make fetching data slower"],
            "answer": "To improve retrieval outcomes",
            "justification": "Clean and well-organized data ensures more accurate and relevant retrieval outputs."
        },
        {
            "type": "quiz",
            "question": "Which process increases information density using LLMs?",
            "choices": ["Summarizing text", "Expanding text", "Converting data", "Replicating data"],
            "answer": "Summarizing text",
            "justification": "LLMs can be used to summarize verbose texts, enhancing information density for efficient retrieval."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Retrieval Techniques in RAG",
                "sentence1": "Retrieval techniques optimize the way relevant data is fetched.",
                "sentence2": "These techniques involve indexing strategies and effective search algorithms.",
                "sentence3": "Filtering mechanisms further refine search results for relevance."
            }
        },
        {
            "type": "quiz",
            "question": "What technique improves precision by organizing data hierarchically?",
            "choices": ["Flat indexing", "Sequential sorting", "Hierarchical indexing", "Random indexing"],
            "answer": "Hierarchical indexing",
            "justification": "Hierarchical indexing organizes data into a category-based structure, enhancing retrieval precision."
        },
        {
            "type": "quiz",
            "question": "How does optimizing search queries benefit RAG applications?",
            "choices": ["It makes queries longer", "Enhances retrievers' usability", "Simplifies the knowledge graph", "Reduces response speed"],
            "answer": "Enhances retrievers' usability",
            "justification": "By structuring queries better, optimized search queries improve the effectiveness of retrievers in RAG applications."
        }
    ]
}