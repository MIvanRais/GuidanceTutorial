//** Validation Form Login */ 
const formLogin = document.querySelector("#form-login");
const validationMessageLogin = document.querySelectorAll('#modal-login .validation');
const usernameLogin = document.querySelector('#username-login');
const passwordLogin = document.querySelector('#password-login');

function isLoginFormValid() {
    if (usernameLogin.value.length == 0 || passwordLogin.value.length == 0) {
        if (usernameLogin.value.length == 0) {
            validationMessageLogin[0].style.display = 'block';

            //** live validation after click the button */
            usernameLogin.addEventListener("input", (() => {
                if (usernameLogin.value.length == 0) {
                    validationMessageLogin[0].style.display = 'block';
                } else {
                    validationMessageLogin[0].style.display = 'none';
                }
            }))
        }

        if (passwordLogin.value.length == 0) {
            validationMessageLogin[1].style.display = 'block';

            //** live validation after click the button */
            passwordLogin.addEventListener("input", (() => {
                if (passwordLogin.value.length == 0) {
                    validationMessageLogin[1].style.display = 'block';
                } else {
                    validationMessageLogin[1].style.display = 'none';
                }
            }))
        }
        return false;
    }
    return true;
}

formLogin.addEventListener("submit", (e => {
    if (!isLoginFormValid()) {
        e.preventDefault();
    }
}))