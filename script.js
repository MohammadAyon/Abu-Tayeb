// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Form Submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent! (Demo only)');
    form.reset();
});

// Profile Image Enlarge
document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".profile-image");

    if (image) {
        image.style.transition = "transform 0.3s ease";

        image.addEventListener("click", function () {
            const isEnlarged = image.classList.contains("enlarged");

            if (isEnlarged) {
                image.style.transform = "scale(1)";
                image.classList.remove("enlarged");
            } else {
                image.style.transform = "scale(2)";
                image.classList.add("enlarged");
            }
        });
    }
});

// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});


// Read More Button Functionality
document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const blogContent = button.previousElementSibling;
            blogContent.classList.toggle("show");

            if (blogContent.classList.contains("show")) {
                button.textContent = "Read Less";
            } else {
                button.textContent = "Read More";
            }
        });
    });
});
