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


  
document.addEventListener('DOMContentLoaded', runTypingEffect);

function submitForm(event) {
    event.preventDefault();  // Prevents the default form submission
    alert("Form submitted!");
    document.getElementById("myForm").reset();  // Clears the form
  }