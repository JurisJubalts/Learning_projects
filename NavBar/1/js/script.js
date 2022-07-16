const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

function navToggle() {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no__scroll');
}


btn.addEventListener('click', navToggle);