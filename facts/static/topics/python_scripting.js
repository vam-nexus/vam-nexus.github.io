const quizData = {
    "info": {
        "title": "Python Scripting Quiz",
        "description": "Test your knowledge of Python scripting with these concept highlights and quiz questions."
    },
    "cards": [
        {
            "type": "concept",
            "content": {
                "heading": "Introduction to Python Scripting",
                "sentence1": "Python scripting involves writing programs using a series of commands to perform tasks automatically.",
                "sentence2": "Python is known for its simple syntax, making it a popular choice for beginners and experts alike.",
                "sentence3": "Common uses of Python scripting include automation, data analysis, and web development."
            }
        },
        {
            "type": "quiz",
            "question": "What does the following Python code output?\n\n<pre><code>print('Hello World')</code></pre>",
            "choices": ["Hello", "World", "Hello World", "Error"],
            "answer": "Hello World",
            "justification": "The print function outputs the string given to it, which in this case is 'Hello World'."
        },
        {
            "type": "quiz",
            "question": "What is the output of this code?\n\n<pre><code>print(len('Python'))</code></pre>",
            "choices": ["5", "6", "7", "Error"],
            "answer": "6",
            "justification": "The len function returns the number of characters in a string. 'Python' has 6 characters."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Understanding Variables",
                "sentence1": "Variables in Python are used to store information that can be referenced and manipulated.",
                "sentence2": "Python supports dynamic typing, meaning you don't need to declare the variable type.",
                "sentence3": "Variable names should be meaningful and adhere to Python's naming conventions."
            }
        },
        {
            "type": "quiz",
            "question": "What does this code print?\n\n<pre><code>x = 10\ny = x + 5\nprint(y)</code></pre>",
            "choices": ["10", "15", "5", "Error"],
            "answer": "15",
            "justification": "The variable 'y' is assigned the value of 'x' + 5, which is 15."
        },
        {
            "type": "quiz",
            "question": "What is the output of this code?\n\n<pre><code>name = 'Alice'\nprint('Hello ' + name)</code></pre>",
            "choices": ["Hello", "Alice", "Hello Alice", "Error"],
            "answer": "Hello Alice",
            "justification": "The '+' operator concatenates strings, so the output is 'Hello Alice'."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Loops and Iteration",
                "sentence1": "Loops in Python are used to repeat a block of code multiple times.",
                "sentence2": "The 'for' loop is used to iterate over a sequence like a list, tuple, or string.",
                "sentence3": "The 'while' loop continues executing as long as the specified condition is true."
            }
        },
        {
            "type": "quiz",
            "question": "What is the output of this loop?\n\n<pre><code>for i in range(3):\n    print(i)</code></pre>",
            "choices": ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
            "answer": "0 1 2",
            "justification": "The range(3) generates numbers 0 to 2, and each is printed in sequence."
        },
        {
            "type": "quiz",
            "question": "What will the following code output?\n\n<pre><code>i = 0\nwhile i < 3:\n    print(i)\n    i += 1</code></pre>",
            "choices": ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
            "answer": "0 1 2",
            "justification": "The loop starts with i = 0 and runs until i becomes 3, printing 0, 1, and 2."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Functions in Python",
                "sentence1": "Functions are blocks of code that only run when they are called.",
                "sentence2": "You can pass data, known as parameters, into a function.",
                "sentence3": "Functions can return data as a result."
            }
        },
        {
            "type": "quiz",
            "question": "What does this function print?\n\n<pre><code>def greet(name):\n    return 'Hello ' + name\n\nprint(greet('Bob'))</code></pre>",
            "choices": ["Hello", "Bob", "Hello Bob", "Error"],
            "answer": "Hello Bob",
            "justification": "The function greet returns 'Hello ' concatenated with 'Bob', which is then printed."
        },
        {
            "type": "quiz",
            "question": "What will the following code output?\n\n<pre><code>def add(a, b):\n    return a + b\n\nprint(add(3, 4))</code></pre>",
            "choices": ["7", "34", "3 4", "Error"],
            "answer": "7",
            "justification": "The add function returns the sum of the two parameters, which is 7."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Python Lists",
                "sentence1": "Lists in Python are ordered collections of items that are changeable.",
                "sentence2": "Items in a list can be of different data types.",
                "sentence3": "Lists are defined with square brackets and elements separated by commas."
            }
        },
        {
            "type": "quiz",
            "question": "What does the following code output?\n\n<pre><code>fruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])</code></pre>",
            "choices": ["apple", "banana", "cherry", "Error"],
            "answer": "banana",
            "justification": "Lists are zero-indexed, so fruits[1] accesses the second element, 'banana'."
        },
        {
            "type": "quiz",
            "question": "What will this code print?\n\n<pre><code>numbers = [1, 2, 3]\nnumbers.append(4)\nprint(numbers)</code></pre>",
            "choices": ["[1, 2, 3]", "[4, 1, 2, 3]", "[1, 2, 3, 4]", "Error"],
            "answer": "[1, 2, 3, 4]",
            "justification": "The append method adds the element '4' to the end of the list."
        }
    ]
}