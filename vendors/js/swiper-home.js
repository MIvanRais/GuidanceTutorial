const recommendedSwiper = new Swiper('.recommended-swiper', {
    // Optional parameters
    slidesPerView: 1.4,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
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
        1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    }
});

const categorySliderSwiper = new Swiper('.category-slider-swiper', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 8,
    slidesPerGroup: 1,
    // loop: true,
    centerSlide: 'true',
    loopFillGroupWithBlank: false,
    grabCursor: 'true',
});