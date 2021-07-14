import {returnMainPinIcon} from './map.js';
import {isEscEvent} from './util.js';
import {priceNotice} from './form.js';

const ALERT_SHOW_TIME = 5000;
const formSubmit = document.querySelector('.ad-form');
const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorOfRequest = document.querySelector('#error-request').content.querySelector('.error').cloneNode(true);
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
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    errorMessage.classList.add('hidden');
  });
};
const showErrorOfRequest = () => {
  document.body.appendChild(errorOfRequest);
  setTimeout(() => {
    errorOfRequest.remove();
  }, ALERT_SHOW_TIME);

};

const returnOriginalState = () => {
  formSubmit.reset();
  returnMainPinIcon();
  priceNotice();
};

const onResetButton = () => {
  resetButton.addEventListener('click', () => {
    returnOriginalState();
  });
};


export {showSuccessMessage, showErrorMessage, returnOriginalState, showErrorOfRequest, onResetButton};
