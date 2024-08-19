// Set the date we're counting down to
const countdownDate = new Date("August 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining
    const distance = countdownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".terminal-content").innerHTML = "<pre><b>System Message:</b>\n<b>----------------</b>\n<b>🚀 We Are Back! 🚀</b>\n\nThank you for your patience.</pre>";
    }
}, 1000);
