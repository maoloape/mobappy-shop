// Navbar Burger Button
document.addEventListener('click', function (e) {
    if (e.target.closest('#mobile-menu-button')) {
        const menu = document.getElementById('mobile-menu');

        if (!menu) return;

        const isOpen = menu.classList.contains('opacity-100');

        if (isOpen) {
            closeMenu(menu);
        } else {
            openMenu(menu);
        }
    }
});

function openMenu(menu) {
    menu.classList.remove(
        'opacity-0',
        '-translate-y-3',
        'pointer-events-none'
    );

    menu.classList.add(
        'opacity-100',
        'translate-y-0'
    );
}

function closeMenu(menu) {
    menu.classList.remove(
        'opacity-100',
        'translate-y-0'
    );

    menu.classList.add(
        'opacity-0',
        '-translate-y-3',
        'pointer-events-none'
    );
}

window.toggleMobileMenu = function(state) {
    const menu = document.getElementById('mobile-menu');

    if (!menu) return;

    if (state === false) {
        closeMenu(menu);
    } else if (state === true) {
        openMenu(menu);
    }
};