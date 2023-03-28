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