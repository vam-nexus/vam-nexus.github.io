const quizData = {
    "info": {
        "title": "Time Series Analysis Quiz",
        "description": "Explore and test your knowledge about time series analysis, its components, and popular models."
    },
    "cards": [
        {
            "type": "concept",
            "content": {
                "heading": "Understanding Time Series Analysis",
                "sentence1": "Time series analysis is crucial for identifying patterns and predicting future trends in data over time.",
                "sentence2": "By examining trends, seasonality, and cycles, organizations improve decision-making and strategic planning.",
                "sentence3": "This analysis is essential in fields like finance, weather forecasting, and inventory management."
            }
        },
        {
            "type": "quiz",
            "question": "What is a trend in time series data?",
            "choices": ["Random fluctuations", "Repeated patterns", "Long-term increase or decrease", "Seasonal variation"],
            "answer": "Long-term increase or decrease",
            "justification": "A trend represents a persistent, long-term movement in data, either upward or downward."
        },
        {
            "type": "quiz",
            "question": "Which of the following represents seasonality in time series?",
            "choices": ["Sudden drops due to events", "Cyclical economic changes", "Patterns repeating monthly or yearly", "Random data variations"],
            "answer": "Patterns repeating monthly or yearly",
            "justification": "Seasonality refers to periodic patterns that repeat at consistent intervals, such as monthly or yearly cycles."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Types of Time Series Data",
                "sentence1": "Time series data can be classified into trends, seasonality, cyclical patterns, and irregular variations.",
                "sentence2": "Trends show general directions, while seasonality involves periodic fluctuations.",
                "sentence3": "Cyclical patterns are longer-term economic fluctuations, and irregular variations are random noise."
            }
        },
        {
            "type": "quiz",
            "question": "What differentiates cyclical patterns from seasonality?",
            "choices": ["Regular intervals", "Length of cycles", "Predictable patterns", "Lack of randomness"],
            "answer": "Length of cycles",
            "justification": "Cyclical patterns last longer and are associated with economic cycles, unlike the short-term regularity of seasonal changes."
        },
        {
            "type": "quiz",
            "question": "Which model is popular for non-seasonal time series data?",
            "choices": ["SARIMA", "Holt's Linear", "ARIMA", "Brown's Model"],
            "answer": "ARIMA",
            "justification": "ARIMA (AutoRegressive Integrated Moving Average) is widely used for non-seasonal time series forecasting."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Popular Time Series Models",
                "sentence1": "Several models are used to forecast time series, each with unique strengths.",
                "sentence2": "Smoothing models like the Simple Moving Average and Exponential Smoothing help observe trends.",
                "sentence3": "Advanced models like ARIMA and LSTM are used for more complex predictions."
            }
        },
        {
            "type": "quiz",
            "question": "Which method would you use for simple trend observation?",
            "choices": ["LSTM", "Simple Moving Average", "SARIMA", "Prophet"],
            "answer": "Simple Moving Average",
            "justification": "The Simple Moving Average is a basic method used to smooth out short-term fluctuations and highlight longer-term trends."
        },
        {
            "type": "quiz",
            "question": "What is an advantage of using Simple Exponential Smoothing?",
            "choices": ["Handling seasonality", "Handling random noise", "Capturing level and trend", "Predicting long-term cycles"],
            "answer": "Capturing level and trend",
            "justification": "Simple Exponential Smoothing is effective for capturing data level and short-term trends in non-seasonal data."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Forecasting with Time Series Models",
                "sentence1": "Forecasting involves using historical data to predict future points in the series.",
                "sentence2": "Models like ARIMA and Prophet are designed for accurate forecasting by accounting for various data components.",
                "sentence3": "Understanding the appropriate model for your dataset enhances prediction accuracy."
            }
        },
        {
            "type": "quiz",
            "question": "Which time series model is developed by Facebook?",
            "choices": ["Prophet", "ARIMA", "Holt's Model", "LSTM"],
            "answer": "Prophet",
            "justification": "Prophet is a flexible forecasting tool created by Facebook to handle diverse data scenarios, integrating trends, and seasonalities."
        },
        {
            "type": "quiz",
            "question": "What type of network is LSTM in machine learning?",
            "choices": ["Convolutional", "Feedforward", "Recurrent", "SOM"],
            "answer": "Recurrent",
            "justification": "LSTM (Long Short-Term Memory) is a type of Recurrent Neural Network (RNN) designed to handle sequence prediction tasks by remembering long-term dependencies."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Understanding Seasonality in Time Series",
                "sentence1": "Seasonality involves predictable changes that repeat over a calendar period, such as weekly, monthly, or yearly.",
                "sentence2": "Identifying seasonal patterns helps improve forecasting accuracy by adjusting for known fluctuations.",
                "sentence3": "Effective seasonal adjustment provides a clearer view of the non-seasonal trend and cyclical movements."
            }
        },
        {
            "type": "quiz",
            "question": "Which attribute best describes irregular data in time series?",
            "choices": ["Predictable", "Periodic", "Random", "Cyclical"],
            "answer": "Random",
            "justification": "Irregular data, or noise, consists of random, unpredictable fluctuations that don't follow a structured pattern."
        },
        {
            "type": "quiz",
            "question": "What does SARIMA stand for in time series analysis?",
            "choices": ["Seasonal Autoregressive Integrated Moving Average", "Simple Additive Integrated Moving Analysis", "Seasonal Adding Recorded Integrated Measures Analysis", "Standard Autoregressive Integrated Mixed Attributes"],
            "answer": "Seasonal Autoregressive Integrated Moving Average",
            "justification": "SARIMA (Seasonal ARIMA) is a model that extends ARIMA by including seasonal components, allowing for seasonal pattern predictions."
        }
    ]
}