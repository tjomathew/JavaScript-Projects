// Countdown function
function countdown() {
    let countdownTime = 10; // Countdown starts at 10 seconds
    const countdownDisplay = document.getElementById('countdown');

    // Function to update the countdown every second
    const interval = setInterval(() => {
        countdownDisplay.innerText = `Time left: ${countdownTime}s`;
        countdownTime--;

        // Stop countdown at 0
        if (countdownTime < 0) {
            clearInterval(interval);
            countdownDisplay.innerText = "Time's up!";
        }
    }, 1000);
}

// Basic Slideshow functionality
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'; // Hide all slides
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }

    slides[slideIndex - 1].style.display = 'block'; // Show the current slide

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Initialize slideshow and countdown on page load
window.onload = () => {
    countdown(); // Start countdown
    showSlides(); // Start slideshow
};
