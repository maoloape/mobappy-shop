import './partials/nav.js';
import './include.js';

console.log('Mobappy Shop Loaded');

// Navigation Action
window.updateActiveNavbar = function(pageName) {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const targetPage = link.getAttribute('data-page');

        if (targetPage === pageName) {            
            if (link.classList.contains('py-3')) {
                link.classList.remove('text-slate-600', 'border-transparent');
                link.classList.add('text-primary', 'border-primary');
            } else {
                link.classList.remove('text-slate-500');
                link.classList.add('text-primary');
            }
        } else {
            if (link.classList.contains('py-3')) {
                link.classList.remove('text-primary', 'border-primary');
                link.classList.add('text-slate-600', 'border-transparent');
            } else {
                link.classList.remove('text-primary');
                link.classList.add('text-slate-500');
            }
        }
    });
};

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
        prevBtn.onclick = () => {
            let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(prevIndex);
            startAutoSlide(); 
        };
    }

    if (nextBtn) {
        nextBtn.onclick = () => {
            let nextIndex = (currentSlide + 1) % totalSlides;
            goToSlide(nextIndex);
            startAutoSlide(); 
        };
    }

    let touchStartX = 0;
    let touchEndX = 0;

    parent.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(slideInterval); 
    }, { passive: true });

    parent.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchStartX - touchEndX > swipeThreshold) {
            let nextIndex = (currentSlide + 1) % totalSlides;
            goToSlide(nextIndex);
        } else if (touchEndX - touchStartX > swipeThreshold) {
            let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(prevIndex);
        }
    }

    startAutoSlide();
};