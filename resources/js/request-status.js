// **Selectors
const requestStatuses = document.querySelectorAll('.request-status');
const eachRows = document.querySelectorAll('.content');

// ** The color will change according the status
for (let requestStatus = 0; requestStatus <= requestStatuses.length - 1; requestStatus++) {
    if (requestStatuses[requestStatus].innerText == "Responded") {
        requestStatuses[requestStatus].classList.add('respond');
        eachRows[requestStatus].classList.add('border-status-respond');
    } else if (requestStatuses[requestStatus].innerText == "Declined") {
        requestStatuses[requestStatus].classList.add('declined');
        eachRows[requestStatus].classList.add('border-status-decline');
    } else {
        requestStatuses[requestStatus].classList.add('new');
        eachRows[requestStatus].classList.add('border-status-new');
    }
}

// **modal request //
const requestBtn = document.querySelector("footer>button");
const modalRequest = document.querySelector("#modal-request");
const closeRequestBtn = document.querySelector("#modal-request #close-btn");

requestBtn.addEventListener('click', () => {
    modalRequest.showModal();
    document.body.classList.add("scroll-hidden");
})

closeRequestBtn.addEventListener('click', () => {
    modalRequest.close();
    document.body.classList.remove("scroll-hidden");
})
// **--------------//