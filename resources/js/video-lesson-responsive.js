// ** --At 1200px Viewport--
const minWidth1200 = window.matchMedia('(min-width:1200px)');

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

removeElements(minWidth1200); //** Call function at run time