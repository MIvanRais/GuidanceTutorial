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

// **disabled slider of the category slider 
const containerSlides = document.querySelector('.swiper-wrapper');

if (window.innerWidth >= '768') {
    containerSlides.classList.add('disabled-slider');
}