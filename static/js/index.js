document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const clearBtn = document.getElementById('clear-btn');
    const historyBtn = document.getElementById('history-btn');
    let isWaitingForResponse = false;

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !isWaitingForResponse) sendMessage();
    });

    clearBtn.addEventListener('click', clearHistory);
    historyBtn.addEventListener('click', showHistory);

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message || isWaitingForResponse) return;
        
        addMessage('user', message);
        userInput.value = '';
        showTypingIndicator();
        isWaitingForResponse = true;
        
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message })
            });
            
            if (!response.ok) {
                throw new Error('请求失败: ' + response.status);
            }
            
            const data = await response.json();
            removeTypingIndicator();
            addMessage('ai', data.response);
        } catch (error) {
            removeTypingIndicator();
            console.error('Error:', error);
            addMessage('system', error.message);
        } finally {
            isWaitingForResponse = false;
        }
    }

    function clearHistory() {
        if (confirm('确定要清空当前对话记录吗？')) {
            chatContainer.innerHTML = '';
        }
    }

    function showHistory() {
        addMessage('system', '历史记录功能开发中，敬请期待...');
    }

    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = text;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('span');
            dot.className = 'typing-dot';
            typingDiv.appendChild(dot);
        }
        
        chatContainer.appendChild(typingDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }
});
