
// Define btn Hamburger
const btnHamburger      = document.querySelector('#btn-hamburger')
const btnCloseHamburger = document.querySelector('.close-hamburger')

btnHamburger.addEventListener('click', (e) => {
    const menuHiddent = document.querySelector('header nav.nav-header.is-desktop')
    menuHiddent.classList.add('menu-hamburger')
})

btnCloseHamburger.addEventListener('click', (e) => {
    const menuHiddent = document.querySelector('header nav.nav-header.is-desktop')
    menuHiddent.classList.remove('menu-hamburger')
})

// Carusel
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');

let index = 0;

function showImage(idx) {
    if (idx < 0) index = images.length - 1;
    else if (idx >= images.length) index = 0;
    else index = idx;

    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => showImage(index - 1));
nextBtn.addEventListener('click', () => showImage(index + 1));

// Auto-play cada 5 segundos
setInterval(() => {
    showImage(index + 1);
}, 5000);