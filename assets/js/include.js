import { initNavbarScrollEffect, setupMobileNavActiveEffect } from './partials/nav.js';
import { home } from './data/home.js';
// import { about } from './data/about.js';
import { products, categoryMap, merkMap, categories } from './data/product.js';

async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        const html = await response.text();

        const element = document.getElementById(id);
        element.innerHTML = html;

        if (window.Alpine) {
            Alpine.initTree(element);
        }

    } catch (error) {
        console.error(error);
    }
}

function renderData(data, target = 'app', templateId = 'card') {
    const element = document.getElementById(target);

    if (!element) return;

    if (Array.isArray(data)) {
        const template = element.querySelector(`#${templateId}`);

        if (!template) return;

        const html = template.innerHTML;

        element.innerHTML = data.map(item => {
            let card = html;

            Object.entries(item).forEach(([key, value]) => {

                if (key === 'categoryId') {
                    card = card.replaceAll('$category', categoryMap[value] ?? '-');
                    return;
                }

                if (key === 'merkId') {
                    card = card.replaceAll('$merk', merkMap[value] ?? '-');
                    return;
                }

                card = card.replaceAll(`$${key}`, value);
            });

            return card;
        }).join('');

    } else {
        let html = element.innerHTML;

        Object.entries(data).forEach(([key, value]) => {
            html = html.replaceAll(`$${key}`, value);
        });

        element.innerHTML = html;
    }
}

async function loadPage(page) {
    try {

        const response =
            await fetch(
                `./pages/${page}.html`
            );

        const html = await response.text();

        const app =
            document.getElementById('app');

        app.innerHTML = html;

        if (window.Alpine) {
            Alpine.initTree(app);
        }

        if (page === 'home') {
            renderData(home, 'home');
            renderData(categories, 'categories', 'category-card');
            renderData(products.slice(0, 6), 'products');
        }

        if (page === 'product') {
            renderData(products, 'products');
        }

    } catch (error) {
        console.error(error);
    }
}

window.loadPage = loadPage;

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('navbar', './partials/navbar.html');
    await loadComponent('footer', './partials/footer.html');
    await loadComponent('floating', './components/floating.html');
    await loadComponent('login', './components/modals/login.html');

    // Load Navbar Animate on Scroll
    initNavbarScrollEffect();
    setupMobileNavActiveEffect();

    loadPage('home');
});