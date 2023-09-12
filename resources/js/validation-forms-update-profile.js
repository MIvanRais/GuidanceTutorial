//** Validation Form Update Profile */

const formUpdateProfile = document.querySelector('.update-profile>form');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const gendersContainer = document.querySelector('#genders');
const maleRegister = document.querySelector("#male");
const femaleRegister = document.querySelector("#female");
const phoneNumber = document.querySelector('#phone-number');
const photo = document.querySelector('#photo_profile');
const validationMessage = document.querySelectorAll('.validation');

function isFirstNameValid() {
    if (firstName.value.length == 0) {
        validationMessage[0].innerText = "First Name is required";
        validationMessage[0].classList.add("display-validation");

        //** live first name field validation after click the button */
        firstName.addEventListener("input", (() => {
            if (firstName.value.length == 0) {
                validationMessage[0].innerText = "First Name is required";
                validationMessage[0].classList.add("display-validation");
            } else {
                validationMessage[0].classList.remove("display-validation");
            }
        }))
        return false;
    } else if (firstName.value.length > 15) {
        validationMessage[0].innerText = "No more than 15 characters";
        validationMessage[0].classList.add("display-validation");

        //** live first name field validation after click the button */
        firstName.addEventListener("input", (() => {
            if (firstName.value.length > 15) {
                validationMessage[0].innerText = "No more than 15 characters";
                validationMessage[0].classList.add("display-validation");
            } else {
                validationMessage[0].classList.remove("display-validation");
            }
        }))
        return false;
    }
    return true;
}

