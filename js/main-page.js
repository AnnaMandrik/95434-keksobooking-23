const adForm = document.querySelector('.ad-form');
const fieldsetArr = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapSelects = mapFilters.querySelectorAll('select');
const mapFieldset = mapFilters.querySelector('fieldset');

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

export {disableForm, enableForm};
