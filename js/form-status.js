import {returnMainPinIcon} from './map.js';
import {isEscEvent} from './util.js';
import {priceNotice} from './form.js';

const ALERT_SHOW_TIME = 5000;
const formSubmit = document.querySelector('.ad-form');
const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorOfRequest = document.querySelector('#error-request').content.querySelector('.error').cloneNode(true);
const resetButton = document.querySelector('.ad-form__reset');

const onSuccessEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccessMessege();
  }
};
const onSuccessClick = () => {
  closeSuccessMessege();
};

const closeSuccessMessege = () => {
  successMessage.classList.add('hidden');
  document.removeEventListener('keydown', onSuccessEscKeydown);
  document.removeEventListener('click', onSuccessClick);
};
const showSuccessMessage = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', onSuccessEscKeydown);
  document.addEventListener('click', onSuccessClick);
};


const onErrorEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeErrorMessege();
  }
};
const onErrorClick = () => {
  closeErrorMessege();
};

const showErrorMessage = () => {
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown', onErrorEscKeydown);
  document.addEventListener('click', onErrorClick);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    errorMessage.classList.add('hidden');
  });
};
const closeErrorMessege = () => {
  errorMessage.classList.add('hidden');
  document.removeEventListener('keydown', onErrorEscKeydown);
  document.removeEventListener('click', onErrorClick);
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
