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
const closeLoginBtn = document.querySelector(".modal-login #close-btn")

loginBtn.addEventListener('click', () => {
    modalLogin.showModal();
    document.body.classList.add("scroll-hidden");
})

closeLoginBtn.addEventListener('click', () => {
    modalLogin.close();
    document.body.classList.remove("scroll-hidden");
})
// **--------------//

// **modal register //
const registerBtn = document.querySelector("#modal-login>p>span");
const modalRegister = document.querySelector("#modal-register");
const loginForm = document.querySelector("#modal-register>p>span");
const closeRegisterBtn = document.querySelector("#modal-register #close-btn");

registerBtn.addEventListener('click', () => {
    modalLogin.close();
    modalRegister.showModal();
    document.body.classList.add("scroll-hidden");
})

loginForm.addEventListener('click', () => {
    modalRegister.close();
    modalLogin.showModal();
})

closeRegisterBtn.addEventListener('click', () => {
    document.body.classList.remove("scroll-hidden");
    modalRegister.close();
})
// **--------------//