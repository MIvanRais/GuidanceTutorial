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

// **back to top button //
let button = document.querySelector("#backToTop");
let progressCircle = document.querySelector('#progress-circle');

function getScrollPercentage() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollableHeight = scrollHeight - clientHeight;
    const scrollPercentage = Math.floor((scrollTop / scrollableHeight) * 100);
    return scrollPercentage;
}

window.addEventListener('scroll', () => scrollFunction())

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        button.classList.remove('disappear');
        button.classList.add('appear');
        progressCircle.style.cssText = `--percent: ${getScrollPercentage()}`
    } else {
        button.classList.remove('appear');
        button.classList.add('disappear');
        progressCircle.style.cssText = `--percent: 0`
    }
}

button.addEventListener('click', () => scrollToTop());

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// **--------------//