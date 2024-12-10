
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

// Grab the toggle button, body element, and logo image
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;
const logoImage = document.querySelector('.logo img');  // Get the logo image element
const icon = document.getElementById('toggle-icon');

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Toggle between nude-mode and default (light) mode
    body.classList.toggle('nude-mode');
    
    // Change the logo based on the current mode
    const currentLogo = logoImage.src;  // Get the current logo source

    // If we're in nude-mode, change to MyLogo2.png, else switch back to Mylogo.png
    if (body.classList.contains('nude-mode')) {
        logoImage.src = 'MyLogo2.png';  // Change to MyLogo2.png for nude mode
        icon.textContent = '🌰';  // Change to moon icon for Nude mode
    } else {
        logoImage.src = 'Mylogo.png';  // Revert back to Mylogo.png for light mode
        icon.textContent = '🫐';  // Change to sun icon for Light mode
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

