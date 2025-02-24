const quizData = {
    "info": {
        "title": "Data Science Interview Preparation",
        "description": "Enhance your knowledge and preparation for data science interviews with these essential questions and concepts."
    },
    "cards": [
        {
            "type": "concept",
            "content": {
                "heading": "Understanding Overfitting and Underfitting",
                "sentence1": "Overfitting occurs when a model learns the training data too well, capturing noise along with the underlying patterns.",
                "sentence2": "Underfitting happens when a model is too simple to capture the underlying pattern of the data.",
                "sentence3": "Balancing model complexity and training data size is crucial to finding the sweet spot in predictive modeling."
            }
        },
        {
            "type": "quiz",
            "question": "Which of the following is considered a supervised learning algorithm?",
            "choices": ["K-Means Clustering", "Principal Component Analysis", "Linear Regression", "Autoencoders"],
            "answer": "Linear Regression",
            "justification": "Linear Regression is a supervised learning algorithm used for predictive modeling, where the output variable is continuous."
        },
        {
            "type": "quiz",
            "question": "What is the main goal of Principal Component Analysis (PCA)?",
            "choices": [
                "To increase the number of features",
                "To perform cluster analysis",
                "To reduce dimensionality while retaining most of the variance",
                "To predict categorical variables"
            ],
            "answer": "To reduce dimensionality while retaining most of the variance",
            "justification": "PCA is primarily used for dimensionality reduction by transforming the original variables into a new set of variables (principal components) that capture the most variance."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Data Cleaning and Preprocessing",
                "sentence1": "Data cleaning involves handling missing values, outliers, and inconsistencies within the dataset.",
                "sentence2": "Preprocessing includes normalization, standardization, and encoding categorical variables to prepare data for modeling.",
                "sentence3": "Steps like feature scaling and transformation are essential to meet the assumptions of many machine learning models."
            }
        },
        {
            "type": "quiz",
            "question": "What is the purpose of a validation set in machine learning?",
            "choices": [
                "To train the model",
                "To evaluate model performance during training",
                "To test the final model performance",
                "To preprocess the data"
            ],
            "answer": "To evaluate model performance during training",
            "justification": "A validation set is used to fine-tune a model by assessing its performance and avoiding overfitting on the training data."
        },
        {
            "type": "quiz",
            "question": "Which metric is commonly used to evaluate classification models?",
            "choices": [
                "Mean Squared Error",
                "F1 Score",
                "Root Mean Squared Logarithmic Error",
                "Variance"
            ],
            "answer": "F1 Score",
            "justification": "The F1 Score is a widely used metric for classification, as it balances precision and recall, especially in imbalanced datasets."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Feature Engineering and Selection",
                "sentence1": "Feature engineering involves creating new features or transforming existing ones to improve model performance.",
                "sentence2": "Feature selection helps in choosing the most relevant features and removing redundant or irrelevant ones.",
                "sentence3": "Methods like Recursive Feature Elimination (RFE) and LASSO regression are commonly used for feature selection."
            }
        },
        {
            "type": "quiz",
            "question": "Which data distribution is commonly assumed by many statistical models?",
            "choices": ["Uniform", "Normal", "Exponential", "Poisson"],
            "answer": "Normal",
            "justification": "The normal distribution, also known as Gaussian distribution, is frequently assumed due to its properties and the Central Limit Theorem."
        },
        {
            "type": "quiz",
            "question": "What is the main function of an activation function in a neural network?",
            "choices": [
                "To initialize the weights",
                "To introduce non-linearity into the model",
                "To optimize the loss function",
                "To standardize input data"
            ],
            "answer": "To introduce non-linearity into the model",
            "justification": "Activation functions, like ReLU and sigmoid, introduce non-linearity into neural networks, enabling them to learn complex patterns."
        },
        {
            "type": "quiz",
            "question": "Which technique is used to prevent overfitting in neural networks?",
            "choices": [
                "Batch normalization",
                "Gradient descent",
                "Dropout",
                "Boosting"
            ],
            "answer": "Dropout",
            "justification": "Dropout is a regularization technique where randomly selected neurons are ignored during training to prevent overfitting and improve model generalization."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Understanding Bias and Variance Tradeoff",
                "sentence1": "Bias refers to errors introduced by approximating complex real-world problems using a simplified model.",
                "sentence2": "Variance refers to how much a model's predictions would change with different training data.",
                "sentence3": "Achieving a balance between bias and variance is key to building a robust model that generalizes well on new data."
            }
        },
        {
            "type": "quiz",
            "question": "Which algorithm is known for its use in both classification and regression tasks?",
            "choices": [
                "Decision Trees",
                "K-Means",
                "Affinity Propagation",
                "Association Rule Learning"
            ],
            "answer": "Decision Trees",
            "justification": "Decision Trees are versatile and can be used for both classification and regression tasks due to their ability to handle different types of data."
        },
        {
            "type": "quiz",
            "question": "What is the purpose of A/B testing in data science?",
            "choices": [
                "To sort data randomly",
                "To compare two versions of a variable",
                "To validate statistical models",
                "To assess data quality"
            ],
            "answer": "To compare two versions of a variable",
            "justification": "A/B testing is used to compare two versions of a webpage, feature, or treatment to statistically determine which one performs better."
        },
        {
            "type": "quiz",
            "question": "Which technique can be used to improve model performance on imbalanced datasets?",
            "choices": [
                "AdaBoost",
                "SMOTE",
                "Normalization",
                "Principal Component Analysis"
            ],
            "answer": "SMOTE",
            "justification": "SMOTE (Synthetic Minority Over-sampling Technique) creates synthetic samples to balance the class distribution in an imbalanced dataset."
        },
        {
            "type": "quiz",
            "question": "Which of the following methods helps in dealing with missing data?",
            "choices": [
                "Ensemble Learning",
                "K-Means Clustering",
                "Imputation",
                "Gradient Descent"
            ],
            "answer": "Imputation",
            "justification": "Imputation techniques involve replacing missing data with substituted values, such as the mean, median, or predicted values from other variables."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Model Evaluation and Metrics",
                "sentence1": "Model evaluation is critical in assessing the performance of a predictive model and compares various models.",
                "sentence2": "Common metrics include accuracy, precision, recall, F1 Score for classification, and RMSE or MAE for regression.",
                "sentence3": "Evaluating models on unseen test data helps ensure that they generalize well beyond the training dataset."
            }
        },
        {
            "type": "quiz",
            "question": "Which algorithm is most appropriate for reducing the number of features while maintaining relationships in data?",
            "choices": [
                "PCA (Principal Component Analysis)",
                "Linear Regression",
                "Support Vector Machine",
                "K-Nearest Neighbors"
            ],
            "answer": "PCA (Principal Component Analysis)",
            "justification": "PCA is used for feature reduction by transforming the data into a set of orthogonal components ordered by the amount of variance they explain, thus maintaining data relationships."
        }
    ]
}