const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const adForm = document.querySelector('.ad-form');
const fieldsetArr = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapSelects = mapFilters.querySelectorAll('select');
const mapFieldset = mapFilters.querySelector('fieldset');

const titleNoticeInput = document.querySelector('#title');
const priceNoticeInput = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const bedNumber = document.querySelector('#capacity');

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  for (let index = 0; index <fieldsetArr.length; index++) {
    fieldsetArr[index].setAttribute('disabled', 'disabled');
  }
  mapFilters.classList.add('map__filters--disabled');
  for (let index= 0; index < mapSelects.length; index++) {
    mapSelects[index].setAttribute('disabled', 'disabled');
  }
  mapFieldset.setAttribute('disabled', 'disabled');
};

const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  for (let index = 0; index <fieldsetArr.length; index++) {
    fieldsetArr[index].removeAttribute('disabled');
  }
  mapFilters.classList.remove('map__filters--disabled');
  for (let index = 0; index < mapSelects.length; index++) {
    mapSelects[index].removeAttribute('disabled');
  }
  mapFieldset.removeAttribute('disabled');
};

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


priceNoticeInput.addEventListener('input', () => {
  if (priceNoticeInput.value > 1000000) {
    priceNoticeInput.setCustomValidity('Максимальная цена 1 000 000');
  } else {
    priceNoticeInput.setCustomValidity('');
  }

});
const getRoomBedNumber = () => {
  if (roomNumber.value === '1') {
    bedNumber.setCustomValidity('Выберите комнату для 1 гостя');
    bedNumber.reportValidity();
  } else if (roomNumber.value === '2') {
    bedNumber.setCustomValidity('Выберите комнаты для 1 или 2 гостей');
    bedNumber.reportValidity();
  } else if (roomNumber.value === '3') {
    bedNumber.setCustomValidity('Выберите комнаты для 1 или 2 или 3 гостей');
    bedNumber.reportValidity();
  } else if (roomNumber.value === '100') {
    bedNumber.setCustomValidity('Эти комнаты  не для гостей');
    bedNumber.reportValidity();
  } else {
    bedNumber.setCustomValidity('');
  }
};
roomNumber.addEventListener ('change', getRoomBedNumber);
bedNumber.addEventListener ('change', getRoomBedNumber);

disableForm();
enableForm();

