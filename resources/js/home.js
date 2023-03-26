// **modal burger menu //
const burgerMenuBtn = document.querySelector("#open-menu");
const modalMenu = document.querySelector("#modal-menu");
const closeMenuBtn = document.querySelector(".modal-menu #close-btn");
const header = document.querySelector("header");

burgerMenuBtn.addEventListener('click', () => {
    modalMenu.showModal();
    document.body.classList.add("scroll-hidden");
    header.style.marginTop = "0px";
})

closeMenuBtn.addEventListener('click', () => {
    modalMenu.close();
    document.body.classList.remove("scroll-hidden");
    header.style.marginTop = "22px";
})
// **--------------//

// **modal login //
const loginBtn = document.querySelector("#open-modal-login");
const modalLogin = document.querySelector("#modal-login");
const closeLogin = document.querySelector(".modal-login #close-btn")

loginBtn.addEventListener('click', () => {
    modalLogin.showModal();
    document.body.classList.add("scroll-hidden");
})

closeLogin.addEventListener('click', () => {
    modalLogin.close();
    document.body.classList.remove("scroll-hidden");
})
// **--------------//
