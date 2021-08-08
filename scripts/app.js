'use strict';

import { generateRandomNumber, UI } from './my.js';

const myForm = document.getElementById('my-form');
const numberInput = document.getElementById('number-input');
const modalBtn = document.querySelector('.modal-btn');
const closeModalIcon = document.querySelector('.close');
const attemptsTxt = document.querySelector('.attempt-txt');
const playAgainBtns = document.querySelectorAll('.play-again');

let attempts = 15;

function checkAttempts() {
    if (attempts < 1) {
        UI.showLoserModal();
        attempts = 0;
        attemptsTxt.innerHTML = `Attempts remaining: ${attempts}`;
    }
}

myForm.addEventListener('submit', e => {
    e.preventDefault();

    const randomNum = generateRandomNumber(10);

    const numberInputValue = parseFloat(numberInput.value);

    if (isNaN(numberInputValue)) {
        UI.showTopMessage();
    } else if (numberInputValue < randomNum) {
        UI.showMessage('message', 'You were below the number', 'error-message');
        document.getElementById('message').style.display = 'block';
    } else if (numberInputValue > randomNum) {
        UI.showMessage('message', 'You were above the number', 'error-message');
        document.getElementById('message').style.display = 'block';
    } else if (numberInputValue === randomNum) {
        UI.showWinnerModal();
        document.getElementById('final-message').innerHTML = `You guessed it! Secret number was ${randomNum}`;
    }

    // check attempts
    if (numberInputValue !== randomNum) {
        attempts--;
        attemptsTxt.innerHTML = `Attempts remaining: ${attempts}`;
    }

    checkAttempts();

});

// document.addEventListener('DOMContentLoaded', () => {
//     UI.openModal('modal1');
// });

// open rules modal
modalBtn.addEventListener('click', () => {
    UI.openModal('modal1');
});

// close modal
closeModalIcon.addEventListener('click', () => {
    UI.closeModal('modal1');
});

document.addEventListener('keydown', e => {
    const key = e.key;
    if (key === 'Escape' && document.querySelector('.modal').style.display === 'block') {
        UI.closeModal('modal1');
    }
});

// Restart game
playAgainBtns.forEach(btn => {
    btn.onclick = function() {
        location.reload();
        return false;
    }
});