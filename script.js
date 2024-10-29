let slideIndex = 0; // Initialize the slide index
showSlides(slideIndex); // Show the first slide

// Function to move to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show the current slide
function showSlides(n) {
    let slides = document.getElementsByClassName("slides");

    // Loop back to the first slide if at the end
    if (n >= slides.length) {
        slideIndex = 0;
    } 
    // Loop to the last slide if going backward
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides and show the current one
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block"; // Display the current slide
}

// Automatically switch to the next slide every 3 seconds
setInterval(() => {
    plusSlides(1);
}, 3000); // Change 3000 to adjust the interval in milliseconds
