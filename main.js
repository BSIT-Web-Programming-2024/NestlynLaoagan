
var typed = new Typed(".text", { 
    strings: ["Web Developer", "UI/UX Designer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

    // Get the hamburger icon and navbar elements
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");

    // Add click event listener to toggle 'active' class on the navbar
    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

// Function to open the modal and display the clicked image
function openModal(imageSrc) {
    // Get the modal and image element
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");

    // Set the image source to the clicked image's source
    modalImage.src = imageSrc;

    // Display the modal
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}


document.addEventListener("DOMContentLoaded", () => {
    // Progress Bar Animation
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute("data-percentage");
        bar.style.width = percentage + "%";
    });

    // Counter Animation
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = target / 100; // Adjust speed by changing this divisor

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20); // Adjust timing here for smoothness
            } else {
                counter.innerText = target; // Make sure the counter ends at the target value
            }
        };

        updateCounter();
    });
});

// JavaScript to handle the hover effect on the service title (if needed)
document.querySelectorAll('.service-card').forEach(function(serviceCard) {
    const serviceTitle = serviceCard.querySelector('.service-title');
    const description = serviceCard.querySelector('.service-description');

    // Show description on mouse enter
    serviceCard.addEventListener('mouseenter', function() {
        description.style.opacity = '1';  // Make description visible
    });

    // Hide description on mouse leave
    serviceCard.addEventListener('mouseleave', function() {
        description.style.opacity = '0';  // Make description hidden
    });
});

// Dark Mode Toggle Button Functionality
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check if dark mode was previously set
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "🌞"; // Change icon to sun when dark mode is enabled
}

// Event listener for dark mode toggle
darkModeToggle.addEventListener("click", () => {
    // Toggle dark mode on the body
    body.classList.toggle("dark-mode");

    // Change the button icon
    if (body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "🌞"; // Sun icon for dark mode
        localStorage.setItem("darkMode", "enabled"); // Save dark mode state in local storage
    } else {
        darkModeToggle.textContent = "🌙"; // Moon icon for light mode
        localStorage.setItem("darkMode", "disabled"); // Save light mode state in local storage
    }
});

// Get all the service cards
const serviceCards = document.querySelectorAll('.service-card');

// Loop through each card and add event listeners for hover
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add 'hovered' class to show description
        card.classList.add('hovered');
    });

    card.addEventListener('mouseleave', () => {
        // Remove 'hovered' class to hide description
        card.classList.remove('hovered');
    });
});

