export function initNavbarScrollEffect() {
    let lastScrollTop = 0;
    const subNavbar = document.getElementById('sub-navbar');
    
    if (!subNavbar) return;

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        if (window.innerWidth >= 768) {
            if (scrollTop > lastScrollTop && scrollTop > 50) {
                subNavbar.classList.add('-translate-y-full');
            } else {
                subNavbar.classList.remove('-translate-y-full');
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });
}

export function setupMobileNavActiveEffect() {
    const mobileButtons = document.querySelectorAll('div.fixed.bottom-0 button');
    
    mobileButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            mobileButtons.forEach(b => {
                b.classList.remove('text-primary');
                b.classList.add('text-slate-500');
            });
            this.classList.remove('text-slate-500');
            this.classList.add('text-primary');
        });
    });
}