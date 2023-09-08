// **Create Elements //

// **create h2 (GuidanceTutorial) element
const h2 = document.createElement('h2');
h2.append('GuidanceTutorial');

// **create link (My Learning) element
const myLearningLink = document.createElement('a');
myLearningLink.setAttribute('href', 'my-learning.html');

const myLearning = document.createElement('p');
myLearning.append('My Learning');

myLearningLink.appendChild(myLearning);

// **create svg (notification icon) element
const notificationLink = document.createElement('a');
notificationLink.setAttribute('href', 'notification.html');

const xmlnsNotif = 'http://www.w3.org/2000/svg';
const boxWidthNotif = '16';
const boxHeightNotif = '18';

const notification = document.createElementNS(xmlnsNotif, "svg");
notification.setAttributeNS(null, 'viewBox', '0 0 ' + boxWidthNotif + ' ' + boxHeightNotif);
notification.setAttributeNS(null, "width", boxWidthNotif);
notification.setAttributeNS(null, "height", boxHeightNotif);

const notificationPath = document.createElementNS(xmlnsNotif, "path");
notificationPath.setAttributeNS(null, 'd', 'M0 7.02707C0 5.8152 0.254325 4.66691 0.762974 3.58221C1.27162 2.4975 1.9972 1.57363 2.93969 0.810602L3.85975 1.8205C3.06685 2.46384 2.44974 3.23809 2.00842 4.14326C1.56709 5.04843 1.34642 6.0097 1.34642 7.02707H0ZM14.6536 7.02707C14.6536 6.0097 14.4441 5.04843 14.0252 4.14326C13.6064 3.23809 13.0005 2.46384 12.2076 1.8205L13.1276 0.810602C14.0552 1.5886 14.7658 2.5162 15.2595 3.59343C15.7532 4.67065 16 5.8152 16 7.02707H14.6536ZM0.807854 15.2633V13.9168H2.69285V7.04952C2.69285 5.79276 3.06311 4.67439 3.80365 3.69442C4.54418 2.71444 5.52034 2.09728 6.73212 1.84294V1.19212C6.73212 0.848006 6.85554 0.563739 7.10239 0.339318C7.34923 0.114896 7.64469 0.00268555 7.98878 0.00268555C8.33287 0.00268555 8.62833 0.114896 8.87518 0.339318C9.12202 0.563739 9.24544 0.848006 9.24544 1.19212V1.84294C10.4572 2.09728 11.4371 2.71444 12.1851 3.69442C12.9331 4.67439 13.3072 5.79276 13.3072 7.04952V13.9168H15.1697V15.2633H0.807854ZM7.98878 17.9564C7.51005 17.9564 7.09117 17.7806 6.73212 17.429C6.37307 17.0774 6.19355 16.6547 6.19355 16.161H9.78401C9.78401 16.6547 9.60823 17.0774 9.25666 17.429C8.9051 17.7806 8.48247 17.9564 7.98878 17.9564ZM4.03927 13.9168H11.9607V7.04952C11.9607 5.94237 11.5792 4.9998 10.8163 4.22181C10.0533 3.44381 9.11828 3.05482 8.01122 3.05482C6.90416 3.05482 5.9654 3.44381 5.19495 4.22181C4.4245 4.9998 4.03927 5.94237 4.03927 7.04952V13.9168Z');
notificationPath.setAttributeNS(null, 'fill', '#808080');

notification.appendChild(notificationPath);
notificationLink.appendChild(notification);

// **create svg (avatar icon) element
const xmlnsAvatar = 'http://www.w3.org/2000/svg';
const boxWidthAvatar = '31';
const boxHeightAvatar = '30';

const avatar = document.createElementNS(xmlnsAvatar, "svg");
avatar.setAttributeNS(null, 'viewBox', '0 0 ' + boxWidthAvatar + ' ' + boxHeightAvatar);
avatar.setAttributeNS(null, "width", boxWidthAvatar);
avatar.setAttributeNS(null, "height", boxHeightAvatar);

