import { home } from './data/home.js';
// import { about } from './data/about.js';
import { products } from './data/product.js';

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

function renderData(data, target = 'app') {

    const element =
        document.getElementById(target);

    if (!element)
        return;

    if (Array.isArray(data)) {

        const template =
            element.querySelector('#card');

        if (!template)
            return;

        const html =
            template.innerHTML;

        element.innerHTML =
            data.map(item => {

                let card =
                    html;

                Object.entries(item)
                    .forEach(([key, value]) => {

                        card =
                            card.replaceAll(
                                `$${key}`,
                                value
                            );

                    });

                return card;

            }).join('');

    } else {

        let html =
            element.innerHTML;

        Object.entries(data)
            .forEach(([key, value]) => {

                html =
                    html.replaceAll(
                        `$${key}`,
                        value
                    );

            });

        element.innerHTML =
            html;

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
            renderData(products.slice(0, 4), 'products');
        }

        if (page === 'product') {
            renderData(products, 'list');
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

    loadPage('home');
});