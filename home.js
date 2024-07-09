document.addEventListener("DOMContentLoaded", function() {
    const frontThirdElement = document.querySelector('.frontthird');
    const texts = ["~Comfort~", "~Elegance~", "~Minimalism~"];
    let currentIndex = 0;

    function changeText() {
        frontThirdElement.classList.add('blurred');
        setTimeout(() => {
            frontThirdElement.textContent = texts[currentIndex];
            frontThirdElement.classList.remove('blurred');
            currentIndex = (currentIndex + 1) % texts.length;
        }, 500); 
    }

    setInterval(changeText, 3000); 
});

function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');

    const frontmainElements = document.querySelectorAll('#image');
    frontmainElements.forEach(element => {
        element.classList.toggle('blurred');
    });
}

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('prev', 'next', 'active');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('prev');
        } else if (i === (index + 1) % slides.length) {
            slide.classList.add('next');
        }
    });

    const wrapper = document.querySelector('.carousel-wrapper');
    wrapper.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initial display of the first slide
showSlide(currentSlide);

// Automatically transition to the next slide every 3 seconds
setInterval(nextSlide, 3000);

function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown a')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}