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

// Syllabus
// Get the modal
let modal = document.querySelector('#myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let modalImg = document.querySelector('#img01');
let captionText = document.querySelector('#caption');

const buttons = document.querySelectorAll('.butt');
buttons.forEach((but) => {
    but.addEventListener('click', function () {
        if (but === buttons[0]) {
            modal.style.display = 'block';
            modalImg.src = 'resources/img/roadmap-linux.png';
            captionText.innerHTML = 'Syllabus Linux';
        }
        else if (but === buttons[1]) {
            modal.style.display = 'block';
            modalImg.src = 'resources/img/roadmap-gh.png';
            captionText.innerHTML = 'Syllabus Git & Github';
        }
        else if (but === buttons[2]) {
            modal.style.display = 'block';
            modalImg.src = 'resources/img/roadmap-html.png';
            captionText.innerHTML = 'Syllabus HTML';
        }
        else if (but === buttons[3]) {
            modal.style.display = 'block';
            modalImg.src = 'resources/img/roadmap-css.png';
            captionText.innerHTML = 'Syllabus CSS';
        }
        else if (but === buttons[4]) {
            modal.style.display = 'block';
            modalImg.src = 'resources/img/roadmap-js.png';
            captionText.innerHTML = 'Syllabus JavaScript';
        }
        else if (but === buttons[5]) {
            modal.style.display = 'block';
            modalImg.src = 'resources/img/roadmap-dom.png';
            captionText.innerHTML = 'Syllabus JavaScript DOM';
        }
        else if (but === buttons[6]) {
            modal.style.display = 'block';
            modalImg.src = 'resources/img/roadmap-java.png';
            captionText.innerHTML = 'Syllabus Java';
        }
        else {
            modal.style.display = 'block';
            modalImg.src = 'resources/img/roadmap-jsp.png';
            captionText.innerHTML = 'Syllabus Servlet & JSP';
        }
    });
});

// Get the <span> element that closes the modal
let span = document.querySelector('.close');

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function () {
    modal.style.display = 'none';
})
/* ... */

// Swiper
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 5,
//     spaceBetween: 50,
//     slidesPerGroup: 1,
//     loop: true,
//     centerSlide: 'true',
//     loopFillGroupWithBlank: true,
//     grabCursor: 'true',
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         576: {
//             slidesPerView: 1.7,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         992: {
//             slidesPerView: 3,
//         },
//         1200: {
//             slidesPerView: 3.3,
//         },
//         1430: {
//             slidesPerView: 4,
//         },
//         1760: {
//             slidesPerView: 5,
//         },
//     },
// });
/* ... */