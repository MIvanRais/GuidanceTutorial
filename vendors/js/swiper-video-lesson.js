const nextVideo = new Swiper('.next-video', {
    // Optional parameters
    slidesPerView: 1.4,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: false,
    centerSlide: 'true',
    loopFillGroupWithBlank: false,
    grabCursor: 'true',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3
        },
        1200: {
            loop: false,
        },
    }
});

// **disabled slider of the next video slider
const containerSlides = document.querySelector('.swiper-wrapper');

if (window.innerWidth >= '1200') {
    containerSlides.classList.add('disabled-slider');
}