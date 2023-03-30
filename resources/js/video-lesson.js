// **If you click the input field, the buttons will appear. And If you click the cancel button, both buttons will disappear
const giveCommentContainer = document.querySelector('.give-comment');
const inputField = document.querySelector('.give-comment input');
const buttonContainer = document.querySelector('.give-comment>form>div');
const cancelButton = document.querySelector('.give-comment>form>div>button:first-child');

inputField.addEventListener('click', () => {
    giveCommentContainer.style.marginBottom = '30px';
    buttonContainer.style.display = 'block';
})

cancelButton.addEventListener('click', () => {
    giveCommentContainer.style.marginBottom = '15px';
    buttonContainer.style.display = 'none';
})