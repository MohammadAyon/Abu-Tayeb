// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
document.addEventListener("DOMContentLoaded", function() {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200); // Delay each card by 200ms
    });
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
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.video-carousel');
    const grid = carousel.querySelector('.video-grid');
    const cards = grid.querySelectorAll('.video-card');
    const prevBtn = carousel.querySelector('.carousel-button.prev');
    const nextBtn = carousel.querySelector('.carousel-button.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');

    let currentIndex = 0;
    const cardWidth = carousel.offsetWidth;
    const totalSlides = Math.ceil(cards.length / getCardsPerView());

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    function getCardsPerView() {
        if (window.innerWidth > 1024) return 3;
        if (window.innerWidth > 768) return 2;
        return 1;
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        const offset = -index * cardWidth;
        grid.style.transform = `translateX(${offset}px)`;
        updateDots();
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            goToSlide(currentIndex + 1);
        }
    });

    // Handle responsive behavior
    window.addEventListener('resize', () => {
        const newTotalSlides = Math.ceil(cards.length / getCardsPerView());
        if (currentIndex >= newTotalSlides) {
            currentIndex = newTotalSlides - 1;
            goToSlide(currentIndex);
        }
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentIndex < totalSlides - 1) {
                goToSlide(currentIndex + 1);
            } else if (diff < 0 && currentIndex > 0) {
                goToSlide(currentIndex - 1);
            }
        }
    }
});
