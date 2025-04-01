let currentIndex = 0;

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth + 50; // Including gap
    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

function nextSlide() {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    if (currentIndex < totalItems - 4) { // Show only 4 items at a time
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to first item
    }
    updateCarousel();
}

function prevSlide() {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 4; // Go to last batch
    }
    updateCarousel();
}

// Attach event listeners
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);