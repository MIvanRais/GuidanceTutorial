// **Change The Background Color Inputs If The content is filled
const inputs = document.querySelectorAll("input[type='text'], input[type='email']");

for (let input = 0; input < inputs.length; input++) {
    inputs[input].addEventListener('focus', () => {
        inputs[input].style.backgroundColor = 'transparent';
    })
}

for (let input = 0; input < inputs.length; input++) {
    inputs[input].addEventListener('blur', () => {
        if (inputs[input].value.length > 0) {
            inputs[input].style.backgroundColor = 'transparent';
        } else {
            inputs[input].style.backgroundColor = 'hsla(30, 42%, 86%, 1)';
        }
    })
}
// **-----------------------------

// **upload an image interactively
const inputFile = document.querySelector('input[type="file"]');
const imgName = document.querySelector('.photo-profile-field>p');
const previewImg = document.querySelector('img');

function updateImageDisplay() {
    // **stores 'files' object in the file variable.
    const file = inputFile.files;

    // **check an user already to upload an image
    if (file.length === 1) {
        // **Change the content inside the p tag according the selected image
        imgName.innerText = file[0].name;
        // **Preview the image you uploaded
        previewImg.setAttribute('src', URL.createObjectURL(file[0]));
    }
}

inputFile.addEventListener('change', updateImageDisplay);
// **-----------------------------

// **Change The h2's content that depends on firstname field and lastname field
const fullname = document.querySelector('h1');
const firstnameField = document.querySelector('input[name="firstname"]');
const lastnameField = document.querySelector('input[name="lastname"]');

firstnameField.addEventListener('input', () => {
    fullname.innerText = firstnameField.value.concat(' ', lastnameField.value);

    // **set the content inside h1 back to default
    if (firstnameField.value === '' && lastnameField.value === '') {
        fullname.innerText = 'Fullname';
    }
})

lastnameField.addEventListener('input', () => {
    fullname.innerText = firstnameField.value.concat(' ', lastnameField.value);

    // **set the content inside h1 back to default
    if (firstnameField.value === '' && lastnameField.value === '') {
        fullname.innerText = 'Fullname';
    }
})
// **-----------------------------