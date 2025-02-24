const quizData = {
    "info": {
        "title": "ASCII Knowledge Quiz",
        "description": "Explore and test your understanding of ASCII codes, history, and usage in computing."
    },
    "cards": [
        {
            "type": "concept",
            "content": {
                "heading": "Introduction to ASCII",
                "sentence1": "ASCII stands for American Standard Code for Information Interchange.",
                "sentence2": "It is a character encoding standard used for electronic communication.",
                "sentence3": "ASCII codes represent text in computers and other devices using numbers."
            }
        },
        {
            "type": "quiz",
            "question": "What is the standard range of ASCII codes?",
            "choices": ["0-255", "0-127", "256-511", "128-255"],
            "answer": "0-127",
            "justification": "The standard ASCII table uses 7 bits, providing 128 unique codes ranging from 0 to 127."
        },
        {
            "type": "quiz",
            "question": "Which ASCII character represents the decimal value 65?",
            "choices": ["A", "B", "C", "D"],
            "answer": "A",
            "justification": "The ASCII code for the uppercase letter 'A' is 65."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Extended ASCII",
                "sentence1": "Extended ASCII is an 8-bit character encoding that includes extra characters.",
                "sentence2": "It allows ASCII to represent 256 different symbols, characters, and control codes.",
                "sentence3": "This extension was developed to accommodate non-English languages and additional symbols."
            }
        },
        {
            "type": "quiz",
            "question": "What does the ASCII character with code 32 represent?",
            "choices": ["Space", "Tab", "Enter", "Backspace"],
            "answer": "Space",
            "justification": "In ASCII, the character code 32 corresponds to a space character."
        },
        {
            "type": "quiz",
            "question": "Which of these is a control character in the ASCII table?",
            "choices": ["A", "Z", "Tab", "9"],
            "answer": "Tab",
            "justification": "Tab is a control character in the ASCII table, specifically used for horizontal tabulation."
        },
        {
            "type": "concept",
            "content": {
                "heading": "ASCII and Unicode",
                "sentence1": "ASCII is a subset of Unicode, a much larger character set.",
                "sentence2": "Unicode encompasses a wide range of characters and symbols from many writing systems worldwide.",
                "sentence3": "ASCII's limitation of 128 characters is overcome by Unicode's extensive library."
            }
        },
        {
            "type": "quiz",
            "question": "How many bits are used in Unicode, compared to ASCII's 7 bits?",
            "choices": ["8 bits", "16 bits", "24 bits", "32 bits"],
            "answer": "16 bits",
            "justification": "Unicode typically uses 16 bits for its encoding scheme, allowing for a much larger set of characters compared to ASCII."
        },
        {
            "type": "quiz",
            "question": "Which ASCII character is used to represent a new line?",
            "choices": ["LF", "CR", "FF", "RS"],
            "answer": "LF",
            "justification": "The Line Feed (LF) character, with ASCII code 10, is used to represent a new line."
        },
        {
            "type": "concept",
            "content": {
                "heading": "ASCII File Formats",
                "sentence1": "ASCII is often used in text file formats such as .txt and source code files.",
                "sentence2": "These files contain plain text represented using ASCII characters.",
                "sentence3": "Using ASCII ensures compatibility across various systems and platforms."
            }
        },
        {
            "type": "quiz",
            "question": "Which ASCII code is used to denote an exclamation mark?",
            "choices": ["32", "33", "65", "90"],
            "answer": "33",
            "justification": "The exclamation mark is represented by ASCII code 33."
        },
        {
            "type": "quiz",
            "question": "Which character is represented by the ASCII code 48?",
            "choices": ["0", "P", ".", "*"],
            "answer": "0",
            "justification": "In ASCII, the code 48 represents the numeral '0'."
        },
        {
            "type": "concept",
            "content": {
                "heading": "History of ASCII",
                "sentence1": "ASCII was developed in the 1960s by the American National Standards Institute (ANSI).",
                "sentence2": "It was designed to facilitate the exchange of information between different systems.",
                "sentence3": "ASCII became widely adopted due to its simplicity and efficiency for text representation."
            }
        },
        {
            "type": "quiz",
            "question": "When was the first ASCII standard published?",
            "choices": ["1957", "1963", "1971", "1980"],
            "answer": "1963",
            "justification": "The first ASCII standard was published in 1963 by ANSI."
        },
        {
            "type": "quiz",
            "question": "Which of the following is NOT part of the original 7-bit ASCII codes?",
            "choices": ["@", "#", "$", "&"],
            "answer": "&",
            "justification": "The character '&' is part of the ASCII set, whereas the others were introduced later or differ from the original 7-bit set."
        }
    ]
}