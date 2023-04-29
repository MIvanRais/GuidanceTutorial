// ** --At 992px Viewport--
const minWidth992 = window.matchMedia('(min-width:992px)');

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

removeElements(minWidth992); //** Call function at run time