function isLastNameValid() {
    if (lastName.value.length == 0) {
        validationMessage[1].innerText = "Last Name is required";
        validationMessage[1].classList.add("display-validation");

        //** live last name field validation after click the button */
        lastName.addEventListener("input", (() => {
            if (lastName.value.length == 0) {
                validationMessage[1].innerText = "Last Name is required";
                validationMessage[1].classList.add("display-validation");
            } else {
                validationMessage[1].classList.remove("display-validation");
            }
        }))
        return false;
    } else if (lastName.value.length > 15) {
        validationMessage[1].innerText = "No more than 15 characters";
        validationMessage[1].classList.add("display-validation");

        //** live last name field validation after click the button */
        lastName.addEventListener("input", (() => {
            if (lastName.value.length > 15) {
                validationMessage[1].innerText = "No more than 15 characters";
                validationMessage[1].classList.add("display-validation");
            } else {
                validationMessage[1].classList.remove("display-validation");
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
    if (email.value.length == 0) {
        validationMessage[2].innerText = "Email is required";
        validationMessage[2].classList.add("display-validation");

        //** live email field validation after click the button */
        email.addEventListener("input", (() => {
            if (email.value.length == 0) {
                validationMessage[2].innerText = "Email is required";
                validationMessage[2].classList.add("display-validation");
            } else {
                validationMessage[2].classList.remove("display-validation");
            }
        }))
        return false;
    } else if (!checkEmailPattern(email.value)) {
        validationMessage[2].innerText = "Invalid email format. Example: user@example.com";
        validationMessage[2].classList.add("display-validation");

        //** live email field validation after click the button */
        email.addEventListener("input", (() => {
            if (!checkEmailPattern(email.value)) {
                validationMessage[2].innerText = "Invalid email format. Example: user@example.com";
                validationMessage[2].classList.add("display-validation");
            } else {
                validationMessage[2].classList.remove("display-validation");
            }
        }))
        return false;
    } else if (email.value.length > 40) {
        validationMessage[2].innerText = "No more than 40 characters";
        validationMessage[2].classList.add("display-validation");

        //** live email field validation after click the button */
        email.addEventListener("input", (() => {
            if (email.value.length > 40) {
                validationMessage[2].innerText = "No more than 40 characters";
                validationMessage[2].classList.add("display-validation");
            } else {
                validationMessage[2].classList.remove("display-validation");
            }
        }))
        return false;
    }
    return true;
}

function isGenderValid() {
    if (male.checked == false && female.checked == false) {
        validationMessage[3].innerText = "Gender is required";
        validationMessage[3].classList.add("display-validation");

        gendersContainer.addEventListener("click", (() => {
            if (male.checked == true || female.checked == true) {
                validationMessage[3].classList.remove("display-validation");
            }
        }))
        return false;
    }
    return true;
}

function checkPhoneNumberPattern(phoneNum) {
    const phoneNumberPattern = /0[0-9]{9,12}/g;

    if (!isNaN(Number(phoneNumber.value))) {
        if (phoneNum.match(phoneNumberPattern) != null) {
            return "valid";
        } else {
            return "invalid";
        }
    } else {
        return "invalid";
    }
}

function isPhoneNumberValid() {
    if (phoneNumber.value.length == 0) {
        validationMessage[4].innerText = "Phone Number is required";
        validationMessage[4].classList.add("display-validation");

        //** live phone number field validation after click the button */
        phoneNumber.addEventListener("input", (() => {
            if (phoneNumber.value.length == 0) {
                validationMessage[4].innerText = "Phone Number is required";
                validationMessage[4].classList.add("display-validation");
            } else {
                validationMessage[4].classList.remove("display-validation");
            }
        }))
        return false;
    } else if (phoneNumber.value.length < 10) {
        validationMessage[4].innerText = "No less than 10 digits";
        validationMessage[4].classList.add("display-validation");

        //** live phone number field validation after click the button */
        phoneNumber.addEventListener("input", (() => {
            if (phoneNumber.value.length < 10) {
                validationMessage[4].innerText = "No less than 10 digits";
                validationMessage[4].classList.add("display-validation");
            } else {
                validationMessage[4].classList.remove("display-validation");
            }
        }))
        return false;
    } else if (checkPhoneNumberPattern(phoneNumber.value) == "invalid") {
        validationMessage[4].innerText = "Invalid phone number format. Example: 085723411609";
        validationMessage[4].classList.add("display-validation");

        //** live phone number field validation after click the button */
        phoneNumber.addEventListener("input", (() => {
            switch (checkPhoneNumberPattern(phoneNumber.value)) {
                case "valid":
                    validationMessage[4].classList.remove("display-validation");
                    break;
                case "invalid":
                    validationMessage[4].innerText = "Invalid phone number format. Example: 085723411609";
                    validationMessage[4].classList.add("display-validation");
                    break;
            }
        }))
        return false;
    } else if (phoneNumber.value.length > 13) {
        validationMessage[4].innerText = "No more than 13 digits";
        validationMessage[4].classList.add("display-validation");

        //** live phone number field validation after click the button */
        phoneNumber.addEventListener("input", (() => {
            if (phoneNumber.value.length > 13) {
                validationMessage[4].innerText = "No more than 13 digits";
                validationMessage[4].classList.add("display-validation");
            } else {
                validationMessage[4].classList.remove("display-validation");
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
    if (photo.files.length == 0) {
        validationMessage[5].innerText = "Photo is required";
        validationMessage[5].classList.add("display-validation");

        // **live photo field validation after click the button
        photo.addEventListener("change", (() => {
            if (photo.files.length == 0) {
                validationMessage[5].innerText = "Photo is required";
                validationMessage[5].classList.add("display-validation");
            } else {
                validationMessage[5].classList.remove("display-validation");
            }
        }))
        return false;
    } else if (checkPhoto(photo) == "exceeded" || checkPhoto(photo) == "invalid") {
        switch (checkPhoto(photo)) {
            case "exceeded":
                validationMessage[5].innerText = "File size exceeds the allowed limit (5 MB)";
                validationMessage[5].classList.add("display-validation");
                break;
            case "invalid":
                validationMessage[5].innerText = "Invalid file type. Allowed types: [jpg, jpeg, png]";
                validationMessage[5].classList.add("display-validation");
                break;
        }

        // **live photo field validation after click the button
        photo.addEventListener("change", (() => {
            switch (checkPhoto(photo)) {
                case "exceeded":
                    validationMessage[5].innerText = "File size exceeds the allowed limit (5 MB)";
                    validationMessage[5].classList.add("display-validation");
                    break;
                case "invalid":
                    validationMessage[5].innerText = "Invalid file type. Allowed types: [jpg, jpeg, png]";
                    validationMessage[5].classList.add("display-validation");
                    break;
                case "valid":
                    validationMessage[5].classList.remove("display-validation");
                    break;
            }
        }))
        return false;
    }
    return true;
}

formUpdateProfile.addEventListener('submit', (e => {
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