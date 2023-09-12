//** Validation Form Request */
const formRequest = document.querySelector('#modal-request>form');
const topic = document.querySelector('#topic');
const reason = document.querySelector('#reason');
const validationMessageRequest = document.querySelectorAll('.modal-request .validation');

function isTopicValid() {
    if (topic.value.length == 0) {
        validationMessageRequest[0].innerText = "Topic is required";
        validationMessageRequest[0].classList.add("validation-request");

        //** live topic field validation after click the button */
        topic.addEventListener("input", (() => {
            if (topic.value.length == 0) {
                validationMessageRequest[0].innerText = "Topic is required";
                validationMessageRequest[0].classList.add("validation-request");
            } else {
                validationMessageRequest[0].classList.remove("validation-request");
            }
        }))
        return false;
    } else if (topic.value.length > 100) {
        validationMessageRequest[0].innerText = "No more than 100 characters";
        validationMessageRequest[0].classList.add("validation-request");

        //** live topic field validation after click the button */
        topic.addEventListener("input", (() => {
            if (topic.value.length > 100) {
                validationMessageRequest[0].innerText = "No more than 100 characters";
                validationMessageRequest[0].classList.add("validation-request");
            } else {
                validationMessageRequest[0].classList.remove("validation-request");
            }
        }))
        return false;
    }
    return true;
}

function isReasonValid() {
    if (reason.value.length == 0) {
        validationMessageRequest[1].innerText = "Reason is required";
        validationMessageRequest[1].classList.add("validation-request");

        //** live reason field validation after click the button */
        reason.addEventListener("input", (() => {
            if (reason.value.length == 0) {
                validationMessageRequest[1].innerText = "Reason is required";
                validationMessageRequest[1].classList.add("validation-request");
            } else {
                validationMessageRequest[1].classList.remove("validation-request");
            }
        }))
        return false;
    } else if (reason.value.length > 200) {
        validationMessageRequest[1].innerText = "No more than 200 characters";
        validationMessageRequest[1].classList.add("validation-request");

        //** live reason field validation after click the button */
        reason.addEventListener("input", (() => {
            if (reason.value.length > 200) {
                validationMessageRequest[1].innerText = "No more than 200 characters";
                validationMessageRequest[1].classList.add("validation-request");
            } else {
                validationMessageRequest[1].classList.remove("validation-request");
            }
        }))
        return false;
    }
    return true;
}

formRequest.addEventListener('submit', (e => {
    if (!isTopicValid()) {
        e.preventDefault();
    }

    if (!isReasonValid()) {
        e.preventDefault();
    }
}))
