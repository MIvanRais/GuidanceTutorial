// Popup Form
const active = document.querySelector('#popup');
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');

openBtn.addEventListener('click', function () {
    active.style.display = 'flex';
})

closeBtn.addEventListener('click', function () {
    active.style.display = 'none';
})
/* ... */