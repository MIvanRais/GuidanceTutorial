// **modal burger menu //
const burgerMenuBtn = document.querySelector("#open-menu");
const modalMenu = document.querySelector("#modal-menu");
const closeBtn = document.querySelector("#close-btn");
const header = document.querySelector("header");

burgerMenuBtn.addEventListener('click',() => {
   modalMenu.showModal();
   document.body.classList.add("scroll-hidden");
   header.style.marginTop = "0px";
})

closeBtn.addEventListener('click', () => {
    modalMenu.close();
    document.body.classList.remove("scroll-hidden");
    header.style.marginTop = "22px";
})