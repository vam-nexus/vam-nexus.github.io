 const quizContainer = document.getElementById('quiz');
        const scoreContainer = document.getElementById('score');
        const quizInfoContainer = document.getElementById('quiz-info');

        let totalQuestions = 0;
        let correctAnswers = 0;

        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('quiz-title').textContent = quizData.info.title;
            document.getElementById('quiz-description').textContent = quizData.info.description;
            
            // Initialize total questions count (excluding concept cards)
            const totalQuestionsCount = quizData.cards.filter(q => q.type !== 'concept').length;
            document.querySelectorAll('#total-questions').forEach(el => {
                el.textContent = totalQuestionsCount;
            });
            
            displayQuiz(quizData);
        });

        function displayQuiz(data) {
            const quizContainer = document.getElementById('quiz');
            
            data.cards.forEach((question, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question-container';
                if (index === 0) questionDiv.classList.add('active');
                
                if (question.type === 'concept') {
                    questionDiv.innerHTML = `
                        <div class="concept-content">
                            <h2>${question.content.heading}</h2>
                            <p>${question.content.sentence1}</p>
                            <p>${question.content.sentence2}</p>
                            <p>${question.content.sentence3}</p>
                        </div>
                        <button class="submit-answer-btn" onclick="nextQuestion(${index})">Continue</button>
                    `;
                } else {
                    questionDiv.innerHTML = `
                        <div class="question">${index}. ${question.question}</div>
                        <div class="choices">
                            ${question.choices.map((choice, choiceIndex) => `
                                <label class="choice-label">
                                    <input type="radio" name="q${index}" value="${choice}">
                                    <span>${choice}</span>
                                </label>
                            `).join('')}
                        </div>
                        <button class="submit-answer-btn" onclick="submitAnswer(${index})">Submit Answer</button>
                        <div id="feedback-${index}" class="feedback">
                            <div id="result-${index}"></div>
                            <div id="justification-${index}" class="justification"></div>
                        </div>
                    `;
                }
                
                quizContainer.appendChild(questionDiv);
            });
        }

        function submitAnswer(questionIndex) {
            const selectedAnswer = document.querySelector(`input[name="q${questionIndex}"]:checked`);
            const feedbackDiv = document.getElementById(`feedback-${questionIndex}`);
            const resultDiv = document.getElementById(`result-${questionIndex}`);
            const justificationDiv = document.getElementById(`justification-${questionIndex}`);
            const submitButton = feedbackDiv.previousElementSibling;

            if (!selectedAnswer) {
                alert('Please select an answer first!');
                return;
            }

            const question = quizData.cards[questionIndex];
            const isCorrect = selectedAnswer.value === question.answer;

            feedbackDiv.style.display = 'block';
            feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
            
            resultDiv.textContent = isCorrect ? 
                '✓ Correct!' : 
                `✗ Incorrect. The correct answer is: ${question.answer}`;
            
            justificationDiv.textContent = question.justification;

            // Disable the submit button and radio buttons after submission
            submitButton.disabled = true;
            document.querySelectorAll(`input[name="q${questionIndex}"]`).forEach(input => {
                input.disabled = true;
            });

            // Update the overall score
            updateScore();

            // Scroll to the feedback section instead of the next question
            feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Show next question (without scrolling)
            const nextQuestion = document.querySelector(`.question-container:nth-child(${questionIndex + 2})`);
            if (nextQuestion) {
                nextQuestion.classList.add('active');
            }
        }

        function updateScore() {
            let correctAnswers = 0;
            let incorrectAnswers = 0;
            const totalQuestions = quizData.cards.filter(q => q.type !== 'concept').length;
            
            quizData.cards.forEach((question, index) => {
                // Skip concept cards
                if (question.type === 'concept') return;
                
                const feedbackDiv = document.getElementById(`feedback-${index}`);
                if (feedbackDiv && feedbackDiv.classList.contains('correct')) {
                    correctAnswers++;
                } else if (feedbackDiv && feedbackDiv.style.display === 'block') {
                    incorrectAnswers++;
                }
            });

            // Calculate and update score percentage
            const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100) || 0;
            document.getElementById('score-percentage').textContent = scorePercentage;

            // Update progress bars and counts
            const correctProgress = document.getElementById('correct-progress');
            const incorrectProgress = document.getElementById('incorrect-progress');
            const correctCount = document.getElementById('correct-count');
            const incorrectCount = document.getElementById('incorrect-count');
            const remainingCount = document.getElementById('remaining-count');
            
            correctProgress.style.width = `${(correctAnswers / totalQuestions) * 100}%`;
            incorrectProgress.style.width = `${(incorrectAnswers / totalQuestions) * 100}%`;
            
            correctCount.textContent = correctAnswers;
            incorrectCount.textContent = incorrectAnswers;
            remainingCount.textContent = totalQuestions - (correctAnswers + incorrectAnswers);
        }

        // Remove or modify the original submit button handler since we're now handling individual submissions
        document.getElementById('submit-button').style.display = 'none';

        // Add this new function to handle the concept card navigation
        function nextQuestion(index) {
            const nextQuestion = document.querySelector(`.question-container:nth-child(${index + 2})`);
            
            if (nextQuestion) {
                // Show next question
                nextQuestion.classList.add('active');
                
                // Scroll to the next question smoothly
                nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }