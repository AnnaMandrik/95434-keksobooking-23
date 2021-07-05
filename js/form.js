import {returnMainPinIcon} from './map.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const NAX_PRICE = 1000000;
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
const formSubmit = document.querySelector('.ad-form');
const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorButton = document.querySelector('.error__button');
const resetButton = document.querySelector('.ad-form__reset');

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
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
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      errorMessage.classList.add('hidden');
    }
  });
  document.addEventListener('click', () => {
    errorMessage.classList.add('hidden');
  });
  document.addEventListener('click', () => {
    errorButton.classList.add('hidden');
  });
};
showErrorMessage();

const returnOriginalState = () => {
  formSubmit.reset();
  returnMainPinIcon();
  priceNoticeInput.min = MIN_RESIDENCE_PRICE.flat;
  priceNoticeInput.placeholder = MIN_RESIDENCE_PRICE.flat;
};

const reportSuccess = () => {
  showSuccessMessage();
  returnOriginalState();
};
reportSuccess();

resetButton.addEventListener('click', () => {
  returnOriginalState();
});


titleNoticeInput.addEventListener('invalid', () => {
  if (titleNoticeInput.validity.valueMissing) {
    titleNoticeInput.setCustomValidity('Обязательное текстовое  поле');
  } else {
    titleNoticeInput.setCustomValidity('');
  }

});

priceNoticeInput.addEventListener('invalid', () => {
  if (priceNoticeInput.validity.valueMissing) {
    priceNoticeInput.setCustomValidity('Обязательное числовое  поле');
  } else {
    priceNoticeInput.setCustomValidity('');
  }

});

titleNoticeInput.addEventListener('input', () => {
  const valueLength = titleNoticeInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleNoticeInput.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleNoticeInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleNoticeInput.setCustomValidity('');
  }
});


typeOfResidence.addEventListener('change', () => {
  const minPrice = MIN_RESIDENCE_PRICE[typeOfResidence.value];
  priceNoticeInput.placeholder = minPrice;
  priceNoticeInput.min = minPrice;
});

priceNoticeInput.addEventListener('input', () => {
  if (priceNoticeInput.value > NAX_PRICE) {
    priceNoticeInput.setCustomValidity(`Максимальная цена - ${NAX_PRICE} руб.`);
  } else {
    priceNoticeInput.setCustomValidity('');
  }
});


const timeInOut = (evt) => {
  const newValue = evt.target.value;
  timeIn.value = newValue;
  timeOut.value = newValue;
};

timeIn.addEventListener('change', timeInOut);
timeOut.addEventListener('change', timeInOut);

const getRoomBedNumber = () => {
  const bedValue = bedNumber.value;
  const roomValue = roomNumber.value;

  if ( roomValue !== '100' && (bedValue > roomValue || bedValue === '0')) {
    bedNumber.setCustomValidity(`Доступны комнаты для не менее 1 и не более ${roomValue} гостей`);
  } else if (roomValue === '100' && bedValue !== '0') {
    bedNumber.setCustomValidity('Эти комнаты  не для гостей');
  } else {
    bedNumber.setCustomValidity('');
  }
  bedNumber.reportValidity();
};

roomNumber.addEventListener ('change', getRoomBedNumber);
bedNumber.addEventListener ('change', getRoomBedNumber);
