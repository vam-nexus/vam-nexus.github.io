const quizData = {
    "info": {
        "title": "Python Coder Quiz",
        "description": "Test and enhance your knowledge of Python programming with these intriguing quiz questions."
    },
    "cards": [
        {
            "type": "concept",
            "content": {
                "heading": "Introduction to Python",
                "sentence1": "Python is a high-level, interpreted programming language known for its readability and versatile libraries.",
                "sentence2": "It is often used for web development, data analysis, machine learning, and automation.",
                "sentence3": "Python emphasizes simplicity and readability, which has led to its extensive use in both academia and industry."
            }
        },
        {
            "type": "quiz",
            "question": "What does the following Python code output?<br><code>print(3 * 'hello')</code>",
            "choices": ["hello", "hellohellohello", "Error", "3hello"],
            "answer": "hellohellohello",
            "justification": "In Python, multiplying a string by an integer repeats the string that many times."
        },
        {
            "type": "quiz",
            "question": "What does the following Python code output?<br><code>print(len('python') * 2)</code>",
            "choices": ["12", "6", "Error", "4"],
            "answer": "12",
            "justification": "The length of 'python' is 6, and multiplying by 2 results in 12."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Python Variables",
                "sentence1": "Variables in Python are dynamically typed and can hold different data types without explicit declaration.",
                "sentence2": "The assignment operator '=' is used to assign values to variables.",
                "sentence3": "Python's naming conventions suggest using lowercase with underscores for variable names to enhance code readability."
            }
        },
        {
            "type": "quiz",
            "question": "What does the following Python code output?<br><code>a = 5<br>b = a<br>a = 3<br>print(b)</code>",
            "choices": ["3", "5", "Error", "8"],
            "answer": "5",
            "justification": "The variable 'b' takes the initial value of 'a', which is 5, and remains unaffected by changes to 'a' thereafter."
        },
        {
            "type": "quiz",
            "question": "What does the following Python code output?<br><code>a, b = 1, 2<br>a, b = b, a<br>print(a, b)</code>",
            "choices": ["2 1", "1 2", "Error", "1 1"],
            "answer": "2 1",
            "justification": "This Python feature swaps the values of 'a' and 'b', resulting in 'a' being 2 and 'b' being 1."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Conditional Statements",
                "sentence1": "Python uses 'if', 'elif', and 'else' to perform conditional operations.",
                "sentence2": "Indentation is critical in Python as it defines the scope of the conditional blocks.",
                "sentence3": "Conditions evaluate to Boolean values, True or False, determining the block of code that executes."
            }
        },
        {
            "type": "quiz",
            "question": "What does the following Python code output?<br><code>x = 10<br>if x > 5:<br>&nbsp;&nbsp;print('high')<br>else:<br>&nbsp;&nbsp;print('low')</code>",
            "choices": ["high", "low", "Error", "10"],
            "answer": "high",
            "justification": "Since the condition 'x > 5' is true, the 'if' block executes, printing 'high'."
        },
        {
            "type": "quiz",
            "question": "What does the following Python code output?<br><code>y = 5<br>if y < 5:<br>&nbsp;&nbsp;print('small')<br>elif y == 5:<br>&nbsp;&nbsp;print('equal')<br>else:<br>&nbsp;&nbsp;print('large')</code>",
            "choices": ["equal", "small", "large", "Error"],
            "answer": "equal",
            "justification": "The 'elif' condition 'y == 5' is true, so the corresponding block executes, printing 'equal'."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Loops in Python",
                "sentence1": "Python supports 'for' and 'while' loops for iterative operations.",
                "sentence2": "'For' loops iterate over a sequence or range; 'while' loops repeat as long as a condition is true.",
                "sentence3": "Loops can be controlled using 'break', 'continue', and 'else' statements to manage flow."
            }
        },
        {
            "type": "quiz",
            "question": "What does the following Python code output?<br><code>for i in range(3):<br>&nbsp;&nbsp;print(i)</code>",
            "choices": ["0 1 2", "1 2 3", "3", "Error"],
            "answer": "0 1 2",
            "justification": "'range(3)' produces numbers from 0 up to, but not including, 3, hence the print outputs 0, 1, 2."
        },
        {
            "type": "quiz",
            "question": "What does the following Python code output?<br><code>x = 5<br>while x > 0:<br>&nbsp;&nbsp;print(x)<br>&nbsp;&nbsp;x -= 1</code>",
            "choices": ["5 4 3 2 1", "4 3 2 1", "5", "Error"],
            "answer": "5 4 3 2 1",
            "justification": "The while loop decrements 'x' from 5 until it is no longer greater than 0, printing each value."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Python Functions",
                "sentence1": "Functions in Python are defined using the 'def' keyword followed by the function name and parentheses.",
                "sentence2": "Functions enhance code modularity and reusability by encapsulating reusable blocks of code.",
                "sentence3": "Python allows functions to have default arguments and accept variable-length arguments using '*args' and '**kwargs'."
            }
        },
        {
            "type": "quiz",
            "question": "What does the following Python code output?<br><code>def greet(name='World'):<br>&nbsp;&nbsp;return 'Hello, ' + name<br>print(greet('Alice'))</code>",
            "choices": ["Hello, Alice", "Hello, World", "Error", "null"],
            "answer": "Hello, Alice",
            "justification": "The function 'greet' is called with the argument 'Alice', overriding the default parameter value."
        },
        {
            "type": "quiz",
            "question": "What does the following Python code output?<br><code>def add(a, b=2):<br>&nbsp;&nbsp;return a + b<br>print(add(3))</code>",
            "choices": ["5", "3", "Error", "2"],
            "answer": "5",
            "justification": "The function 'add' is called with one argument, using the default value for 'b', resulting in 3 + 2 = 5."
        }
    ]
}