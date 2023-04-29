// ** --At 768px Viewport--
const minWidth768 = window.matchMedia('(min-width:768px)');

// ** remove hr elements inside lesson 
const hrs = document.querySelectorAll('.list-notification-group>form>hr');

function removeHrs(widthViewport) {
    if (widthViewport.matches) {
        for (const hr of hrs) {
            hr.remove();
        }
    }
}

removeHrs(minWidth768); //** Call function at run time
// ** -----------