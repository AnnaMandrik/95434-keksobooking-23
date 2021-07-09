import {returnMainPinIcon} from './map.js';
import {isEscEvent} from './util.js';
import {priceNotice} from './form.js';


const formSubmit = document.querySelector('.ad-form');
const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const resetButton = document.querySelector('.ad-form__reset');

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      successMessage.classList.add('hidden');
    }
  });
  document.addEventListener('click', () => {
    successMessage.classList.add('hidden');
  });
};


const showErrorMessage = () => {
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      errorMessage.classList.add('hidden');
    }
  });
  document.addEventListener('click', () => {
    errorMessage.classList.add('hidden');
  });
};

const returnOriginalState = () => {
  formSubmit.reset();
  returnMainPinIcon();
  priceNotice();
};

const reportSuccess = () => {
  showSuccessMessage();
  returnOriginalState();
};

const onResetButton = () => {
  resetButton.addEventListener('click', () => {
    returnOriginalState();
  });
};

export {showErrorMessage, onResetButton, reportSuccess};
