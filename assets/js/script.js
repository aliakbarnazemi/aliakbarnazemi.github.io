// Start Menu
let btnOpen = document.querySelector('.nav-link-brand');
let btnClose = document.querySelector('.menu-close');
let $body = document.querySelector('.main-1');
let $body1 = document.querySelector('body');
let $menu = document.querySelector('.menu');

btnOpen.addEventListener('click', () => {
    $body.classList.add('main');
    $body1.style.overflowY = 'hidden';
    $menu.classList.remove('d-none');
});

btnClose.addEventListener('click', () => {
    $body.classList.remove('main');
    $body1.style.overflowY = 'scroll';
    $menu.classList.add('d-none');
});
// End Menu

