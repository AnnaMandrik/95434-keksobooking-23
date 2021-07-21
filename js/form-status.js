import {returnMainPinIcon} from './map.js';
import {isEscEvent} from './util.js';
import {priceNotice} from './form.js';
import {resetAvatarPhotoPreview} from './avatar.js';

const ALERT_SHOW_TIME = 3000;
const formSubmit = document.querySelector('.ad-form');
const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorOfRequest = document.querySelector('#error-request').content.querySelector('.error').cloneNode(true);
const resetButton = document.querySelector('.ad-form__reset');

const hideSuccess = () => {
  successMessage.classList.add('hidden');
};

const keydownSuccessEscape = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideSuccess();
  }
};

const clickSuccess = () => {
  hideSuccess();
};

const closeSuccess = () => {
  document.removeEventListener('keydown', keydownSuccessEscape);
  document.removeEventListener('click', clickSuccess);
};

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', keydownSuccessEscape, closeSuccess);
  document.addEventListener('click', clickSuccess, closeSuccess);
};

const hideError = () => {
  errorMessage.classList.add('hidden');
};

const keydownErrorEscape = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideError();
  }
};

const clickError = () => {
  hideError();
};

const closeError = () => {
  document.removeEventListener('keydown', keydownErrorEscape);
  document.removeEventListener('click', clickError);
};

const showErrorMessage = () => {
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown', keydownErrorEscape, closeError);
  document.addEventListener('click', clickError, closeError);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    hideError();
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
  resetAvatarPhotoPreview();
};

const clickResetButton = () => {
  resetButton.addEventListener('click', () => {
    returnOriginalState();
  });
};

export {showSuccessMessage, showErrorMessage, returnOriginalState, showErrorOfRequest, clickResetButton};
