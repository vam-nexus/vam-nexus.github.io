const chapters = [
            // ------- Chapter 1 -------
            {
                title: "Preparation Guide for AI Python Course",
                content: `
                    <div class="blog-post">
                       
                        <img src="assets/wallpaper.webp" alt="Course Overview Image" style="width:60%; height:auto; margin-left: auto; margin-right: auto; display: block;">
                    
                        <section class="post-section">
                            <h2>Course Overview</h2>
                            <p>Welcome to the AI Python 101 crash course! This beginner-friendly program is designed to introduce you to Python programming and essential tools used in AI development. To make the most of your learning, we recommend completing some foundational tasks before diving in.</p>
                        </section>
                         <section class="post-section">
                            <h2>Getting Ready</h2>
                            <p>It is highly encouraged to complete the 9 chapters in this guide before our Sunday, February 23rd crash course to help you prepare and have a smooth learning experience.</p>
                            <p>This is an intense course, but you only have to do it once in your lifetime to learn these foundational skills. I encourage you to complete all the steps to make the most of your learning experience.</p>
                            <p>This guide should take about <strong>1.5 hours</strong> to complete and it is best done on a <strong>laptop</strong> as opposed to a phone.</p>
                            <p>You can ask as many questions as you want in the Discord community for support.</p>
                            <div style="text-align: center;">
                                     <a href="https://discord.gg/RRgVfzsG3P" target="_blank" class="join-discord-button">Join Discord</a>
                                 </div>
                            
                        </section>
                        
                        <section class="post-section">
                            <h2>Why Learning to Code Can Be Helpful</h2>
                            <p>Coding isn't just for software engineers. People in other jobs, like recruiting, marketing, and sales, can find it helpful too. It can make using AI tools easier, help with solving problems, and boost productivity.</p>
                            <p>Andrew Ng, a prominent figure in AI, noticed that people who learn coding often do better than those who don't, even if for jobs that aren't technical.</p>
                            <img src="assets/andrew.png" alt="Andrew Ng's Quote" style="width:60%; height:auto; margin-left: auto; margin-right: auto; display: block;">
                        </section>

                        <section class="post-section">
                            <h2>What You'll Achieve by the End of This Course</h2>
                            <div class="achievement-box" style="background: #FFEFD5; padding: 1.5rem; border-radius: 0.5rem; margin: 1rem 0;">
                                <h3>1. 🐍 Python Programming</h3>
                                <p>You'll be able to write Python code using proper syntax, data structures, and basic algorithms to solve problems efficiently.</p>
                                
                                <h3>2. 💻 Google Colab</h3>
                                <p>You'll learn how to use Google Colab to execute Python code, collaborate with peers, and streamline your workflow in an interactive coding environment.</p>
                                
                                <h3>3. 🤖 Cursor AI</h3>
                                <p>You'll be to use AI-assisted coding tools like ChatGPT, Claude, Cursor AI to boost your productivity in writing code and learning experience.</p>
                                
                                <h3>4. 🗣️ Discord Community Engagement</h3>
                                <p>You'll become familiar with using Discord to engage with a community for support, collaboration, and knowledge sharing.</p>
                                
                                <h3>5. 🌐 OpenAI & Hugging Face</h3>
                                <p>You'll explore and utilize advanced AI models for tasks such as text generation, data analysis, and AI-powered applications.</p>
                                
                                <h3>6. 🎨 UI Development</h3>
                                <p>You'll learn how to create intuitive and user-friendly interfaces for AI applications.</p>
                            </div>
                        </section>
                        </section>
                        </section>

                        
                        <section class="post-section">
                            <h2>Quick Challenges</h2>
                            <p> We will start with a few quick challenges to get you warmed up for the course. </p>
                            <div class="quiz-container">
                                <div class="quiz-question">
                                    <p><strong>1. What is the most famous programming language for AI?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q11" value="a"> A) Java</label>
                                        <label><input type="radio" name="q11" value="b"> B) Python</label>
                                        <label><input type="radio" name="q11" value="c"> C) C++</label>
                                        <label><input type="radio" name="q11" value="d"> D) Ruby</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q11', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q11"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>2. Who is a renowned teacher in AI known for his courses on deeplearning.ai?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q12" value="a"> A) Elon Musk</label>
                                        <label><input type="radio" name="q12" value="b"> B) Andrew Ng</label>
                                        <label><input type="radio" name="q12" value="c"> C) Mark Zuckerberg</label>
                                        <label><input type="radio" name="q12" value="d"> D) Bill Gates</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q12', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q12"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>3. What is a good way to get into hands-on projects and learn AI?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q13" value="a"> A) Watching movies</label>
                                        <label><input type="radio" name="q13" value="b"> B) Reading novels</label>
                                        <label><input type="radio" name="q13" value="c"> C) Using Kaggle</label>
                                        <label><input type="radio" name="q13" value="d"> D) Playing video games</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q13', 'c')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q13"></div>
                                </div>
                            </div>
                        </section>
                        </section>

                        <section class="post-section">
                            <h2>What's Next?</h2>
                            <p>You are now ready to begin the prep manual. In the upcoming chapters, you'll explore:</p>
                            <ul>
                                <li><strong>The Role of Python in AI Development:</strong> Why it's the preferred language</li>
                                <li><strong>Transforming Industries:</strong> How programming and AI are making an impact</li>
                                <li><strong>AI Chatbots as Coding Companions:</strong> Writing code with AI assistance</li>
                                <li><strong>Google Colab:</strong> Creating your first Python program</li>
                                <li><strong>Installing Tools:</strong> Python and Cursor AI setup</li>
                                <li><strong>Join Our Community:</strong> Connect with us on Discord</li>
                            </ul>
                        </section>
                    </div>
                `
            },
            // ------- Chapter 2 -------
            {
                title: "The Role of Python in AI",
                content: `
                    <div class="blog-post">
                        <section class="post-section">
                            <h2>Why Learn to Code?</h2>
                            <p>Artificial Intelligence (AI) is changing the way we work and interact with technology. Today, learning to code is no longer just for software engineers. People in many professions, such as journalism, marketing, business, and administration, find that even a small amount of programming knowledge can make them more effective and productive. This cours introduces Python, a simple and powerful programming language, and explores its role in AI.</p>
                        </section>

                        <section class="post-section">
                            <h2>How AI is Changing Coding</h2>
                            <p>In the past, learning to code required years of study and practice. It involved memorizing syntax, understanding algorithms, and writing programs from scratch. However, AI-powered tools like ChatGPT are making it easier to learn and write code. With AI as an assistant, beginners can get instant feedback, generate code snippets, and find errors quickly. These tools lower the barriers to coding, making it more accessible to everyone.</p>
                        </section>

                        <section class="post-section">
                            <h2>Why Python for AI?</h2>
                            <p>Python is one of the most widely used programming languages, especially in AI and data science. It is known for its simple syntax, readability, and vast collection of libraries that support machine learning, automation, and data analysis. Because of its ease of use and flexibility, Python is the best choice for those who want to get started with AI.</p>
                        </section>

                        <section class="post-section">
                            <h2>The Power of AI-Assisted Learning</h2>
                            <p>AI is transforming how people learn to code. Instead of relying only on textbooks and structured courses, learners can now use AI-powered coding assistants. These tools help beginners write better code, understand concepts faster, and solve problems more efficiently. AI-assisted learning makes it possible for anyone to gain coding skills, even without a traditional computer science background.</p>
                        </section>

                        <section class="post-section">
                            <h2>The Benefits of Learning Python</h2>
                            <p>Knowing how to code, even at a basic level, can be a significant advantage. It allows people to automate repetitive tasks, analyze data, and build AI-powered applications. Coding also develops problem-solving skills and logical thinking, which are valuable in any field. Plus, many people find programming to be a fun and creative activity.</p>
                        </section>

                        <section class="post-section">
                            <h2>Quick Challenges</h2>
                            <div class="quiz-container">
                                <div class="quiz-question">
                                    <p><strong>1. Why is Python commonly used in AI development?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q21" value="a"> A) It's the newest programming language</label>
                                        <label><input type="radio" name="q21" value="b"> B) It has extensive libraries and simple syntax</label>
                                        <label><input type="radio" name="q21" value="c"> C) It's the fastest programming language</label>
                                        <label><input type="radio" name="q21" value="d"> D) It was created specifically for AI</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q21', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q21"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>2. Which of these is a popular Python library for AI development?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q22" value="a"> A) jQuery</label>
                                        <label><input type="radio" name="q22" value="b"> B) TensorFlow</label>
                                        <label><input type="radio" name="q22" value="c"> C) React</label>
                                        <label><input type="radio" name="q22" value="d"> D) Angular</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q22', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q22"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>3. What type of tasks can AI Python programs typically perform?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q23" value="a"> A) Only mathematical calculations</label>
                                        <label><input type="radio" name="q23" value="b"> B) Image recognition, natural language processing, and data analysis</label>
                                        <label><input type="radio" name="q23" value="c"> C) Website hosting only</label>
                                        <label><input type="radio" name="q23" value="d"> D) Operating system development only</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q23', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q23"></div>
                                </div>
                            </div>
                        </section>

                        <section class="post-section">
                            <h2>What's Next?</h2>
                            <p>In the next chapter, we will explore the fundamentals of programming languages and how they allow us to communicate with computers. By learning Python, you will gain the skills to work with AI and unlock new opportunities in your career and personal projects.</p>
                        </section>
                    </div>
                `
            },
            // ------- Chapter 3 -------
            {
                title: "The Power of Programming and AI with Python",
                content: `
                    <div class="blog-post">
                        <section class="post-section">
                            <h2>Introduction to Programming</h2>
                            <p>Computer programming is both an art and a science, it involves writing precise instructions that tell a computer what to do. When instructions are written effectively, computers can automate tasks, analyze data, and even assist with decision making.</p>
                            <p>Programming has transformed our daily lives in ways we often take for granted:</p>
                            <ul>
                                <li>GPS navigation systems help us find our way.</li>
                                <li>Assistive technologies like speech recognition and eye tracking improve accessibility.</li>
                                <li>AI-powered applications make tasks like customer support and data analysis more efficient.</li>
                            </ul>
                            <p>Every time you send a message, browse the internet, or use an app, you're interacting with code that someone wrote. Learning to program will allow you to harness this power and create your own tools.</p>
                        </section>

                        <section class="post-section">
                            <h2>Why Learn to Code?</h2>
                            <p>Coding is more than just a technical skill, it's a way to <strong>increase efficiency</strong>, <strong>solve problems</strong>, and <strong>automate repetitive tasks</strong>. Many professionals, from business analysts to scientists, use programming daily to improve their workflows.</p>
                            <p>Here are some real-world examples of how coding drives innovation:</p>
                            <ul>
                                <li><strong>Scientific Discoveries:</strong> The Hubble Space Telescope and the discovery of the Higgs boson were made possible by software that processes vast amounts of data.</li>
                                <li><strong>Business & Productivity:</strong> Automating tasks such as extracting data from PDFs and organizing information into spreadsheets saves time and reduces errors.</li>
                                <li><strong>AI & Machine Learning:</strong> AI models like ChatGPT are trained using massive datasets, and Python plays a crucial role in this development.</li>
                            </ul>
                            <p>By learning to program, you're not just gaining a skill, you're opening doors to limitless possibilities.</p>
                        </section>

                        <section class="post-section">
                            <h2>Automating Tasks with AI</h2>
                            <p>One of the most exciting aspects of modern programming is the ability to <strong>integrate AI into your projects</strong>. AI tools like ChatGPT, Claude, and Google's Gemini allow computers to:</p>
                            <ul>
                                <li><strong>Automatically process and summarize information</strong></li>
                                <li><strong>Respond to queries and assist with customer support</strong></li>
                                <li><strong>Generate reports and analyze business trends</strong></li>
                            </ul>
                            <p>With just a few lines of Python code, you can instruct your computer to use these AI models, making your work smarter and more efficient.</p>
                        </section>

                        <section class="post-section">
                            <h2>Python: The Most Popular Programming Language</h2>
                            <p>Python has become the <strong>#1 choice for AI development</strong>, and for good reason:</p>
                            <ul>
                                <li><strong>Easy to learn:</strong> Python's simple syntax makes it accessible to beginners.</li>
                                <li><strong>Powerful and flexible:</strong> It's used in web development, automation, AI, and data science.</li>
                                <li><strong>Strong community support:</strong> With millions of Python developers worldwide, help is always available.</li>
                            </ul>
                            <p>If you ever run into an issue, chatbots like ChatGPT and AI assistants can guide you, making learning even more accessible.</p>
                        </section>

                        <section class="post-section">
                            <h2>Python in Real-World Applications</h2>
                            <p>Python is already <strong>powering the future</strong>. It is used in:</p>
                            <ul>
                                <li><strong>Self-driving cars</strong>, where AI-powered software makes split-second driving decisions.</li>
                                <li><strong>Smart agriculture</strong>, optimizing irrigation and crop health.</li>
                                <li><strong>Healthcare</strong>, assisting doctors with diagnosing diseases.</li>
                                <li><strong>Financial services</strong>, detecting fraud and automating transactions.</li>
                                <li><strong>Web applications, mobile apps, and video games</strong>, making development faster and more efficient.</li>
                            </ul>
                            <p>By mastering Python, you'll gain one of the most <strong>valuable and versatile skills in technology</strong>.</p>
                        </section>

                        <section class="post-section">
                            <h2>Quick Challenges</h2>
                            <div class="quiz-container">
                                <div class="quiz-question">
                                    <p><strong>1. What are some real-world applications of Python mentioned in the chapter?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q31" value="a"> A) Only web development</label>
                                        <label><input type="radio" name="q31" value="b"> B) Self-driving cars, healthcare, and financial services</label>
                                        <label><input type="radio" name="q31" value="c"> C) Just mobile apps</label>
                                        <label><input type="radio" name="q31" value="d"> D) Only video games</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q31', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q31"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>2. Why has Python become the #1 choice for AI development?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q32" value="a"> A) It's the only language that supports AI</label>
                                        <label><input type="radio" name="q32" value="b"> B) It's the oldest programming language</label>
                                        <label><input type="radio" name="q32" value="c"> C) Easy to learn, powerful, and has strong community support</label>
                                        <label><input type="radio" name="q32" value="d"> D) It's required by law</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q32', 'c')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q32"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>3. How does programming contribute to scientific discoveries?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q33" value="a"> A) It doesn't contribute to science</label>
                                        <label><input type="radio" name="q33" value="b"> B) By processing vast amounts of data</label>
                                        <label><input type="radio" name="q33" value="c"> C) By replacing scientists</label>
                                        <label><input type="radio" name="q33" value="d"> D) Only through documentation</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q33', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q33"></div>
                                </div>
                            </div>
                        </section>

                        <section class="post-section">
                            <h2>Moving Forward</h2>
                            <p>This course, <strong>AI Python 101</strong>, is just your first step. As you continue, you'll:</p>
                            <ul>
                                <li><strong>Write more complex programs</strong></li>
                                <li><strong>Develop AI-powered applications</strong></li>
                                <li><strong>Enhance your problem-solving skills with automation</strong></li>
                            </ul>
                            <h3>Next Up: How Chatbots Interact with Python</h3>
                            <p>In the next chapter, we'll explore how Python enables AI-powered chatbots to understand, process, and respond to human language. Get ready to build your own AI-powered tools!</p>
                        </section>
                    </div>
                `
            },
            // ------- Chapter 4 -------
            {
                title: "Writing Code with Chatbots",
                content: `
                    <div class="blog-post">
                        <section class="post-section">
                            <h2>Introduction to Writing Code with AI Chatbots</h2>
                            <p>In our daily work, programmers increasingly rely on AI chatbots to assist with coding tasks. These tools make us more productive by providing quick answers to our programming questions, eliminating the need to search for an expert or sift through documentation.</p>
                            <p>Previously, if we were stuck with a programming task or unsure what to do next, we might have had to find an expert to ask. This process could take time, finding someone available, explaining the issue, and waiting for a response. However, now, whenever we have a question, we can ask an AI chatbot and get an answer immediately.</p>
                            <p>For this course, we've provided a chatbot that allows us to type our programming questions, also known as prompts, directly into it. While we have this chatbot available, feel free to use third-party chatbots like ChatGPT, Microsoft Copilot, Anthropic Claude, or Google Gemini for additional help.</p>

                        </section>

                        <section class="post-section">
                            <h2>Understanding Prompts and Responses</h2>
                            <p>When using a chatbot for coding, the text we enter is called a <strong>prompt</strong>, and the chatbot's answer is known as a <strong>completion</strong>.</p>
                            <p>For example, if we type the prompt:</p>
                            <pre><code class="language-python"><strong>What is Python?</strong></code></pre>
                            <p>The chatbot responds:</p>
                            <pre><code class="language-python"><strong>"Python is a high-level programming language that is easy to read and write, making it a great choice for beginners."</strong></code></pre>
                            <p>If we want to learn more about syntax, we can enter:</p>
                            <pre><code class="language-python"><strong>"What does syntax mean?"</strong></code></pre>
                            <p>The chatbot will then generate an explanation, helping us grasp the fundamental concepts of coding more quickly.</p>
                            <p>We can also ask follow-up questions if something isn't clear. This workflow, asking questions, receiving answers, and refining our understanding, is an approach that even experienced developers use when learning new programming concepts.</p>
                         
                        </section>

                        <section class="post-section">
                            <h2>Writing Your First Program with ChatGPT</h2>
                            <p>A common starting point in programming is writing the <strong>"Hello, World!"</strong> program. Traditionally, new programmers begin their journey by writing a simple program that prints "Hello, World!" to the screen.</p>
                            <p>Let's ask ChatGPT:</p>
                            <pre><code class="language-python"><strong>"What is the first program traditionally written by brand-new programmers?"</strong></code></pre>
                            <p>ChatGPT responds:</p>
                            <p><em>"The simple program traditionally written by beginners is the 'Hello, World!' program. This program displays the text 'Hello, World!' on the screen."</em></p>
                            <p>Now, let's use ChatGPT to write this program for us. We type the prompt:</p>
                            <pre><code class="language-python"><strong>"Write a Python program to print 'Hello, World!'"</strong></code></pre>
                            <p>ChatGPT generates:</p>
                            <pre><code class="language-python"><strong>print("Hello, World!")</strong></code></pre>
                            <p>This tells the computer to print the message "Hello, World!" to the screen.</p>
                           
                           
                     
                        </section>

                        <section class="post-section">
                            <h2>Modifying Code with ChatGPT</h2>
                            <p>One powerful feature of ChatGPT is its ability to modify code. Suppose we want our program to say hello to us by name instead of "Hello, World!".</p>
                            <p>We can prompt ChatGPT:</p>
                            <p><strong>"Modify the code to say hello to me instead of the world. My name is Andrew."</strong></p>
                            <p>ChatGPT generates:</p>
                            <pre><code class="language-python"><strong>print("Hello, Andrew!")</strong></code></pre>
                            <p>This simple interaction demonstrates how ChatGPT can help customize code quickly, making coding more interactive and efficient.</p>
                       
                        </section>

                        <section class="post-section">
                            <h2>Writing More Complex Programs</h2>
                            <p>ChatGPT is not limited to simple "Hello, World!" programs. It can also generate more complex code. For example, let's write a program that calculates the number of days between two dates.</p>
                            <p>We ask ChatGPT:</p>
                            <p><strong>"Write some code to calculate how many days there are between Christmas (December 25th) and my birthday (April 18th) in a non-leap year."</strong></p>
                            <p>ChatGPT generates:</p>
                            <pre><code class="language-python"><strong>from datetime import date

# Define dates
christmas = date(2025, 12, 25)
birthday = date(2026, 4, 18)

# Calculate difference
days_between = (birthday - christmas).days

print(f"There are {days_between} days between Christmas and your birthday.")</strong></code></pre>
                            <p>This program calculates the number of days between two dates using Python's datetime module.</p>
                            <p>We can also prompt the chatbot to modify the program for different holidays or birthdays, making it flexible for various use cases.</p>
                      
                        </section>

                        <section class="post-section">
                            <h2>The Limitations of AI-Generated Code</h2>
                            <p>While AI chatbots are excellent at writing simple programs, they struggle with highly complex or specialized coding tasks. They can generate snippets of code efficiently, but for large-scale applications, human oversight is necessary.</p>
                            <p>AI excels at:</p>
                            <ul>
                                <li>✅ Generating quick code snippets</li>
                                <li>✅ Explaining programming concepts</li>
                                <li>✅ Debugging simple errors</li>
                            </ul>
                            <p>However, AI may struggle with:</p>
                            <ul>
                                <li>⚠️ Writing highly complex or optimized algorithms</li>
                                <li>⚠️ Understanding business-specific logic</li>
                                <li>⚠️ Debugging deep structural issues in large projects</li>
                            </ul>
                            <p>It is essential to verify AI-generated code for accuracy, efficiency, and security before using it in production.</p>
                      
                        </section>

                        <section class="post-section">
                            <h2>Quick Challenges</h2>
                            <div class="quiz-container">
                                <div class="quiz-question">
                                    <p><strong>1. What is the term for the text we enter into a chatbot?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q41" value="a"> A) Code</label>
                                        <label><input type="radio" name="q41" value="b"> B) Prompt</label>
                                        <label><input type="radio" name="q41" value="c"> C) Response</label>
                                        <label><input type="radio" name="q41" value="d"> D) Query</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q41', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q41">
                                        <p class="result"></p>
                                        <p class="explanation"></p>
                                        <p class="citation"></p>
                                    </div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>2. What is traditionally the first program written by new programmers?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q42" value="a"> A) Calculator program</label>
                                        <label><input type="radio" name="q42" value="b"> B) Hello, World!</label>
                                        <label><input type="radio" name="q42" value="c"> C) Date calculator</label>
                                        <label><input type="radio" name="q42" value="d"> D) Name printer</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q42', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q42">
                                        <p class="result"></p>
                                        <p class="explanation"></p>
                                        <p class="citation"></p>
                                    </div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>3. Which of the following is NOT a strength of AI chatbots in coding?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q43" value="a"> A) Generating quick code snippets</label>
                                        <label><input type="radio" name="q43" value="b"> B) Explaining programming concepts</label>
                                        <label><input type="radio" name="q43" value="c"> C) Writing highly complex algorithms</label>
                                        <label><input type="radio" name="q43" value="d"> D) Debugging simple errors</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q43', 'c')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q43">
                                        <p class="result"></p>
                                        <p class="explanation"></p>
                                        <p class="citation"></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="post-section">
                            <h2>What's Next?</h2>
                            <p>We'll dive into the practical aspects of running Python code on Google Colab. You'll learn:</p>
                            <ul>
                                <li><strong>How to set up and navigate Google Colab</strong></li>
                                <li><strong>Ways to execute Python code in Colab notebooks</strong></li>
                                <li><strong>Best practices for collaborating and sharing your work</strong></li>
                            </ul>
                          
                        </section>
                    </div>
                `
            },
            // ------- Chapter 5 -------
            {
                title: "Navigating the AI Python 101 Course",
                content: `
                    <div class="blog-post">
                        <section class="post-section">
                            <h2>Overview</h2>
                            <p>This chapter offers tips to help you enjoy and benefit from the AI Python 101 course. Feel free to join the community, ask questions, and share your work to learn and connect with others.</p>
                        </section>

                        <section class="post-section">
                            <h2>Getting Started with Discord</h2>
                            <div class="checklist-container" style="background: #F9FAFB; padding: 1.5rem; border-radius: 0.5rem; margin: 1rem 0;">
                                <h3>Checklist</h3>
                                <label class="checklist-item">
                                    <input type="checkbox" onchange="toggleStrikethrough(this)">
                                    <span>Join our Discord community to connect with peers and instructors.</span>
                                </label>
                                 <div style="text-align: center;">
                                     <a href="https://discord.gg/RRgVfzsG3P" target="_blank" class="join-discord-button">Join Discord</a>
                                 </div>
                                <br>
                                <label class="checklist-item">
                                    <input type="checkbox" onchange="toggleStrikethrough(this)">
                                    <span>Read Guidelines: Familiarize yourself with the community rules in the #guidelines channel on Discord for a conducive learning environment.</span>
                                </label>
                                 <br>
                                <label class="checklist-item">
                                    <input type="checkbox" onchange="toggleStrikethrough(this)">
                                    <span>Post your introduction in Discord's #introductions: Share a few words about yourself, a fun hobby, and why you are taking this course. It's a great way to get to know each other.</span>
                                </label>
                            </div>
                        </section>

                        <h1>General Guidelines to Make the Most of the Course</h1>

                        <section class="post-section-no-counter">
                            <h2>🧠 Ask Questions</h2>
                            <p>Don't hesitate to ask questions if something isn't clear. Use the ⁠questions channel on Discord to seek help and clarify doubts. Remember, it's better to ask than to struggle alone. Our community is here to support you!</p>
                        </section>

                        <section class="post-section-no-counter">
                            <h2>🚀 Share Your Work</h2>
                            <p>Engage with the community by posting your solutions, code snippets, and attempts in the #share-your-work channel. If you're stuck, share what you've tried, and we'll work through it together. Collaboration is key to learning!</p>
                        </section>

                        <section class="post-section-no-counter">
                            <h2>💬 Be Active & Stay Focused</h2>
                            <p>This course is short and intense, so staying engaged is crucial. Participate in discussions, challenges, and exercises in the ⁠general channel. Your active involvement will enhance your learning experience and help you stay on track.</p>
                        </section>

                        <section class="post-section-no-counter">
                            <h2>🎉 Have Fun in ⁠memes!</h2>
                            <p>Learning can be intense, so take breaks and enjoy some humor. Share funny coding memes, AI jokes, and relatable moments in the ⁠memes channel. Laughter is a great way to relieve stress and build camaraderie.</p>
                        </section>

                        <section class="post-section-no-counter">
                            <h2>🎯 Stay on Track & Make the Most of It</h2>
                            <p>Code along with the lessons, experiment, and don't be afraid to make mistakes, it's all part of the learning process. Stay curious, have fun, and let's make the most of these 6 hours together!</p>
                        </section>
                        <hr>
                        <section class="post-section">
                            <h2>Quick Challenges</h2>
                            <div class="quiz-container">
                                <div class="quiz-question">
                                    <p><strong>1. What should you do after joining the Discord community?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q51" value="a"> A) Ignore the guidelines</label>
                                        <label><input type="radio" name="q51" value="b"> B) Read the guidelines</label>
                                        <label><input type="radio" name="q51" value="c"> C) Post memes immediately</label>
                                        <label><input type="radio" name="q51" value="d"> D) Leave the community</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q51', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q51"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>2. Why is it important to introduce yourself in the #introductions channel?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q52" value="a"> A) To share your favorite food</label>
                                        <label><input type="radio" name="q52" value="b"> B) To connect with peers and share your goals</label>
                                        <label><input type="radio" name="q52" value="c"> C) To advertise your business</label>
                                        <label><input type="radio" name="q52" value="d"> D) To complain about the course</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q52', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q52"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>3. How can you make the most of the AI Python 101 course?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q53" value="a"> A) By skipping the exercises</label>
                                        <label><input type="radio" name="q53" value="b"> B) By actively participating and asking questions</label>
                                        <label><input type="radio" name="q53" value="c"> C) By only watching videos</label>
                                        <label><input type="radio" name="q53" value="d"> D) By not engaging with the community</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q53', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q53"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                `
            },
            // ------- Chapter 6 -------
            {
                title: "Running Your Own Script with Google Colab",
                content: `
                    <div class="blog-post">
                        <section class="post-section">
                            <h2>Introduction to Google Colab</h2>
                            <p>Google Colab is a free, cloud-based platform that allows you to write and execute Python code through your browser. It's a powerful tool for learning and developing AI applications. Here's how to get started:</p>
                            <p>In Google Colab, code is organized into cells. Each cell can contain Python code, text, or markdown. To run a cell, click the play button next to the cell or press Shift + Enter.</p>
                             <img src="assets/cells.jpg" alt="Colab Screenshot" style="width:60%; max-width:600px; border: 2px solid #4285F4; border-radius: 0.5rem; padding: 0.5rem; display: block; margin-left: auto; margin-right: auto;">
                            <ol>
                            <br>
                                <li>
                                    Open the Google Colab notebook here:<br>
                                    <div style="text-align: center;">
                                        <a href="https://colab.research.google.com/drive/1LEav6Yxcx5j_cb48KzfJQ1QF1zQESTKb?usp=sharing" target="_blank" 
                                        style="display: inline-block; padding: 0.5rem 1rem; background-color: #4285F4; color: white; text-decoration: none; border-radius: 0.25rem;">
                                        Google Colab
                                        </a>
                                    </div>
                                <br>
                                </li>
                                
                                <li>
                                    Try running the first code cell which says:
                                    <pre><code class="language-python">print('hello world')</code></pre>
                                </li>
                                  <img src="assets/colab-screenshot.png" alt="Colab Screenshot" style="width:60%; max-width:600px; border: 2px solid #4285F4; border-radius: 0.5rem; padding: 0.5rem; display: block; margin-left: auto; margin-right: auto;">
                            </ol>
                            <div style="text-align: center; margin-top: 1rem;">
                               
                            </div>
                        </section>

                        <section class="post-section">
                            <h2>Adding New Cells</h2>
                            <p>To add a new cell in Google Colab, click on the "Insert" menu at the top and select "Code cell" or "Text cell" depending on what you want to add. You can also use the keyboard shortcuts:</p>
                            <ul>
                                <li><strong>Code Cell:</strong> Press <code>Ctrl + M + B</code> (Windows/Linux) or <code>Cmd + M + B</code> (Mac)</li>
                                <li><strong>Text Cell:</strong> Press <code>Ctrl + M + A</code> (Windows/Linux) or <code>Cmd + M + A</code> (Mac)</li>
                            </ul>
                            <p>Adding new cells allows you to organize your code and notes effectively, making it easier to manage your projects.</p>
                            <img src="assets/add.jpg" alt="Colab Screenshot" style="width:60%; max-width:600px; border: 2px solid #4285F4; border-radius: 0.5rem; padding: 0.5rem; display: block; margin-left: auto; margin-right: auto;">
                        </section>

                        <section class="post-section">
                            <h2>Editing Code Cells</h2>
                            <p>Use ChatGPT to modify the code in the cell under <strong>"## Poem Code"</strong>. After editing, paste the updated code back into the cell and execute it. 
                            For example, you might prompt ChatGPT with the following: <pre><code class="language-python"><strong>"Modify the code in this cell to print a poem instead of 'hello world'."</strong></code></pre></p>
                            <p>You might get a poem like this: <pre><code class="language-python">print("Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.")
</code></pre></p>
                            <p style="background: #F3F4F6; padding: 0.5rem; border-radius: 0.25rem;">Copy the python code with the poem from ChatGPT and paste it back into the cell under "## Poem Code" and execute it. <strong>"## Another Code that Doesn't Work :( :( "</strong> which has an error in order to debug it, and then run it</p>
                        </section>

                        <section class="post-section">
                            <h2>Saving and Sharing Your Work</h2>
                            <p>Google Colab automatically saves your work to Google Drive. You can easily share your notebooks with others or export them as HTML, PDF, or Python scripts.</p>
                            <p>Share your Colab URL on Discord in the #share-your-work channel by clicking the share button on the top right of the notebook.</p>
                            <div style="text-align: center;">
                                <a href="https://discord.gg/RRgVfzsG3P" target="_blank" class="join-discord-button">Discord Link</a>
                            </div>
                        </section>

                        <section class="post-section">
                            <h2>Basic Practices for Using Google Colab</h2>
                            <p>Here are some basic tips to make the most of Google Colab:</p>
                            <ul>
                                <li>Utilize the built-in code completion to help write code more efficiently</li>
                                <li>Save your work frequently to Google Drive to prevent data loss</li>
                                <li>Share your notebooks with others for collaborative learning</li>
                                <li>Use ChatGPT or other AI tools to get assistance with coding challenges</li>
                                <li>Explore the documentation to understand the features available in Google Colab</li>
                            </ul>
                          
                        </section>

                        <section class="post-section">
                            <h2>Create a Game with ChatGPT</h2>
                            <p>One exciting way to learn coding is by creating simple games. Let's create a Rock, Paper, Scissors game using ChatGPT:</p>
                            <ol>
                                <li>Open ChatGPT and ask something like (or any other game you want to create): <pre><code class="language-python"><strong>Can you help me create a Rock, Paper, Scissors game in Python?</strong>    </code></pre></li>
                                <li>Follow the instructions provided by ChatGPT to write the code.</li>
                                <li>Copy the code into a new cell in your Google Colab notebook.</li>
                                <li>Run the cell to play your game!</li>
                            </ol>
                         
                        </section>

                        <section class="post-section">
                            <h2>Quick Challenges</h2>
                            <div class="quiz-container">
                                <div class="quiz-question">
                                    <p><strong>1. What is Google Colab?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q61" value="a"> A) A free, cloud-based platform for running Python code</label>
                                        <label><input type="radio" name="q61" value="b"> B) A local development environment</label>
                                        <label><input type="radio" name="q61" value="c"> C) A version control system</label>
                                        <label><input type="radio" name="q61" value="d"> D) A text editor</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q61', 'a')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q61"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>2. How do you run a code cell in Google Colab?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q62" value="a"> A) Click the play button next to the cell</label>
                                        <label><input type="radio" name="q62" value="b"> B) Press Shift + Enter</label>
                                        <label><input type="radio" name="q62" value="c"> C) Right-click the cell and select "Run"</label>
                                        <label><input type="radio" name="q62" value="d"> D) Use the keyboard shortcut Ctrl + Enter</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q62', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q62"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>3. What is the purpose of Google Colab's automatic saving feature?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q63" value="a"> A) To prevent data loss</label>
                                        <label><input type="radio" name="q63" value="b"> B) To share work with others</label>
                                        <label><input type="radio" name="q63" value="c"> C) To export work as HTML</label>
                                        <label><input type="radio" name="q63" value="d"> D) To run code</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q63', 'a')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q63"></div>
                                </div>
                            </div>
                            
                        </section>
                        
                        <section class="post-section">
                            <h2>What's Next?</h2>
                            <p>Now that you have a good grasp of Google Colab, it's time to focus on how to succeed in coding. </p>
                           
                        </section>
                    </div>
                `
            },
            // ------- Chapter 7 -------
            {
                title: "How to Succeed in Coding",
                content: `
                    <div class="blog-post">
                        <section class="post-section">
                            <h2>Embrace Hands-on Learning</h2>
                            <p>One of the best ways to learn coding is by writing and running code yourself. Going through the course material can help, but real understanding comes from practice. Whenever you encounter new concepts, try coding them out immediately. As you go through the material, pause and type out the examples on the Colab notebook, and experiment with different variations.</p>
                           
                        </section>

                        <section class="post-section">
                            <h2>Test Your Understanding</h2>
                            <p>To strengthen your coding skills, test your understanding by predicting what will happen before running the code. Ask yourself questions like:</p>
                            <ul>
                                <li><pre><code class="language-python">"What will happen if I leave out a quotation mark?"</code></pre></li>
                                <li><pre><code class="language-python">"What if I accidentally have two closing parentheses instead of one?"</code></pre></li>
                                <li><pre><code class="language-python">"What if I change this part of the code?"</code></pre></li>
                            </ul>
                            <p style="background-color: #f0f8ff; padding: 10px; border-radius: 5px;">Try this out with the code block under the cell <strong>"What would happen if..."</strong></p>
                            <div style="text-align: center; margin-top: 1rem;">
                                <a href="https://colab.research.google.com/drive/1LEav6Yxcx5j_cb48KzfJQ1QF1zQESTKb?usp=sharing" target="_blank" style="display: inline-block; padding: 0.5rem 1rem; background-color: #4285F4; color: white; text-decoration: none; border-radius: 0.25rem;">Google Colab</a>
                            </div>
                        </section>

                        

                        <section class="post-section">
                            <h2>Utilize AI Chatbots for Assistance</h2>
                            <p>Think of an AI chatbot as your coding companion. It is patient, knowledgeable, and always available to assist you. Whenever you encounter difficulties, feel free to ask the chatbot questions such as:</p>
                            <ul>
                                <li>Copy the code block under <strong>"## What is this mystery algorithm??"</strong> and paste it into ChatGPT and ask <pre><code class="language-python">"What does this code do?"</code></pre></li>
                                <li>Copy the code block under <strong>"## Why does the Geometric Series below output 2.0?"</strong> and paste it into ChatGPT and ask <pre><code class="language-python">"Why does this function work this way?"</code></pre></li>
                                <li>Copy the code block under <strong>"## Code below doesn't work :("</strong> and paste it into ChatGPT and ask <pre><code class="language-python">"How can I fix this error?"</code></pre></li>
                            </ul>
                            <div style="text-align: center; margin-top: 1rem;">
                                <a href="https://colab.research.google.com/drive/1LEav6Yxcx5j_cb48KzfJQ1QF1zQESTKb?usp=sharing" target="_blank" style="display: inline-block; padding: 0.5rem 1rem; background-color: #4285F4; color: white; text-decoration: none; border-radius: 0.25rem;">Google Colab</a>
                            </div>
                        </section>

                        <section class="post-section">
                            <h2>Debugging: Expect and Embrace Errors</h2>
                            <p>Errors in code are completely normal, especially when learning a new programming language. There almost never has been a time 
                            when I and probably anyone who has written code without making an error in the first attempt. You can think of errors as guideposts to help you learn. Just as with learning a new spoken language, you may not get everything right the first time, and that is okay! Instead of getting frustrated, use errors as learning opportunities.</p>
                            <ul>
                                <li>Read and understand error messages</li>
                                <li>Try different approaches to fix the issue</li>
                                <li>Ask the chatbot for help when needed</li>
                            </ul>
                            <p style="background: #F3F4F6; padding: 0.5rem; border-radius: 0.25rem;">Apply these 3 steps to the code block under <strong>"## Another Code that Doesn't Work :( :( "</strong> which has an error in order to debug it, and then run it</p>
                            <div style="text-align: center; margin-top: 1rem;">
                                <a href="https://colab.research.google.com/drive/1LEav6Yxcx5j_cb48KzfJQ1QF1zQESTKb?usp=sharing" target="_blank" style="display: inline-block; padding: 0.5rem 1rem; background-color: #4285F4; color: white; text-decoration: none; border-radius: 0.25rem;">Google Colab</a>
                            </div>
                        </section>
                        <section class="post-section">
                            <h2>Complete Practice Exercises</h2>
                            <p>Practice is essential for mastering coding concepts. The more problems you solve, the more confident you'll become in your coding skills.</p>
                            <div class="practice-box" style="background: #F3F4F6; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
                                <h3>We highly encourage this Practice Platform</h3>
                                <p>Visit <a href="https://codingbat.com/python" target="_blank">CodingBat Python</a> and complete:</p>
                                <ul>
                                    <li>Warmup-1</li>
                                    <li>Warmup-2</li>
                                </ul>
                                <p>Feel free to use AI assistants like ChatGPT to help you understand and solve these problems</p>
                            </div>
                            <div style="text-align: center; margin-top: 1rem;">
                                <a href="https://colab.research.google.com/drive/1LEav6Yxcx5j_cb48KzfJQ1QF1zQESTKb?usp=sharing" target="_blank" style="display: inline-block; padding: 0.5rem 1rem; background-color: #4285F4; color: white; text-decoration: none; border-radius: 0.25rem;">Google Colab</a>
                            </div>
                        </section>
                        <section class="post-section">
                            <h2>Quick Challenges</h2>
                            <div class="quiz-container">
                                <div class="quiz-question">
                                    <p><strong>1. What is the best way to learn coding?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q71" value="a"> A) Only watching tutorial videos</label>
                                        <label><input type="radio" name="q71" value="b"> B) Reading documentation without practice</label>
                                        <label><input type="radio" name="q71" value="c"> B) Hands-on practice and experimentation</label>
                                        <label><input type="radio" name="q71" value="d"> D) Memorizing code snippets</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q71', 'c')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q71"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>2. How should you approach errors in your code?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q72" value="a"> A) Get frustrated and give up</label>
                                        <label><input type="radio" name="q72" value="b"> B) Ignore them and start over</label>
                                        <label><input type="radio" name="q72" value="c"> C) View them as learning opportunities and debug systematically</label>
                                        <label><input type="radio" name="q72" value="d"> D) Always ask someone else to fix them</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q72', 'c')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q72"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>3. What's the recommended approach when using AI-generated code?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q73" value="a"> A) Copy and paste the code</label>
                                        <label><input type="radio" name="q73" value="b"> B) Read and understand the code</label>
                                        <label><input type="radio" name="q73" value="c"> C) Modify the code</label>
                                        <label><input type="radio" name="q73" value="d"> D) Ignore the code</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q73', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q73"></div>
                                </div>
                            </div>
                        </section>
                        <section class="post-section">
                            <h2>What's Next?</h2>
                            <p>Now that you've learned how to succeed in coding, it's time to apply these skills in real-world projects. In the next chapter, you'll explore setting up your coding development environment, which will help you work more efficiently and manage larger projects.</p>
                            <p>You'll also learn about the benefits of using Integrated Development Environments (IDEs) and how to overcome common setup challenges.</p>
                        </section>
                    </div>
                `
            },
            // ------- Chapter 8 -------
            {
                title: "Setting Up Your Coding Development Environment",
                content: `
                    <div class="blog-post">
                        <section class="post-section">
                            <h2>Beyond Google Colab: Why an Integrated Development Environments (IDEs) is Important</h2>
                            <p>While Google Colab is an excellent starting point for learning Python, IDEs are more robust for automating tasks and managing projects. Here's why:</p>
                            <div class="comparison-box" style="background: #F3F4F6; padding: 1.5rem; border-radius: 0.5rem; margin: 1rem 0;">
                                <h3>Google Colab Limitations:</h3>
                                <ul>
                                    <li>Requires internet connection</li>
                                    <li>Limited file system access</li>
                                    <li>Session timeouts</li>
                                    <li>Basic code completion</li>
                                </ul>
                                
                                <h3>IDEs Advantages:</h3>
                                <ul>
                                    <li>Works offline</li>
                                    <li>Full access to local files</li>
                                    <li>Advanced debugging tools</li>
                                    <li>Integrated AI assistance</li>
                                    <li>Better project management</li>
                                </ul>
                            </div>
                        </section>
                        <section class="post-section">
                            <h2>Overcoming Setup Challenges</h2>
                            <p>Setting up your development environment can be one of the most challenging parts of your preparation. Getting the setup right, however, is foundational to every coding journey as 
                            a big part of coding is setting up your challenging environments which a valuable skill to build Persistence here will go a very long way. Don't hesitate to ask questions on Discord if you encounter any issues. You will be supported.</p>
                        </section>
                        <h1> These Steps will Help you Set Up your IDE</h1>
                        <div class="post-section-no-counter">
                            <h2>Step 1: Installing Python Locally</h2>
                            <p>Download Python from <a href="https://www.python.org/downloads/" target="_blank">Python's official website</a> and Install it on your computer.</p>
                            <p>After installation, test Python by running it in the terminal (Mac/Linux) or command prompt (Windows) to ensure it works. You should see an output similar to the image below:</p>
                            <img src="assets/terminal.png" alt="Terminal Output Example">
                            <p>If you have trouble, ask questions on Discord or check out this detailed guide: <a href="https://realpython.com/installing-python/" target="_blank">Real Python: Installing Python</a>.</p>
                        </div>

                        <div class="post-section-no-counter">
                            <h2>Step 2: Setting Up Cursor AI</h2>
                            <p>Cursor AI is a revolutionary code editor that combines the power of traditional IDEs with advanced AI capabilities. Follow the checklist below to get started:</p>
                            <div class="checklist-container" style="background: #F9FAFB; padding: 1.5rem; border-radius: 0.5rem; margin: 1rem 0;">
                                <label class="checklist-item">
                                    <input type="checkbox" onchange="toggleStrikethrough(this)">
                                    <span>Download Cursor AI from <a href="https://cursor.sh" target="_blank">cursor.sh</a> and install it on your operating system.</span>
                                </label>
                                <br>
                                <label class="checklist-item">
                                    <input type="checkbox" onchange="toggleStrikethrough(this)">
                                    <span>Launch Cursor AI and view the welcome screen.</span>
                                </label>
                                <img src="assets/cursor.png" alt="Cursor AI Welcome Screen" style="width:60%; display:block; margin-left:auto; margin-right:auto;">
                                <br>
                                <label class="checklist-item">
                                    <input type="checkbox" onchange="toggleStrikethrough(this)">
                                    <span>Create a folder on your computer, name it "projects", and open it in Cursor AI with the "Open a Folder" button.</span>
                                </label>
                                <br>
                                <label class="checklist-item">
                                    <input type="checkbox" onchange="toggleStrikethrough(this)">
                                    <span>Right-click on the left sidebar, select "New File", and name it "main.py".</span>
                                </label>
                                <img src="assets/cursor_open.png" alt="Cursor AI Open Folder" style="width:60%; display:block; margin-left:auto; margin-right:auto;">
                                <br>
                                <label class="checklist-item">
                                    <input type="checkbox" onchange="toggleStrikethrough(this)">
                                    <span>Write the following code in main.py: <pre><code class="language-python">print("Hello, World!")</code></pre></span>
                                </label>
                                <br>
                                <label class="checklist-item">
                                    <input type="checkbox" onchange="toggleStrikethrough(this)">
                                    <span>Click on Terminal at the top of the IDE, select "New Terminal" to open a terminal window.</span>
                                </label>
                                <img src="assets/cursor_new.png" alt="Cursor AI Terminal" style="width:60%; display:block; margin-left:auto; margin-right:auto;">
                                <br>
                                <label class="checklist-item">
                                    <input type="checkbox" onchange="toggleStrikethrough(this)">
                                    <span>In the terminal window, type "python main.py" and press enter to see the output "Hello, World!".</span>
                                </label>
                                <img src="assets/cursor_terminal.png" alt="Cursor AI Terminal Output" style="width:60%; display:block; margin-left:auto; margin-right:auto;">
                            </div>
                            <p style="text-align: center; font-size: 1.5rem; margin-top: 1rem;">
                                🎉 You have successfully created your first Python file and ran it using Cursor AI! 🎉
                            </p>

                            <div class="feature-box" style="background: #F3F4F6; padding: 1.5rem; border-radius: 0.5rem; margin: 1rem 0;">
                                <h3>Why Cursor AI is great for AI-Based Coding:</h3>
                                <ul>
                                    <li><strong>Built-in AI Assistant:</strong> Get instant help with coding questions</li>
                                    <li><strong>Smart Code Generation:</strong> Generate boilerplate code quickly</li>
                                    <li><strong>AI-Powered Debugging:</strong> Identify and fix coding issues faster</li>
                                    <li><strong>Context-Aware Suggestions:</strong> Receive relevant code completions</li>
                                    <li><strong>Seamless API Integration:</strong> Easy integration with OpenAI and other AI endpoints</li>
                                </ul>
                            </div>
                        </div>

                        <div class="post-section-no-counter">
                            <h2>Step 3: Best Practices with Cursor AI</h2>
                            <p>To make the most of Cursor AI for AI development:</p>
                            <ul>
                                <li>Use the AI chat panel for quick code explanations</li>
                                <li>Leverage code generation for repetitive tasks</li>
                                <li>Ask for optimization suggestions</li>
                                <li>Use the built-in version control features</li>
                                <li>Take advantage of the integrated terminal</li>
                            </ul>
                        </div>

                        <section class="post-section">
                            <h2>Quick Challenges</h2>
                            <div class="quiz-container">
                                <div class="quiz-question">
                                    <p><strong>1. Why might you need a IDE instead of Google Colab?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q81" value="a"> A) Google Colab is outdated</label>
                                        <label><input type="radio" name="q81" value="b"> B) IDEs offer offline access and advanced tools</label>
                                        <label><input type="radio" name="q81" value="c"> C) Google Colab is too expensive</label>
                                        <label><input type="radio" name="q81" value="d"> D) IDEs are simpler to use</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q81', 'b')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q81"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>2. What is a key feature of Cursor AI for AI development?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q82" value="a"> A) It's completely free</label>
                                        <label><input type="radio" name="q82" value="b"> B) It only works online</label>
                                        <label><input type="radio" name="q82" value="c"> C) Built-in AI assistant and smart code generation</label>
                                        <label><input type="radio" name="q82" value="d"> D) It replaces Python installation</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q82', 'c')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q82"></div>
                                </div>

                                <div class="quiz-question">
                                    <p><strong>3. How can you verify that Python is installed correctly on your system?</strong></p>
                                    <div class="quiz-options">
                                        <label><input type="radio" name="q83" value="a"> A) Type 'python3' in the terminal and run a 'Hello, World!' program</label>
                                        <label><input type="radio" name="q83" value="b"> B) Install games</label>
                                        <label><input type="radio" name="q83" value="c"> C) Remove old versions</label>
                                        <label><input type="radio" name="q83" value="d"> D) Change the installation directory</label>
                                    </div>
                                    <button class="submit-answer" onclick="checkAnswer('q83', 'a')">Submit Answer</button>
                                    <div class="quiz-feedback" id="feedback-q83"></div>
                                </div>
                            </div>
                        </section>

                        <section class="post-section">
                            <h2>What's Next?</h2>
                            <p>Congratulations on completing this challenging setup! In the next section, we'll provide some final thoughts and a summary of the preparation steps you've taken. We'll also include a nice congratulations message :).</p>
                        </section>
                    </div>
                `
            },
            // ------- Chapter 9 -------
            {
                title: "Congratulations and Welcome to the Community",
                content: `
                    <div class="blog-post">
                        <img src="assets/congratz.webp" alt="Congratulations Image" style="width:60%; height:auto; margin-bottom: 1rem; display: block; margin-left: auto; margin-right: auto;">
                        <section class="post-section-no-counter">
                         <h2>In Conclusion:</h2>
                            <ul>
                                <li>We covered the basics of Python and its application in AI, with hands-on practice using Google Colab and AI chatbots.</li>
                                <li>We connected with the community on Discord, shared our work, and used AI tools to enhance coding skills and productivity.</li>
                                <li>We set up a strong coding environment with IDEs, preparing for real-world AI development and project management.</li>
                            </ul>
                            <hr>
                            <h2>Congratulations on Completing the Prep!</h2>
                            <p>You've finished the preparation guide, and we're happy to have you join us for the AI Python 101 crash course. Welcome to AI Coding!</p>
                            
                            <p style="background-color: #f0f8ff; padding: 10px; border-radius: 5px;"><strong>As a final step, please visit the #share-your-work channel on Discord to let us know you've completed the prep, share your experience, and any Google Colab links you've worked on.</strong></p>
                             <div style="text-align: center; margin-top: 1rem;">
                                <a href="https://discord.gg/RRgVfzsG3P" target="_blank" class="join-discord-button">Discord Link</a>
                            </div>
                         
                           

                           
                            <p>We look forward to seeing you on Sunday, February 23rd, for the crash course. 
                        </section>
                    </div>
                `
            }
        ];

