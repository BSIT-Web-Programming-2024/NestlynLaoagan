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