const avatarPath = document.createElementNS(xmlnsAvatar, "path");
avatarPath.setAttributeNS(null, 'd', 'M5.81005 23.4375C7.38505 22.3375 8.94755 21.4937 10.4975 20.9062C12.0475 20.3188 13.71 20.025 15.485 20.025C17.26 20.025 18.9288 20.3188 20.4913 20.9062C22.0538 21.4937 23.6225 22.3375 25.1975 23.4375C26.2975 22.0875 27.0788 20.725 27.5413 19.35C28.0038 17.975 28.235 16.525 28.235 15C28.235 11.375 27.0163 8.34375 24.5788 5.90625C22.1413 3.46875 19.11 2.25 15.485 2.25C11.86 2.25 8.8288 3.46875 6.3913 5.90625C3.9538 8.34375 2.73505 11.375 2.73505 15C2.73505 16.525 2.97255 17.975 3.44755 19.35C3.92255 20.725 4.71005 22.0875 5.81005 23.4375ZM15.485 16.125C14.035 16.125 12.8163 15.6312 11.8288 14.6437C10.8413 13.6562 10.3475 12.4375 10.3475 10.9875C10.3475 9.5375 10.8413 8.31875 11.8288 7.33125C12.8163 6.34375 14.035 5.85 15.485 5.85C16.935 5.85 18.1538 6.34375 19.1413 7.33125C20.1288 8.31875 20.6225 9.5375 20.6225 10.9875C20.6225 12.4375 20.1288 13.6562 19.1413 14.6437C18.1538 15.6312 16.935 16.125 15.485 16.125ZM15.485 30C13.435 30 11.4975 29.6062 9.67255 28.8187C7.84755 28.0312 6.2538 26.9562 4.8913 25.5938C3.5288 24.2313 2.4538 22.6375 1.6663 20.8125C0.878796 18.9875 0.485046 17.05 0.485046 15C0.485046 12.925 0.878796 10.9813 1.6663 9.16875C2.4538 7.35625 3.5288 5.76875 4.8913 4.40625C6.2538 3.04375 7.84755 1.96875 9.67255 1.18125C11.4975 0.39375 13.435 0 15.485 0C17.56 0 19.5038 0.39375 21.3163 1.18125C23.1288 1.96875 24.7163 3.04375 26.0788 4.40625C27.4413 5.76875 28.5163 7.35625 29.3038 9.16875C30.0913 10.9813 30.485 12.925 30.485 15C30.485 17.05 30.0913 18.9875 29.3038 20.8125C28.5163 22.6375 27.4413 24.2313 26.0788 25.5938C24.7163 26.9562 23.1288 28.0312 21.3163 28.8187C19.5038 29.6062 17.56 30 15.485 30ZM15.485 27.75C16.86 27.75 18.2038 27.55 19.5163 27.15C20.8288 26.75 22.1225 26.05 23.3975 25.05C22.1225 24.15 20.8225 23.4625 19.4975 22.9875C18.1725 22.5125 16.835 22.275 15.485 22.275C14.135 22.275 12.7975 22.5125 11.4725 22.9875C10.1475 23.4625 8.84755 24.15 7.57255 25.05C8.84755 26.05 10.1413 26.75 11.4538 27.15C12.7663 27.55 14.11 27.75 15.485 27.75ZM15.485 13.875C16.335 13.875 17.0288 13.6062 17.5663 13.0687C18.1038 12.5312 18.3725 11.8375 18.3725 10.9875C18.3725 10.1375 18.1038 9.44375 17.5663 8.90625C17.0288 8.36875 16.335 8.1 15.485 8.1C14.635 8.1 13.9413 8.36875 13.4038 8.90625C12.8663 9.44375 12.5975 10.1375 12.5975 10.9875C12.5975 11.8375 12.8663 12.5312 13.4038 13.0687C13.9413 13.6062 14.635 13.875 15.485 13.875Z');
avatarPath.setAttributeNS(null, 'fill', '#30314B');

avatar.appendChild(avatarPath);

// ** create img element (photo profile)
const photoProfile = document.createElement('img');
photoProfile.setAttribute('src', 'resources/images/PP-Male.jpg')
photoProfile.setAttribute('alt', 'Photo Profile');
photoProfile.classList.add('photo-profile');

// ** create p element (fullname)
const fullname = document.createElement('p');
fullname.append("Mochammad Ivan Ra'is");
fullname.classList.add('fullname');

// **create svg element (expand more icon)
const xmlnsExpandMore = 'http://www.w3.org/2000/svg';
const boxWidthExpandMore = '24';
const boxHeightExpandMore = '15';