function checkAnswer(questionId, correctAnswer) {
            const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
            const feedbackDiv = document.getElementById(`feedback-${questionId}`);
            
            if (!selectedAnswer) {
                alert("Please select an answer before submitting.");
                return;
            }

            const isCorrect = selectedAnswer.value === correctAnswer;
            feedbackDiv.style.display = 'block';
            feedbackDiv.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;

            const explanations = {
                q11: {
                    explanation: "Python is widely recognized as the most popular programming language for AI development due to its extensive libraries, simple syntax, and strong community support in the AI/ML field."
                },
                q12: {
                    explanation: "Andrew Ng is a renowned AI educator and researcher who founded deeplearning.ai, offering numerous popular courses that have helped millions learn AI and machine learning."
                },
                q13: {
                    explanation: "Kaggle is a platform that provides hands-on experience through real-world datasets, competitions, and collaborative projects, making it an excellent resource for learning AI practically."
                },
                q21: {
                    explanation: "Python is widely used in AI development because of its extensive libraries (like TensorFlow and PyTorch) and simple syntax, making it easier to develop and maintain AI applications."
                },
                q22: {
                    explanation: "TensorFlow is one of the most popular Python libraries for AI development, used for building and training neural networks and other machine learning models."
                },
                q23: {
                    explanation: "AI Python programs can perform a wide range of tasks including image recognition, natural language processing, and data analysis, making it versatile for various AI applications."
                },
                q31: {
                    explanation: "Python is used in real-world applications such as self-driving cars, healthcare, and financial services, showcasing its versatility and power."
                },
                q32: {
                    explanation: "Python has become the #1 choice for AI development because it is easy to learn, powerful, and has strong community support."
                },
                q33: {
                    explanation: "Programming contributes to scientific discoveries by processing vast amounts of data, enabling breakthroughs in various fields."
                },
                q41: {
                    explanation: "The text entered into a chatbot is called a 'prompt'."
                },
                q42: {
                    explanation: "The first program traditionally written by new programmers is the 'Hello, World!' program."
                },
                q43: {
                    explanation: "AI chatbots are not typically strong at writing highly complex algorithms."
                },
                q51: {
                    explanation: "Reading the guidelines to help keep our space productive for everyone."
                },
                q52: {
                    explanation: "Introducing yourself in the #introductions channel helps you connect with peers and share your goals, fostering a sense of community."
                },
                q53: {
                    explanation: "To make the most of the AI Python 101 course, actively participate and ask questions to enhance your learning experience. There are no bad questions."
                },
                q61: {
                    explanation: "Google Colab is a free, cloud-based platform that allows you to write and execute Python code through your browser."
                },
                q62: {
                    explanation: "You can run a code cell in Google Colab by either clicking the play button next to the cell or pressing Shift + Enter."
                },
                q63: {
                    explanation: "Google Colab's automatic saving feature prevents data loss by saving your work to Google Drive."
                },
                q71: {
                    explanation: "Hands-on practice and experimentation are the best ways to learn coding, as they help reinforce concepts and improve problem-solving skills."
                },
                q72: {
                    explanation: "Approach errors as learning opportunities and debug systematically to improve your coding skills."
                },
                q73: {
                    explanation: "When using AI-generated code, it's important to read and understand the code to ensure it meets your needs and is implemented correctly."
                },
                q81: {
                    explanation: "IDEs offer advantages like offline access, advanced debugging tools, and better project management capabilities."
                },
                q82: {
                    explanation: "Cursor AI features a built-in AI assistant and smart code generation capabilities, making it excellent for AI development."
                },
                q83: {
                    explanation: "To verify that Python is installed correctly, you can type 'python3' in the terminal to start the Python interpreter and then run a simple 'Hello, World!' program to ensure everything is working as expected."
                }
            };

            const feedback = explanations[questionId];
            feedbackDiv.innerHTML = `
                <p class="result"><strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong></p>
                <p class="explanation">${feedback.explanation}</p>
            `;

            // Disable the submit button after answering
            const submitButton = feedbackDiv.previousElementSibling;
            submitButton.disabled = true;
        }