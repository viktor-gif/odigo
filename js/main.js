(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const smallMenuClose = document.querySelector('.header_nav_close')
    burger.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    })
    smallMenuClose.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    })
}());