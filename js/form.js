import {setRedBorderError} from './util.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const NAX_PRICE = 1000000;
const TIME_SET = 3000;
const MIN_RESIDENCE_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const titleNoticeInput = document.querySelector('#title');
const priceNoticeInput = document.querySelector('#price');
const typeOfResidence = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const roomNumber = document.querySelector('#room_number');
const bedNumber = document.querySelector('#capacity');
const formNotice = document.querySelector('.ad-form');


const checkTitleNoticeInput = () => {
  if (titleNoticeInput.validity.valueMissing) {
    titleNoticeInput.setCustomValidity('Обязательное текстовое  поле');
  } else {
    titleNoticeInput.setCustomValidity('');
  }
};

const checkPriceNoticeInput = () => {
  if (priceNoticeInput.validity.valueMissing) {
    priceNoticeInput.setCustomValidity('Обязательное числовое  поле');
  } else {
    priceNoticeInput.setCustomValidity('');
  }
};

const checkTitleNotice = () => {
  const valueLength = titleNoticeInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleNoticeInput.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleNoticeInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleNoticeInput.setCustomValidity('');
  }
  titleNoticeInput.reportValidity();
};

const changeTypeOfResidence = () => {
  const minPrice = MIN_RESIDENCE_PRICE[typeOfResidence.value];
  priceNoticeInput.placeholder = minPrice;
  priceNoticeInput.min = minPrice;
};

const checkPriceNotice = () => {
  if (priceNoticeInput.value > NAX_PRICE) {
    priceNoticeInput.setCustomValidity(`Максимальная цена - ${NAX_PRICE} руб.`);
  } else {
    priceNoticeInput.setCustomValidity('');
  }
};

const changeTimeInOut = (evt) => {
  const newValue = evt.target.value;
  timeIn.value = newValue;
  timeOut.value = newValue;
};

const changeRoomBedNumber = () => {
  let textMessage = '';
  const bedValue = bedNumber.value;
  const roomValue = roomNumber.value;
  if ( roomValue !== '100' && (bedValue > roomValue || bedValue === '0')) {
    textMessage =`Доступны комнаты для не менее 1 и не более ${roomValue} гостей`;
  } else if (roomValue === '100' && bedValue !== '0') {
    textMessage = 'Эти комнаты  не для гостей';
  }
  bedNumber.setCustomValidity(textMessage);
  bedNumber.reportValidity();
  return !textMessage;
};

formNotice.addEventListener('invalid', (evt) => {
  setRedBorderError(evt.target, true);
  setTimeout(() => {setRedBorderError(evt.target, false);
  }, TIME_SET);
}, true);

const checkValidation = () => {
  titleNoticeInput.addEventListener('invalid', checkTitleNoticeInput);
  priceNoticeInput.addEventListener('invalid', checkPriceNoticeInput);
  titleNoticeInput.addEventListener('input', checkTitleNotice);
  typeOfResidence.addEventListener('change', changeTypeOfResidence);
  priceNoticeInput.addEventListener('input', checkPriceNotice);
  timeIn.addEventListener('change', changeTimeInOut);
  timeOut.addEventListener('change', changeTimeInOut);
  roomNumber.addEventListener ('change', changeRoomBedNumber);
  bedNumber.addEventListener ('change', changeRoomBedNumber);
};

const priceNotice = () => {
  priceNoticeInput.min = MIN_RESIDENCE_PRICE.flat;
  priceNoticeInput.placeholder = MIN_RESIDENCE_PRICE.flat;
};

export {checkValidation, priceNotice};
