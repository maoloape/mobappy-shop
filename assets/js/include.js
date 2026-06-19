async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        const html = await response.text();

        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

async function loadPage(page) {
    try {
        const response = await fetch(`./pages/${page}.html`);
        const html = await response.text();

        document.getElementById('app').innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('navbar', './partials/navbar.html');
    await loadComponent('footer', './partials/footer.html');

    loadPage('home');
});