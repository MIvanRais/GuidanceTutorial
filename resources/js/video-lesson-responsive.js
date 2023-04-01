// ** --At 1280px Viewport--
const minWidth1280 = window.matchMedia('(min-width:1280px)');

// ** remove pagination, swiper button prev and next
const pagination = document.querySelector('.swiper-pagination');
const buttonPrevNexts = document.querySelectorAll('div[class|="swiper-button"]');

function removeElements(widthViewport) {
    if (widthViewport.matches) {
        pagination.remove();

        for (const buttonPrevNext of buttonPrevNexts) {
            buttonPrevNext.remove();
        }
    }
}

removeElements(minWidth1280); //** Call function at run time