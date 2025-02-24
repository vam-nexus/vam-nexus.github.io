async function createTopicBars() {
    const topicsGrid = document.querySelector('.topics-grid');
    
    try {
        const response = await fetch('/get_topics');
        const topics = await response.json();
        
        topics.forEach(topic => {
            const date = new Date(topic.created * 1000); // Convert Unix timestamp to JS Date
            const formattedDate = date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
            
            const topicBar = document.createElement('div');
            topicBar.className = 'topic-bar';
            topicBar.innerHTML = `
                <div class="topic-info">
                    <div class="topic-title">${topic.title}</div>
                    <div class="topic-description">${topic.description}</div>
                    <div class="topic-date">Created: ${formattedDate}</div>
                </div>
                <div class="topic-stats">
                    ${topic.questionCount} questions
                    <span class="arrow-icon">→</span>
                </div>
            `;
            
            topicBar.addEventListener('click', () => {
                window.location.href = `topics/${topic.id}.html`;
            });
            
            topicsGrid.appendChild(topicBar);
        });
    } catch (error) {
        console.error('Error loading topics:', error);
    }
}

async function handleTextSubmit() {
    const textInput = document.getElementById('textInput');
    const contextInput = document.getElementById('contextInput');
    const text = textInput.value.trim();
    const context = contextInput.value.trim();
    const submitBtn = document.getElementById('textSubmit');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'response-message';
    
    if (!text) return;

    try {
        // Change button to loading state
        submitBtn.innerHTML = `
            <div class="loading-container">
                <div class="loading-bar"></div>
                <span>Wait time approx 20 seconds...</span>
            </div>
        `;
        submitBtn.disabled = true;

        // Send the text and context to the backend
        const response = await fetch('/generate_topic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                text: text,
                context: context 
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to generate topic');
        }

        // Clear the input
        textInput.value = '';

        // Redirect to the new topic page
        const topicId = text.toLowerCase().replace(" ", "_").trim();
        window.location.href = `topics/${topicId}.html`;

    } catch (error) {
        // Show error message
        messageDiv.textContent = error.message;
        messageDiv.classList.add('error');
        console.error('Error generating topic:', error);
    } finally {
        // Restore button state
        submitBtn.innerHTML = `
            <i class="fas fa-magic"></i>
            Generate Quiz
        `;
        submitBtn.disabled = false;

        // Add message below the button
        const textInputGroup = document.querySelector('.text-input-group');
        const existingMessage = textInputGroup.querySelector('.response-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        textInputGroup.appendChild(messageDiv);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createTopicBars();
    
    // Add event listener for the text submit button
    const textSubmitBtn = document.getElementById('textSubmit');
    textSubmitBtn.addEventListener('click', handleTextSubmit);
});

document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            btn.classList.add('active');
            document.getElementById(`${btn.dataset.tab}-tab`).classList.add('active');
        });
    });
}); 