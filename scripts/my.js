'use strict';

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num) + 1;
}

const UI = {
    openModal(modalID) {
        document.getElementById(modalID).style.display = 'block';
    },
    closeModal(modalID) {
        document.getElementById(modalID).style.display = 'none';
    },
    showTopMessage() {
        document.getElementById('message-top').style.display = 'block';
         // remove message after 3 seconds
        setTimeout(() => {
            document.getElementById('message-top').style.display = 'none';
        }, 3000);
    },
    showMessage(messageID, txt, msg_style) {
        document.getElementById(messageID).textContent = txt;
        document.getElementById(messageID).classList.add(msg_style);
    },
    showWinnerModal() {
        document.getElementById('modal2').style.display = 'block';
    },
    showLoserModal() {
        document.getElementById('modal3').style.display = 'block';
    }
}

export { generateRandomNumber, UI };