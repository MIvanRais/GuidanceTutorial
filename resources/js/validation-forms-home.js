//** Validation Form Login */ 
const formLogin = document.querySelector("#form-login");
const validationMessageLogin = document.querySelectorAll('#modal-login .validation');
const usernameLogin = document.querySelector('#username-login');
const passwordLogin = document.querySelector('#password-login');

function isLoginFormValid() {
    if (usernameLogin.value.length == 0 || passwordLogin.value.length == 0) {
        if (usernameLogin.value.length == 0) {
            validationMessageLogin[0].classList.add("validation-login");

            //** live validation after click the button */
            usernameLogin.addEventListener("input", (() => {
                if (usernameLogin.value.length == 0) {
                    validationMessageLogin[0].classList.add("validation-login");
                } else {
                    validationMessageLogin[0].classList.remove("validation-login");
                }
            }))
        }

        if (passwordLogin.value.length == 0) {
            validationMessageLogin[1].classList.add("validation-login");

            //** live validation after click the button */
            passwordLogin.addEventListener("input", (() => {
                if (passwordLogin.value.length == 0) {
                    validationMessageLogin[1].classList.add("validation-login");
                } else {
                    validationMessageLogin[1].classList.remove("validation-login");
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

// ----------------------------------------------

//** Validation Form Register */
const formRegister = document.querySelector("#form-register");
const usernameRegister = document.querySelector("#username-register");
const passwordRegister = document.querySelector("#password-register");
const firstNameRegister = document.querySelector("#firstname");
const lastNameRegister = document.querySelector("#lastname");
const emailRegister = document.querySelector("#email");
const gendersContainer = document.querySelector('#genders');
const maleRegister = document.querySelector("#male");
const femaleRegister = document.querySelector("#female");
const phoneNumberRegister = document.querySelector("#phonenumber");
const photoRegister = document.querySelector("#photo_profile");
const validationMessageRegister = document.querySelectorAll('#modal-register .validation');

function isUsernameValid() {
    if (usernameRegister.value.length == 0) {
        validationMessageRegister[0].innerText = "Username is required";
        validationMessageRegister[0].classList.add("validation-register");

        //** live username field validation after click the button */
        usernameRegister.addEventListener("input", (() => {
            if (usernameRegister.value.length == 0) {
                validationMessageRegister[0].innerText = "Username is required";
                validationMessageRegister[0].classList.add("validation-register");
            } else {
                validationMessageRegister[0].classList.remove("validation-register");
            }
        }))
        return false;
    } else if (usernameRegister.value.length < 10) {
        validationMessageRegister[0].innerText = "Username must be at least 10 characters long";
        validationMessageRegister[0].classList.add("validation-register");

        //** live username field validation after click the button */
        usernameRegister.addEventListener("input", (() => {
            if (usernameRegister.value.length < 10) {
                validationMessageRegister[0].innerText = "Username must be at least 10 characters long";
                validationMessageRegister[0].classList.add("validation-register");
            } else {
                validationMessageRegister[0].classList.remove("validation-register");
            }
        }))
        return false;
    } else if (usernameRegister.value.length > 20) {
        validationMessageRegister[0].innerText = "No more than 20 characters";
        validationMessageRegister[0].classList.add("validation-register");

        //** live username field validation after click the button */
        usernameRegister.addEventListener("input", (() => {
            if (usernameRegister.value.length > 20) {
                validationMessageRegister[0].innerText = "No more than 20 characters";
                validationMessageRegister[0].classList.add("validation-register");
            } else {
                validationMessageRegister[0].classList.remove("validation-register");
            }
        }))
        return false;
    }
    return true;
}

function checkPasswordPattern(passwd) {
    const uppercasePattern = /[A-Z]/;
    const numberPattern = /[0-9]/;
    const specialCharPattern = /[!@#$%^&*]/;

    if (passwd.match(uppercasePattern) != null && passwd.match(numberPattern) != null && passwd.match(specialCharPattern) != null) {
        return true;
    } else {
        return false;
    }
}

function isPasswordValid() {
    if (passwordRegister.value.length == 0) {
        validationMessageRegister[1].innerText = "Password is required";
        validationMessageRegister[1].classList.add("validation-register");

        //** live password field validation after click the button */
        passwordRegister.addEventListener("input", (() => {
            if (passwordRegister.value.length == 0) {
                validationMessageRegister[1].innerText = "Password is required";
                validationMessageRegister[1].classList.add("validation-register");
            } else {
                validationMessageRegister[1].classList.remove("validation-register");
            }
        }))
        return false;
    } else if (passwordRegister.value.length < 10) {
        validationMessageRegister[1].innerText = "Password must be at least 10 characters long";
        validationMessageRegister[1].classList.add("validation-register");

        //** live password field validation after click the button */
        passwordRegister.addEventListener("input", (() => {
            if (passwordRegister.value.length < 10) {
                validationMessageRegister[1].innerText = "Password must be at least 10 characters long";
                validationMessageRegister[1].classList.add("validation-register");
            } else {
                validationMessageRegister[1].classList.remove("validation-register");
            }
        }))
        return false;
    } else if (!checkPasswordPattern(passwordRegister.value)) {
        validationMessageRegister[1].innerText = "Password must include at least one uppercase letter, one number, and one special character";
        validationMessageRegister[1].classList.add("validation-register");

        //** live password field validation after click the button */
        passwordRegister.addEventListener("input", (() => {
            if (!checkPasswordPattern(passwordRegister.value)) {
                validationMessageRegister[1].innerText = "Password must include at least one uppercase letter, one number, and one special character";
                validationMessageRegister[1].classList.add("validation-register");
            } else {
                validationMessageRegister[1].classList.remove("validation-register");
            }
        }))
        return false;
    } else if (passwordRegister.value.length > 20) {
        validationMessageRegister[1].innerText = "No more than 20 characters";
        validationMessageRegister[1].classList.add("validation-register");

        //** live password field validation after click the button */
        passwordRegister.addEventListener("input", (() => {
            if (passwordRegister.value.length > 20) {
                validationMessageRegister[1].innerText = "No more than 20 characters";
                validationMessageRegister[1].classList.add("validation-register");
            } else {
                validationMessageRegister[1].classList.remove("validation-register");
            }
        }))
        return false;
    }
    return true;
}

function isFirstNameValid() {
    if (firstNameRegister.value.length == 0) {
        validationMessageRegister[2].innerText = "First Name is required";
        validationMessageRegister[2].classList.add("validation-register");

        //** live first name field validation after click the button */
        firstNameRegister.addEventListener("input", (() => {
            if (firstNameRegister.value.length == 0) {
                validationMessageRegister[2].innerText = "First Name is required";
                validationMessageRegister[2].classList.add("validation-register");
            } else {
                validationMessageRegister[2].classList.remove("validation-register");
            }
        }))
        return false;
    } else if (firstNameRegister.value.length > 15) {
        validationMessageRegister[2].innerText = "No more than 15 characters";
        validationMessageRegister[2].classList.add("validation-register");

        //** live first name field validation after click the button */
        firstNameRegister.addEventListener("input", (() => {
            if (firstNameRegister.value.length > 15) {
                validationMessageRegister[2].innerText = "No more than 15 characters";
                validationMessageRegister[2].classList.add("validation-register");
            } else {
                validationMessageRegister[2].classList.remove("validation-register");
            }
        }))
        return false;
    }
    return true;
}

function isLastNameValid() {
    if (lastNameRegister.value.length == 0) {
        validationMessageRegister[3].innerText = "Last Name is required";
        validationMessageRegister[3].classList.add("validation-register");

        //** live last name field validation after click the button */
        lastNameRegister.addEventListener("input", (() => {
            if (lastNameRegister.value.length == 0) {
                validationMessageRegister[3].innerText = "Last Name is required";
                validationMessageRegister[3].classList.add("validation-register");
            } else {
                validationMessageRegister[3].classList.remove("validation-register");
            }
        }))
        return false;
    } else if (lastNameRegister.value.length > 15) {
        validationMessageRegister[3].innerText = "No more than 15 characters";
        validationMessageRegister[3].classList.add("validation-register");

        //** live last name field validation after click the button */
        lastNameRegister.addEventListener("input", (() => {
            if (lastNameRegister.value.length > 15) {
                validationMessageRegister[3].innerText = "No more than 15 characters";
                validationMessageRegister[3].classList.add("validation-register");
            } else {
                validationMessageRegister[3].classList.remove("validation-register");
            }
        }))
        return false;
    }
    return true;
}

function checkEmailPattern(email) {
    const emailPattern = /\S+@\S+\.\S+/g;

    if (email.match(emailPattern) != null) {
        return true;
    } else {
        return false;
    }
}

function isEmailValid() {
    if (emailRegister.value.length == 0) {
        validationMessageRegister[4].innerText = "Email is required";
        validationMessageRegister[4].classList.add("validation-register");

        //** live email field validation after click the button */
        emailRegister.addEventListener("input", (() => {
            if (emailRegister.value.length == 0) {
                validationMessageRegister[4].innerText = "Email is required";
                validationMessageRegister[4].classList.add("validation-register");
            } else {
                validationMessageRegister[4].classList.remove("validation-register");
            }
        }))
        return false;
    } else if (!checkEmailPattern(emailRegister.value)) {
        validationMessageRegister[4].innerText = "Invalid email format. Example: user@example.com";
        validationMessageRegister[4].classList.add("validation-register");

        //** live email field validation after click the button */
        emailRegister.addEventListener("input", (() => {
            if (!checkEmailPattern(emailRegister.value)) {
                validationMessageRegister[4].innerText = "Invalid email format. Example: user@example.com";
                validationMessageRegister[4].classList.add("validation-register");
            } else {
                validationMessageRegister[4].classList.remove("validation-register");
            }
        }))
        return false;
    } else if (emailRegister.value.length > 40) {
        validationMessageRegister[4].innerText = "No more than 40 characters";
        validationMessageRegister[4].classList.add("validation-register");

        //** live email field validation after click the button */
        emailRegister.addEventListener("input", (() => {
            if (emailRegister.value.length > 40) {
                validationMessageRegister[4].innerText = "No more than 40 characters";
                validationMessageRegister[4].classList.add("validation-register");
            } else {
                validationMessageRegister[4].classList.remove("validation-register");
            }
        }))
        return false;
    }
    return true;
}

function isGenderValid() {
    if (maleRegister.checked == false && femaleRegister.checked == false) {
        validationMessageRegister[5].innerText = "Gender is required";
        validationMessageRegister[5].classList.add("validation-register");

        gendersContainer.addEventListener("click", (() => {
            if (maleRegister.checked == true || femaleRegister.checked == true) {
                validationMessageRegister[5].classList.remove("validation-register");
            }
        }))
        return false;
    }
    return true;
}

function checkPhoneNumberPattern(phoneNumber) {
    const phoneNumberPattern = /0[0-9]{9,12}/g;

    if (!isNaN(Number(phoneNumberRegister.value))) {
        if (phoneNumber.match(phoneNumberPattern) != null) {
            return "valid";
        } else {
            return "invalid";
        }
    } else {
        return "invalid";
    }
}

function isPhoneNumberValid() {
    if (phoneNumberRegister.value.length == 0) {
        validationMessageRegister[6].innerText = "Phone Number is required";
        validationMessageRegister[6].classList.add("validation-register");

        //** live phone number field validation after click the button */
        phoneNumberRegister.addEventListener("input", (() => {
            if (phoneNumberRegister.value.length == 0) {
                validationMessageRegister[6].innerText = "Phone Number is required";
                validationMessageRegister[6].classList.add("validation-register");
            } else {
                validationMessageRegister[6].classList.remove("validation-register");
            }
        }))
        return false;
    } else if (phoneNumberRegister.value.length < 10) {
        validationMessageRegister[6].innerText = "No less than 10 digits";
        validationMessageRegister[6].classList.add("validation-register");

        //** live phone number field validation after click the button */
        phoneNumberRegister.addEventListener("input", (() => {
            if (phoneNumberRegister.value.length < 10) {
                validationMessageRegister[6].innerText = "No less than 10 digits";
                validationMessageRegister[6].classList.add("validation-register");
            } else {
                validationMessageRegister[6].classList.remove("validation-register");
            }
        }))
        return false;
    } else if (checkPhoneNumberPattern(phoneNumberRegister.value) == "invalid") {
        validationMessageRegister[6].innerText = "Invalid phone number format. Example: 085723411609";
        validationMessageRegister[6].classList.add("validation-register");

        //** live phone number field validation after click the button */
        phoneNumberRegister.addEventListener("input", (() => {
            switch (checkPhoneNumberPattern(phoneNumberRegister.value)) {
                case "valid":
                    validationMessageRegister[6].classList.remove("validation-register");
                    break;
                case "invalid":
                    validationMessageRegister[6].innerText = "Invalid phone number format. Example: 085723411609";
                    validationMessageRegister[6].classList.add("validation-register");
                    break;
            }
        }))
        return false;
    } else if (phoneNumberRegister.value.length > 13) {
        validationMessageRegister[6].innerText = "No more than 13 digits";
        validationMessageRegister[6].classList.add("validation-register");

        //** live phone number field validation after click the button */
        phoneNumberRegister.addEventListener("input", (() => {
            if (phoneNumberRegister.value.length > 13) {
                validationMessageRegister[6].innerText = "No more than 13 digits";
                validationMessageRegister[6].classList.add("validation-register");
            } else {
                validationMessageRegister[6].classList.remove("validation-register");
            }
        }))
        return false;
    }
    return true;
}

function checkPhoto(photo) {
    if (photo.files[0].type == "image/jpeg" || photo.files[0].type == "image/png") {
        if ((Math.round(photo.files[0].size / 1024)) > 5120) {
            // File size exceeds the allowed limit (5 MB).
            return "exceeded";
        }
        return "valid";
    } else {
        // Invalid file type. Allowed types: [list of allowed file extensions].
        return "invalid";
    }
}

function isPhotoValid() {
    if (photoRegister.files.length == 0) {
        validationMessageRegister[7].innerText = "Photo is required";
        validationMessageRegister[7].classList.add("validation-register");

        // **live photo field validation after click the button
        photoRegister.addEventListener("change", (() => {
            if (photoRegister.files.length == 0) {
                validationMessageRegister[7].innerText = "Photo is required";
                validationMessageRegister[7].classList.add("validation-register");
            } else {
                validationMessageRegister[7].classList.remove("validation-register");
            }
        }))
        return false;
    } else if (checkPhoto(photoRegister) == "exceeded" || checkPhoto(photoRegister) == "invalid") {
        switch (checkPhoto(photoRegister)) {
            case "exceeded":
                validationMessageRegister[7].innerText = "File size exceeds the allowed limit (5 MB)";
                validationMessageRegister[7].classList.add("validation-register");
                break;
            case "invalid":
                validationMessageRegister[7].innerText = "Invalid file type. Allowed types: [jpg, jpeg, png]";
                validationMessageRegister[7].classList.add("validation-register");
                break;
        }

        // **live photo field validation after click the button
        photoRegister.addEventListener("change", (() => {
            switch (checkPhoto(photoRegister)) {
                case "exceeded":
                    validationMessageRegister[7].innerText = "File size exceeds the allowed limit (5 MB)";
                    validationMessageRegister[7].classList.add("validation-register");
                    break;
                case "invalid":
                    validationMessageRegister[7].innerText = "Invalid file type. Allowed types: [jpg, jpeg, png]";
                    validationMessageRegister[7].classList.add("validation-register");
                    break;
                case "valid":
                    validationMessageRegister[7].classList.remove("validation-register");
                    break;
            }
        }))
        return false;
    }
    return true;
}

formRegister.addEventListener("submit", (e => {
    if (!isUsernameValid()) {
        e.preventDefault();
    }

    if (!isPasswordValid()) {
        e.preventDefault();
    }

    if (!isFirstNameValid()) {
        e.preventDefault();
    }

    if (!isLastNameValid()) {
        e.preventDefault();
    }

    if (!isEmailValid()) {
        e.preventDefault();
    }

    if (!isGenderValid()) {
        e.preventDefault();
    }

    if (!isPhoneNumberValid()) {
        e.preventDefault();
    }

    if (!isPhotoValid()) {
        e.preventDefault();
    }
}))