const expandMore = document.createElementNS(xmlnsExpandMore, 'svg');
expandMore.setAttributeNS(null, 'viewbox', `0 0 ${boxWidthExpandMore} ${boxHeightExpandMore}`);
expandMore.setAttributeNS(null, 'width', boxWidthExpandMore);
expandMore.setAttributeNS(null, 'height', boxHeightExpandMore);
expandMore.setAttribute('class', 'expand');

const expandMorePath = document.createElementNS(xmlnsExpandMore, 'path');
expandMorePath.setAttributeNS(null, 'd', 'M12 14.15L0 2.15L2.15 0L12 9.9L21.85 0.0499992L24 2.2L12 14.15Z');
expandMorePath.setAttributeNS(null, 'fill', '#30314B');

expandMore.appendChild(expandMorePath);

// **create svg element (expand less icon)
const xmlnsExpandLess = 'http://www.w3.org/2000/svg';
const boxWidthExpandLess = '24';
const boxHeightExpandLess = '15';

const expandLess = document.createElementNS(xmlnsExpandLess, 'svg');
expandLess.setAttributeNS(null, 'viewbox', `0 0 ${boxWidthExpandLess} ${boxHeightExpandLess}`);
expandLess.setAttributeNS(null, 'width', boxWidthExpandLess);
expandLess.setAttributeNS(null, 'height', boxHeightExpandLess);
expandLess.setAttribute('class', 'expand');

const expandLessPath = document.createElementNS(xmlnsExpandLess, 'path');
expandLessPath.setAttributeNS(null, 'd', 'M2.15 14.15L0 12L12 0L24 11.95L21.85 14.1L12 4.25L2.15 14.15Z');
expandLessPath.setAttributeNS(null, 'fill', '#30314B');

expandLess.appendChild(expandLessPath);

// **------------------------------------------------//

// ** Insert All Elements Inside The Header Element//

// ** --At min width 768px Viewport--
const minWidth768 = window.matchMedia('(min-width:768px)');

function addElements(widthViewport) {
    if (widthViewport.matches) {
        header.removeChild(document.querySelector('header>button'));
        header.insertAdjacentElement('afterbegin', h2);
        h2.style.marginBottom = '0px';
        loginBtn.insertAdjacentElement('beforebegin', myLearningLink);
        loginBtn.insertAdjacentElement('beforebegin', notificationLink);
        loginBtn.insertAdjacentElement('beforebegin', avatar);
    }
}

addElements(minWidth768); //** Call function at run time

// **------------------------------------------------//

// ** Already Login//
const alreadyLogin = document.querySelector('header>div');

function removeLoginButton(widthViewport) {
    if (widthViewport.matches) {
        loginBtn.remove();
        avatar.remove();
        alreadyLogin.appendChild(photoProfile);
        alreadyLogin.appendChild(fullname);
        alreadyLogin.appendChild(expandMore);
    } else {
        loginBtn.remove();
        alreadyLogin.appendChild(fullname);
        alreadyLogin.appendChild(photoProfile);
    }
}

// removeLoginButton(minWidth768);  //** Call function at run time
// ** -----------

// **Remove hr Elements Inside Lesson//

const hrs = document.querySelectorAll('.lesson>form>hr');

function removeHrs(widthViewport) {
    if (widthViewport.matches) {
        for (const hr of hrs) {
            hr.remove();
        }
    }
}

removeHrs(minWidth768); //** Call function at run time
// ** -----------

// ** Show The Menu Drop Down//
const menuDropDown = document.querySelector('#menu-drop-down');

expandMore.addEventListener('click', () => {
    expandMore.style.display = 'none';
    menuDropDown.style.display = 'flex';
    expandLess.style.display = 'block';
    alreadyLogin.insertAdjacentElement('beforeend', expandLess);
})

expandLess.addEventListener('click', () => {
    menuDropDown.style.display = 'none';
    expandLess.style.display = 'none';
    expandMore.style.display = 'block';
    alreadyLogin.insertAdjacentElement('beforeend', expandMore);
})

// ** -----------

// **upload an image interactively
const inputFile = document.querySelector('input[type="file"]');
const imgName = document.querySelector('.photo-profile-field>div>p');

function updateImageDisplay() {
    // **stores 'files' object in the file variable.
    const file = inputFile.files;

    // **check an user already to upload an image
    if (file.length === 1) {
        // **Change the content inside the p tag according the selected image
        imgName.innerText = file[0].name;
    }
}

inputFile.addEventListener('change', updateImageDisplay);
// **-----------------------------
