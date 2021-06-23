export default function formValidityFunction () {

  const MIN_TITLE_LENGTH = 3;
  const MAX_TITLE_LENGTH = 10;

  const titleNoticeInput = document.querySelector('#title');
  const priceNoticeInput = document.querySelector('#price');
  const roomNumber = document.querySelector('#room_number');
  const bedNumber = document.querySelector('#capacity');

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
    titleNoticeInput.reportValidity();
  });


  priceNoticeInput.addEventListener('input', () => {
    if (priceNoticeInput.value > 1000000) {
      priceNoticeInput.setCustomValidity('Максимальная цена 1 000 000');
    } else {
      priceNoticeInput.setCustomValidity('');
    }
  });

  const bedNumberValidity = () => {
    if (roomNumber.value === 1) {
      bedNumber.setCustomValidity('Комната для 1 гостя');
    } else if (roomNumber.value === 2) {
      bedNumber.setCustomValidity('Комнаты для 1 или 2 гостей');
    } else if (roomNumber.value === 3) {
      bedNumber.setCustomValidity('Комнаты для 1 или 2 или 3 гостей');
    } else if (roomNumber.value === 100) {
      bedNumber.setCustomValidity('Комнаты  не для гостей');
    } else {
      bedNumber.setCustomValidity('');
    }
    bedNumber.reportValidity();
  };
  roomNumber.addEventListener('change', bedNumberValidity);
  bedNumber.addEventListener('change', bedNumberValidity);

}

