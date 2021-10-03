(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const smallMenuClose = document.querySelector('.header_nav_close')
    burger.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    })
    smallMenuClose.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
}());