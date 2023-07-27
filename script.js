'Use strict';

const content = document.querySelector('.content');
const card = document.querySelector('.card');
const button = document.querySelector('.button');
const button2 = document.querySelector('.button2');
const input = document.querySelector('.input');
const error = document.querySelector('.error');
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

button.addEventListener('click', function () {
  if (input.value === '') {
    error.textContent = 'Email Required!';
  } else if (!input.value.match(mailFormat)) {
    error.textContent = 'Valid Email Required!';
  } else {
    card.classList.toggle('hidden');
    content.classList.toggle('hidden');
  }
});

button2.addEventListener('click', function () {
  card.classList.toggle('hidden');
  content.classList.toggle('hidden');
  error.textContent = '';
  input.value = '';
});
