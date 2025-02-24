const quizData = {
    "info": {
        "title": "Data Science Interview Preparation",
        "description": "Enhance your understanding and readiness for data science interviews with key concepts and quizzes."
    },
    "cards": [
        {
            "type": "concept",
            "content": {
                "heading": "Understanding Multicollinearity",
                "sentence1": "Multicollinearity occurs when two or more independent variables in a linear regression model are highly correlated.",
                "sentence2": "This condition can inflate the variances of the parameter estimates and can make the estimates very sensitive to changes in the model.",
                "sentence3": "Detect multicollinearity using variance inflation factor (VIF) or correlation matrices."
            }
        },
        {
            "type": "quiz",
            "question": "Which of the following is NOT a supervised learning algorithm?",
            "choices": ["Linear Regression", "K-Means Clustering", "Support Vector Machine", "Decision Tree"],
            "answer": "K-Means Clustering",
            "justification": "K-Means Clustering is an unsupervised learning algorithm used for clustering, while the others are supervised learning algorithms used for classification or regression tasks."
        },
        {
            "type": "quiz",
            "question": "What metric would you use to evaluate a classification model in an imbalanced dataset?",
            "choices": ["Accuracy", "Precision-Recall Curve", "Mean Absolute Error", "R-squared"],
            "answer": "Precision-Recall Curve",
            "justification": "In imbalanced datasets, metrics like accuracy can be misleading. Precision-Recall curves provide better insights by focusing on the minority class performance."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Feature Engineering Importance",
                "sentence1": "Feature engineering is the process of using domain knowledge to extract features from raw data, enhancing model performance.",
                "sentence2": "Common techniques include creating polynomial features, normalizing data, and encoding categorical variables.",
                "sentence3": "It's crucial for improving the quality and predictive power of models, especially in complex datasets."
            }
        },
        {
            "type": "quiz",
            "question": "In which situation would you use a ROC curve?",
            "choices": ["To evaluate the performance of a regression model", "To visualize the tuning of model hyperparameters", "To assess the performance of a classification model", "To analyze time-series forecasting models"],
            "answer": "To assess the performance of a classification model",
            "justification": "A Receiver Operating Characteristic (ROC) curve is used to visualize the true positive rate against the false positive rate for a classifier across different thresholds."
        },
        {
            "type": "quiz",
            "question": "Which technique is used to prevent overfitting in a model?",
            "choices": ["Increasing number of features", "Adding noise to the data", "Regularization", "Increasing model complexity"],
            "answer": "Regularization",
            "justification": "Regularization introduces a penalty for larger coefficients in the model, discouraging overly complex models that might overfit the data."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Gradient Descent Optimization",
                "sentence1": "Gradient descent is a first-order iterative optimization algorithm used to find the minimum of a function.",
                "sentence2": "It is commonly used for training machine learning models, especially in neural networks.",
                "sentence3": "Variants like stochastic gradient descent and mini-batch gradient descent can improve efficiency and speed."
            }
        },
        {
            "type": "quiz",
            "question": "What does the term 'bias-variance tradeoff' refer to?",
            "choices": ["Adjusting bias and variance to minimize error", "Balancing complexity and simplicity in models", "Choosing hyperparameters for optimization", "Refining models to increase computational cost"],
            "answer": "Balancing complexity and simplicity in models",
            "justification": "The bias-variance tradeoff involves finding the right balance between a model's complexity and simplicity to minimize total error on data not seen by the model."
        },
        {
            "type": "quiz",
            "question": "Which method would you use to handle missing data in datasets?",
            "choices": ["Completely ignoring missing data", "Using machine learning algorithms", "Imputation", "Creating new variables"],
            "answer": "Imputation",
            "justification": "Imputation methods like mean, median, or mode replacement, as well as more advanced techniques like KNN or model-based imputation, are commonly used to handle missing data in datasets."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Dimensionality Reduction Techniques",
                "sentence1": "Dimensionality reduction reduces the number of random variables under consideration by obtaining a set of principal variables.",
                "sentence2": "Principal Component Analysis (PCA) and t-Distributed Stochastic Neighbor Embedding (t-SNE) are popular techniques.",
                "sentence3": "These methods help in visualization and mitigating the curse of dimensionality."
            }
        },
        {
            "type": "quiz",
            "question": "What does 'p-value' represent in hypothesis testing?",
            "choices": ["Probability of Type I error", "Probability that null hypothesis is true", "Likelihood of observed results under the null hypothesis", "Measure of effect size"],
            "answer": "Likelihood of observed results under the null hypothesis",
            "justification": "A p-value indicates how extreme the observed data is, assuming the null hypothesis is true. Lower p-values suggest stronger evidence against the null hypothesis."
        },
        {
            "type": "quiz",
            "question": "Which is NOT a benefit of using ensemble methods?",
            "choices": ["Increased accuracy", "Reduced variance", "Interpretability", "Improved robustness"],
            "answer": "Interpretability",
            "justification": "While ensemble methods like Random Forest or Gradient Boosting improve accuracy and robustness, they often reduce model interpretability compared to simpler models."
        },
        {
            "type": "quiz",
            "question": "Which of the following is a type of cross-validation?",
            "choices": ["Bootstrap", "Bagging", "K-Fold", "Boosting"],
            "answer": "K-Fold",
            "justification": "K-Fold Cross-Validation is a resampling technique used to evaluate models and assess their performance by partitioning the dataset into K consecutive folds."
        },
        {
            "type": "quiz",
            "question": "Which statement about the k-NN algorithm is correct?",
            "choices": ["It's a linear model", "It can only be used for regression tasks", "It requires feature scaling", "It inherently prevents overfitting"],
            "answer": "It requires feature scaling",
            "justification": "k-NN is sensitive to feature scales due to its reliance on distance calculations, making feature scaling a crucial preprocessing step for accurate predictions."
        },
        {
            "type": "quiz",
            "question": "A data scientist wants to reduce the dimensionality of the dataset while preserving its variance. Which technique should they use?",
            "choices": ["t-SNE", "PCA", "Random Forest", "Linear Regression"],
            "answer": "PCA",
            "justification": "Principal Component Analysis (PCA) is a dimensionality reduction technique that projects data into a lower-dimensional space while maintaining as much variance as possible."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Model Evaluation Metrics",
                "sentence1": "Choosing the right evaluation metric is crucial for model assessment.",
                "sentence2": "For regression tasks, use metrics like RMSE, MAE, or R-squared.",
                "sentence3": "For classification, consider accuracy, precision, recall, F1-score, and AUC-ROC based on the importance and context of the problem."
            }
        }
    ]
}