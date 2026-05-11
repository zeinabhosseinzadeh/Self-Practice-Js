'use strict'

document.getElementById('submit-button').addEventListener('click', function () {
    const nameInput = document.getElementById('nameInput').value;

    if (nameInput) {
        const Name = nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase();
        document.getElementById('output').innerText = 'your name is: ' + Name;
    } else {
        document.getElementById('output').innerText = 'please enter your name!:';
    }
});