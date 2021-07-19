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

const onSuccessHidden = () => {
  successMessage.classList.add('hidden');
};

const onSuccessEscapeKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onSuccessHidden();
  }
};

const onSuccessClick = () => {
  onSuccessHidden();
};

const closeSuccess = () => {
  document.removeEventListener('keydown', onSuccessEscapeKeydown);
  document.removeEventListener('click', onSuccessClick);
};

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', onSuccessEscapeKeydown, closeSuccess);
  document.addEventListener('click', onSuccessClick, closeSuccess);
};

const onErrorHidden = () => {
  errorMessage.classList.add('hidden');
};

const onErrorEscapeKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onErrorHidden();
  }
};

const onErrorClick = () => {
  onErrorHidden();
};

const closeError = () => {
  document.removeEventListener('keydown', onErrorEscapeKeydown);
  document.removeEventListener('click', onErrorClick);
};

const showErrorMessage = () => {
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown', onErrorEscapeKeydown, closeError);
  document.addEventListener('click', onErrorClick, closeError);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    onErrorHidden();
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

const onResetButton = () => {
  resetButton.addEventListener('click', () => {
    returnOriginalState();
  });
};

export {showSuccessMessage, showErrorMessage, returnOriginalState, showErrorOfRequest, onResetButton};
