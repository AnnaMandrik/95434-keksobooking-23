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


const onTitleNoticeInputValid = () => {
  if (titleNoticeInput.validity.valueMissing) {
    titleNoticeInput.setCustomValidity('Обязательное текстовое  поле');
  } else {
    titleNoticeInput.setCustomValidity('');
  }

};

const onPriceNoticeInputValid = () => {
  if (priceNoticeInput.validity.valueMissing) {
    priceNoticeInput.setCustomValidity('Обязательное числовое  поле');
  } else {
    priceNoticeInput.setCustomValidity('');
  }

};

const onTitleNoticeInput = () => {
  const valueLength = titleNoticeInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleNoticeInput.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleNoticeInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleNoticeInput.setCustomValidity('');
  }
};


const onTypeOfResidence = () => {
  const minPrice = MIN_RESIDENCE_PRICE[typeOfResidence.value];
  priceNoticeInput.placeholder = minPrice;
  priceNoticeInput.min = minPrice;
};

const onPriceNoticeInput = () => {
  if (priceNoticeInput.value > NAX_PRICE) {
    priceNoticeInput.setCustomValidity(`Максимальная цена - ${NAX_PRICE} руб.`);
  } else {
    priceNoticeInput.setCustomValidity('');
  }
};


const onTimeInOut = (evt) => {
  const newValue = evt.target.value;
  timeIn.value = newValue;
  timeOut.value = newValue;
};


const onRoomBedNumberChange = () => {
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


const checkValidation = () => {
  titleNoticeInput.addEventListener('invalid', onTitleNoticeInputValid);
  priceNoticeInput.addEventListener('invalid', onPriceNoticeInputValid);
  titleNoticeInput.addEventListener('input', onTitleNoticeInput);
  typeOfResidence.addEventListener('change', onTypeOfResidence);
  priceNoticeInput.addEventListener('input', onPriceNoticeInput);
  timeIn.addEventListener('change', onTimeInOut);
  timeOut.addEventListener('change', onTimeInOut);
  roomNumber.addEventListener ('change', onRoomBedNumberChange);
  bedNumber.addEventListener ('change', onRoomBedNumberChange);
};


const priceNotice = () => {
  priceNoticeInput.min = MIN_RESIDENCE_PRICE.flat;
  priceNoticeInput.placeholder = MIN_RESIDENCE_PRICE.house;
};

export {checkValidation, priceNotice};
