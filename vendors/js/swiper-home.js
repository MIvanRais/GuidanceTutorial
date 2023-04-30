const recommendedSwiper = new Swiper('.recommended-swiper', {
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
            slidesPerGroup: 3,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1200: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
    }
});

const categorySliderSwiper = new Swiper('.category-slider-swiper', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 8,
    slidesPerGroup: 1,
    loop: false,
    centerSlide: 'true',
    loopFillGroupWithBlank: false,
    grabCursor: 'true',
});

// **disabled slider of the category slider 
const containerSlides = document.querySelector('.category-slider .swiper-wrapper');

if (window.innerWidth >= '768') {
    containerSlides.classList.add('disabled-slider');
}