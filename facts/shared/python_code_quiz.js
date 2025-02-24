const quizData = {
    "info": {
        "title": "Python Code Quiz",
        "description": "Test your knowledge of Python with these code-related questions and concepts."
    },
    "cards": [
        {
            "type": "concept",
            "content": {
                "heading": "Understanding Python Lists",
                "sentence1": "A list in Python is a mutable, ordered collection of elements.",
                "sentence2": "Lists can contain elements of different data types such as numbers, strings, and even other lists.",
                "sentence3": "They are defined using square brackets [], and elements are separated by commas."
            }
        },
        {
            "type": "quiz",
            "question": "What does the following code output?\n\nlist_example = [1, 2, 3]\nlist_example.append(4)\nprint(list_example)",
            "choices": ["[1, 2, 3]", "[1, 2, 3, 4]", "[1, 2, 3, 4, None]", "[None, 1, 2, 3, 4]"],
            "answer": "[1, 2, 3, 4]",
            "justification": "The append() method adds an element to the end of the list. Hence, the new list includes 4 at the end."
        },
        {
            "type": "quiz",
            "question": "What does the following code output?\n\nlist_example = [10, 20, 30, 40]\nprint(list_example[2])",
            "choices": ["10", "20", "30", "40"],
            "answer": "30",
            "justification": "In Python, list indexing starts at 0. The element at index 2 is 30."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Python String Methods",
                "sentence1": "Strings in Python are immutable sequences of characters.",
                "sentence2": "Common string methods include .lower(), .upper(), .find(), and .replace().",
                "sentence3": "These methods are used to perform various operations on strings, such as searching and modifying text."
            }
        },
        {
            "type": "quiz",
            "question": "What does the following code output?\n\nstring_example = 'HELLO WORLD'\nprint(string_example.lower())",
            "choices": ["hello world", "HELLO WORLD", "Hello World", "None"],
            "answer": "hello world",
            "justification": "The lower() method returns a copy of the string with all characters converted to lowercase."
        },
        {
            "type": "quiz",
            "question": "What does the following code output?\n\nstring_example = 'python programming'\nprint(string_example.replace('p', 'P'))",
            "choices": ["Python Programming", "PyPthon PrograPmming", "Python programming", "PytPon Programming"],
            "answer": "Python Programming",
            "justification": "The replace() method replaces all occurrences of 'p' with 'P' in the string."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Python Dictionary Basics",
                "sentence1": "Dictionaries in Python are unordered collections of key-value pairs.",
                "sentence2": "Keys must be unique and immutable, while values can be of any data type.",
                "sentence3": "Dictionaries are defined using curly braces {} with keys and values separated by colons."
            }
        },
        {
            "type": "quiz",
            "question": "What does the following code output?\n\ndict_example = {'a': 1, 'b': 2}\nprint(dict_example['a'])",
            "choices": ["1", "2", "'a'", "KeyError"],
            "answer": "1",
            "justification": "The key 'a' corresponds to the value 1 in the dictionary."
        },
        {
            "type": "quiz",
            "question": "What does the following code output?\n\ndict_example = {'x': 10, 'y': 20}\nprint(dict_example.get('z', 30))",
            "choices": ["10", "20", "30", "KeyError"],
            "answer": "30",
            "justification": "The get() method returns the value for the specified key if it exists. Otherwise, it returns the default value provided, which is 30 in this case."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Python Loop Fundamentals",
                "sentence1": "Python supports two types of loops: for and while loops.",
                "sentence2": "For loops iterate over a sequence, such as a list or string.",
                "sentence3": "While loops execute as long as a specified condition is true."
            }
        }
    ]
}