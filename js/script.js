// Add custom JavaScript here
function runTypingEffect() {
    const text = 'I am Shaheen Salma. '
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 100;

    typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
        }, delay * i);
    }
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());
    
    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    }).then(response => response.json()).then(data => {
      console.log('Success:', data);
    }).catch(error => {
      console.error('Error:', error);
    });
  });
  
document.addEventListener('DOMContentLoaded', runTypingEffect);