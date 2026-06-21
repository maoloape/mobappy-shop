window.tailwind = window.tailwind || {};

tailwind.config = {
    theme: {
        extend: {
            colors: {
                background: '#F5F5F5',
                primary: '#ff6900',
                secondary: '#2B3445',
                accent: '#00B8D9',
                success: '#22C55E',
                danger: '#EF4444',
            },
            backgroundImage: {
                'product': "url('/assets/images/bg-product.jpg')",
            }
        }
    }
};