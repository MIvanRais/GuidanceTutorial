// Popup Form
const active = document.querySelector('#popup');
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');

openBtn.addEventListener('click', function () {
    active.style.display = 'flex';
})

closeBtn.addEventListener('click', function () {
    active.style.display = 'none';
})
/* ... */

// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    centerSlide: 'true',
    loopFillGroupWithBlank: true,
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1.7,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3.3,
        },
        1430: {
            slidesPerView: 4,
        },
        1760: {
            slidesPerView: 5,
        },
    },
});
/* ... */