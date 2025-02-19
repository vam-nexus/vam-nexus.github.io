const learningPlatformContent = `
    <div class="blog-post">
        <section class="post-section">
            <h2>Overview of the Learning Platform</h2>
            <p>The learning platform is designed to provide an interactive experience where you can watch instructional videos, write and run Python code, and track your progress. Let's take a look at some key features of the platform.</p>
        </section>

        <section class="post-section">
            <h2>Key Sections of the Learning Platform</h2>
            <p>The platform consists of three main sections:</p>
            <ul>
                <li><strong>Navigation Pane:</strong> Located on the left side of the screen, this pane allows you to access different lessons and track your progress. You can open or close this panel as needed.</li>
                <li><strong>Coding Environment:</strong> The middle section is where you can write and execute Python code. This environment uses a Jupyter Notebook, a widely used tool for data science and AI development.</li>
                <li><strong>Video Player:</strong> On the right side, you will find the video player, where you can watch course lessons and demonstrations.</li>
            </ul>
        </section>

        <section class="post-section">
            <h2>Interacting with Videos</h2>
            <p>Videos are a key part of this course, and you have several options to control playback:</p>
            <ul>
                <li><strong>Play/Pause:</strong> Click the play button to start or pause the video at any time.</li>
                <li><strong>Speed Control:</strong> Adjust the playback speed under settings if you want to slow down or speed up the video.</li>
                <li><strong>Picture-in-Picture Mode:</strong> You can move the video to a smaller pop-up window while working on your code.</li>
            </ul>
        </section>

        <section class="post-section">
            <h2>Using the Coding Environment</h2>
            <p>To practice coding, follow these steps:</p>
            <ol>
                <li>Click inside the coding area to place your cursor.</li>
                <li>Paste code from the chatbot or write your own.</li>
                <li>Use <code>Shift + Enter</code> to run a code cell.</li>
                <li>Observe the output and make necessary changes to improve your code.</li>
            </ol>
        </section>

        <section class="post-section">
            <h2>Saving Your Work</h2>
            <p>It's important to note that your work is saved temporarily. The platform will only retain your work for <strong>two hours</strong>. If you leave and return later, you may need to restart and run all cells again.</p>
        </section>

        <section class="post-section">
            <h2>Tracking Progress</h2>
            <p>Each lesson you complete will be marked with a green checkmark. Your progress bar will update as you watch videos and complete exercises. Once the progress reaches 100%, you have successfully finished the lesson.</p>
        </section>

        <section class="post-section">
            <h2>Providing Feedback</h2>
            <p>If you have any feedback about the course or platform, you can click the feedback link in the lower left corner to share your thoughts.</p>
        </section>

        <section class="post-section">
            <h2>Check Your Understanding</h2>
            <div class="quiz-container">
                <div class="quiz-question">
                    <p><strong>1. What keyboard shortcut is used to run a code cell?</strong></p>
                    <div class="quiz-options">
                        <label><input type="radio" name="q10" value="a"> A) Enter</label>
                        <label><input type="radio" name="q10" value="b"> B) Ctrl + Enter</label>
                        <label><input type="radio" name="q10" value="c"> C) Shift + Enter</label>
                        <label><input type="radio" name="q10" value="d"> D) Space</label>
                    </div>
                    <button class="submit-answer" onclick="checkAnswer('q10', 'c')">Submit Answer</button>
                    <div class="quiz-feedback" id="feedback-q10"></div>
                </div>

                <div class="quiz-question">
                    <p><strong>2. How long is your work saved on the platform?</strong></p>
                    <div class="quiz-options">
                        <label><input type="radio" name="q11" value="a"> A) Forever</label>
                        <label><input type="radio" name="q11" value="b"> B) Two hours</label>
                        <label><input type="radio" name="q11" value="c"> C) One day</label>
                        <label><input type="radio" name="q11" value="d"> D) One week</label>
                    </div>
                    <button class="submit-answer" onclick="checkAnswer('q11', 'b')">Submit Answer</button>
                    <div class="quiz-feedback" id="feedback-q11"></div>
                </div>

                <div class="quiz-question">
                    <p><strong>3. What are the three main sections of the learning platform?</strong></p>
                    <div class="quiz-options">
                        <label><input type="radio" name="q12" value="a"> A) Header, Footer, Content</label>
                        <label><input type="radio" name="q12" value="b"> B) Navigation Pane, Coding Environment, Video Player</label>
                        <label><input type="radio" name="q12" value="c"> C) Menu, Editor, Console</label>
                        <label><input type="radio" name="q12" value="d"> D) Sidebar, Main Content, Settings</label>
                    </div>
                    <button class="submit-answer" onclick="checkAnswer('q12', 'b')">Submit Answer</button>
                    <div class="quiz-feedback" id="feedback-q12"></div>
                </div>
            </div>
        </section>

        <section class="post-section">
            <h2>What's Next?</h2>
            <p>In Chapter 6, we'll start writing our first Python programs! You'll learn:</p>
            <ul>
                <li><strong>Basic Python syntax and data types</strong></li>
                <li><strong>How to write and execute simple programs</strong></li>
                <li><strong>Common programming concepts and best practices</strong></li>
            </ul>
            <p>Get ready to start your hands-on Python programming journey!</p>
        </section>
    </div>
`;