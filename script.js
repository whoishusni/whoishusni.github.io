document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('terminal-output');
    const cursor = document.getElementById('cursor');

    // Text to be typed
    const texts = ['Website Is Still Under Construction...\nThanks For Visiting My Personal Website\nStay Tune...\n\n\n\nBest Regards\nHusni'];
    let textIndex = 0;
    let charIndex = 0;

    // Function to simulate typing effect
    function typeText() {
        if (textIndex < texts.length) {
            // Type the current text
            if (charIndex < texts[textIndex].length) {
                output.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 30); // Adjust typing speed here
            } else {
                // Move to the next text after a delay
                setTimeout(() => {
                    output.textContent = ''; // Clear text for repeat effect
                    charIndex = 0;
                    textIndex = (textIndex + 1) % texts.length; // Move to the next text
                    typeText(); // Restart typing effect
                }, 4000); // Time before restarting the typing animation
            }
        }
    }

    // Start typing effect
    typeText();
});
