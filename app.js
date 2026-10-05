// аннимация new-perspective

const items = document.querySelectorAll('.new-perspective__item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.15
});

items.forEach((item) => {
    observer.observe(item);
});

// Burger menu

const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');

burger.addEventListener('click', function() {
    header.classList.toggle('menu-open');
});