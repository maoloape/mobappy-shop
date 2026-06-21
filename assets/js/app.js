import './partials/nav.js';
import './include.js';

console.log('Mobappy Shop Loaded');

// Home Slider Initialization
window.initHomeSlider = function() {
    const sliderContainer = document.getElementById('home-banners');
    if (!sliderContainer) return;
    
    const slides = sliderContainer.children;
    const parent = sliderContainer.parentElement;
    if (!parent) return;

    const dots = parent.querySelectorAll('.absolute.bottom-3 span');
    const prevBtn = document.getElementById('prev-banner');
    const nextBtn = document.getElementById('next-banner');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    if (totalSlides <= 1) return;

    sliderContainer.style.width = `${totalSlides * 100}%`;
    Array.from(slides).forEach(slide => {
        slide.style.width = `${100 / totalSlides}%`;
    });

    function goToSlide(index) {
        currentSlide = index;
        sliderContainer.style.transform = `translateX(-${(100 / totalSlides) * currentSlide}%)`;
        
        if (dots.length > 0) {
            dots.forEach((dot, idx) => {
                if (idx === currentSlide) {
                    dot.className = "w-4 h-2 rounded-full bg-white transition-all duration-300";
                } else {
                    dot.className = "w-2 h-2 rounded-full bg-white/50 transition-all duration-300";
                }
            });
        }
    }

    function startAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            let nextIndex = (currentSlide + 1) % totalSlides;
            goToSlide(nextIndex);
        }, 4000);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(prevIndex);
            startAutoSlide(); 
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            let nextIndex = (currentSlide + 1) % totalSlides;
            goToSlide(nextIndex);
            startAutoSlide(); 
        });
    }

    startAutoSlide();
};