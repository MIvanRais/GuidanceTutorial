// ** --At 992px Viewport--
const minWidth992 = window.matchMedia('(min-width:992px)');

// ** remove hr elements inside lesson 
const hrs = document.querySelectorAll('.list-request>div>hr');

function removeHrs(widthViewport) {
    if (widthViewport.matches) {
        for (const hr of hrs) {
            hr.remove();
        }
    }
}

removeHrs(minWidth992); //** Call function at run time
// ** -----------