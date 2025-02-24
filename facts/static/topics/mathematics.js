const quizData = {
    "info": {
        "title": "Mathematics Knowledge Quiz",
        "description": "Test your understanding of fundamental concepts and interesting facts in mathematics."
    },
    "cards": [
        {
            "type": "concept",
            "content": {
                "heading": "The Origins of Zero",
                "sentence1": "The concept of zero as a number originated in ancient India.",
                "sentence2": "Indian mathematicians used zero in calculations and as a placeholder in positional number systems.",
                "sentence3": "This concept was later transmitted to the Arab world and then to Europe."
            }
        },
        {
            "type": "quiz",
            "question": "Who is known as the 'Father of Geometry'?",
            "choices": ["Euclid", "Pythagoras", "Aristotle", "Archimedes"],
            "answer": "Euclid",
            "justification": "Euclid, a Greek mathematician, is often referred to as the 'Father of Geometry' due to his work in the field and his influential book 'Elements'."
        },
        {
            "type": "quiz",
            "question": "What is the value of Pi (π) approximated to two decimal places?",
            "choices": ["3.12", "3.14", "3.16", "3.18"],
            "answer": "3.14",
            "justification": "Pi (π) is an irrational number and is commonly approximated as 3.14 for basic calculations."
        },
        {
            "type": "concept",
            "content": {
                "heading": "The Fibonacci Sequence",
                "sentence1": "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.",
                "sentence2": "It starts with 0 and 1, leading to the sequence: 0, 1, 1, 2, 3, 5, 8, 13, etc.",
                "sentence3": "This sequence appears frequently in nature, such as in the arrangement of leaves and the pattern of some shells."
            }
        },
        {
            "type": "quiz",
            "question": "What is a prime number?",
            "choices": ["A number divisible only by 1 and itself", "A number divisible by exactly three numbers", "A number with no divisors", "A composite number"],
            "answer": "A number divisible only by 1 and itself",
            "justification": "A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers."
        },
        {
            "type": "quiz",
            "question": "Which mathematician is famous for the Last Theorem that was unsolved for over 350 years?",
            "choices": ["Pierre-Simon Laplace", "Blaise Pascal", "Sir Isaac Newton", "Pierre de Fermat"],
            "answer": "Pierre de Fermat",
            "justification": "Pierre de Fermat is known for Fermat's Last Theorem, which he conjectured in 1637 and wasn't proven until 1994 by Andrew Wiles."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Mathematical Constants: e",
                "sentence1": "The number e is a mathematical constant approximately equal to 2.71828.",
                "sentence2": "It is the base of the natural logarithm and occurs frequently in calculus, especially in problems involving continuous growth.",
                "sentence3": "The constant was discovered by the Swiss mathematician Jacob Bernoulli while studying compound interest."
            }
        },
        {
            "type": "quiz",
            "question": "What does the acronym PEMDAS stand for?",
            "choices": ["Prime, Even, Multiplication, Division, Addition, Subtraction", "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction", "Parallel, Equal, Median, Division, Approximate, Sum", "Partial, Equation, Median, Divide, Addition, Scale"],
            "answer": "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction",
            "justification": "PEMDAS represents the order of operations in mathematics: first solve expressions in Parentheses, then Exponents, followed by Multiplication and Division (from left to right), and finally Addition and Subtraction (from left to right)."
        },
        {
            "type": "quiz",
            "question": "Which branch of mathematics deals with shapes and their properties?",
            "choices": ["Algebra", "Calculus", "Geometry", "Statistics"],
            "answer": "Geometry",
            "justification": "Geometry is the branch of mathematics that deals with the properties and relationships of points, lines, surfaces, and shapes."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Understanding Probability",
                "sentence1": "Probability is a measure of the likelihood of an event occurring.",
                "sentence2": "It is quantified as a number between 0 and 1, with 0 indicating impossibility and 1 indicating certainty.",
                "sentence3": "Probability theory is used extensively in statistics, finance, gambling, science, and philosophy."
            }
        },
        {
            "type": "quiz",
            "question": "Who is credited with developing calculus independently alongside Isaac Newton?",
            "choices": ["Gottfried Wilhelm Leibniz", "René Descartes", "Johannes Kepler", "Carl Friedrich Gauss"],
            "answer": "Gottfried Wilhelm Leibniz",
            "justification": "Both Isaac Newton and Gottfried Wilhelm Leibniz independently developed the foundational principles of calculus in the 17th century."
        },
        {
            "type": "quiz",
            "question": "In algebra, what does a 'variable' represent?",
            "choices": ["A fixed number", "An unknown or changeable quantity", "A set of equations", "None of the above"],
            "answer": "An unknown or changeable quantity",
            "justification": "A variable in algebra represents a symbol that stands in for an unknown or changeable number or value."
        },
        {
            "type": "quiz",
            "question": "What is the Pythagorean Theorem?",
            "choices": ["a^2 + b^2 = c", "a^2 = b^2 + c^2", "a^2 + b^2 = c^2", "ab + bc = ca"],
            "answer": "a^2 + b^2 = c^2",
            "justification": "The Pythagorean Theorem states that in a right-angled triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Understanding Statistics",
                "sentence1": "Statistics is the study of the collection, analysis, interpretation, presentation, and organization of data.",
                "sentence2": "It provides methodologies for designing data collection projects and drawing valid inferences.",
                "sentence3": "Statistics are used extensively in various fields including economics, medicine, social sciences, and marketing."
            }
        },
        {
            "type": "quiz",
            "question": "What does the term 'mean' in statistics refer to?",
            "choices": ["The sum of all values", "The middle value", "The most frequent value", "The average value"],
            "answer": "The average value",
            "justification": "The mean is calculated by adding together all values in a set and dividing by the number of values, representing the average."
        },
        {
            "type": "quiz",
            "question": "Which of the following do not belong to basic arithmetic operations?",
            "choices": ["Addition", "Subtraction", "Multiplication", "Exponentiation"],
            "answer": "Exponentiation",
            "justification": "The four basic arithmetic operations are addition, subtraction, multiplication, and division. Exponentiation is a more complex operation."
        },
        {
            "type": "quiz",
            "question": "What shape is a polygon with five sides?",
            "choices": ["Square", "Pentagon", "Hexagon", "Quadrilateral"],
            "answer": "Pentagon",
            "justification": "A polygon with five sides is called a pentagon."
        }
    ]
}