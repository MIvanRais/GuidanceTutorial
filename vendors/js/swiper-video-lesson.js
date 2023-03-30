const nextVideo = new Swiper('.next-video', {
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
});