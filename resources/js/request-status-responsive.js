// ** --At 1280px Viewport--
const minWidth1280 = window.matchMedia('(min-width:1280px)');

// ** remove hr elements inside lesson 
const hrs = document.querySelectorAll('.list-request>div>hr');

function removeHrs(widthViewport) {
    if (widthViewport.matches) {
        for (const hr of hrs) {
            hr.remove();
        }
    }
}

removeHrs(minWidth1280); //** Call function at run time
// ** -----------