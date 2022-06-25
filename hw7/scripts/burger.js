'use strict';
const openMenuBtn = document.querySelector('.button-burger');
const mainMenuEl = document.querySelector('.main-menu');

openMenuBtn.addEventListener('click', function () {
mainMenuEl.classList.toggle('hidden');
});