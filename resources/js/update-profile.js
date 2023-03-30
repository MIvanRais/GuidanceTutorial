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


