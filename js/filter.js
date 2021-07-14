import {createManyMarkers, removeManyMarkers} from './map.js';
import {returnOriginalState} from './form-status.js';

const COUNT_DATA_NOTICE = 10;
const VALUE_ANY = 'any';
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;
const mapFilters = document.querySelector('.map__filters');
const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');
const resetButton = document.querySelector('.ad-form__reset');

const filterType = (object) => {
  if (housingType.value === VALUE_ANY) {
    return true;
  } else if (housingType.value !== VALUE_ANY) {
    return  housingType.value === object.offer.type;
  } else {
    return false;
  }
};

const filterRooms = (object) => {
  if (housingRooms.value === VALUE_ANY) {
    return true;
  } else if (housingRooms.value !== VALUE_ANY) {
    return   Number(housingRooms.value) === object.offer.rooms;
  } else {
    return false;
  }
};

const filterGuests = (object) => {
  if (housingGuests.value === VALUE_ANY) {
    return true;
  } else if (housingGuests.value !== VALUE_ANY) {
    return  Number(housingGuests.value) === object.offer.guests;
  } else {
    return false;
  }
};

const filterPrice = (object) => {
  if (housingPrice.value === VALUE_ANY) {
    return true;
  } else if (housingPrice.value === 'low') {
    return (object.offer.price < MIN_PRICE);
  } else if (housingPrice.value === 'high') {
    return (object.offer.price > MAX_PRICE);
  } else if (housingPrice.value === 'middle') {
    return (object.offer.price >= MIN_PRICE && object.offer.price <= MAX_PRICE);
  } else {
    return false;
  }
};

const filterFeauters = (object) => {
  const checkedElements = housingFeatures.querySelectorAll('.map__checkbox:checked');
  if (checkedElements.length === 0) {
    return true;
  } else if (object.offer.features === undefined) {
    return false;
  }
  return [].every.call(checkedElements, (element) => object.offer.features.includes(element.value));
};


const filterNotice = (object) => {

  const resultfilterType = filterType(object);
  const resultfilterRooms =  filterRooms(object);
  const resultfilterGuests = filterGuests(object);
  const resultfilterPrice = filterPrice(object);
  const resultfilterFeauters = filterFeauters(object);

  return resultfilterType && resultfilterRooms && resultfilterGuests && resultfilterPrice && resultfilterFeauters;


};

const getFilterArrays = (objects) => {
  const filterArrays = [];

  for (let index = 0; index < objects.length; index++) {
    const activeObject = objects[index];

    if (filterNotice(activeObject)) {
      filterArrays.push(activeObject);
    }
  }
  return filterArrays.slice(0, COUNT_DATA_NOTICE);
};

const createFilterNotice = (objects) => {
  const filterObjects = getFilterArrays(objects);

  createManyMarkers(filterObjects);
};

const onMapFilters = (cb) => {
  mapFilters.addEventListener('change', () => {
    removeManyMarkers();
    cb();},
  );

};

const deleteFilters = () => {
  mapFilters.reset();
};


const onResetButtonFilter = (objects) => {
  resetButton.addEventListener('click', () => {
    deleteFilters(objects);
    removeManyMarkers();
    createManyMarkers(objects.slice(0, COUNT_DATA_NOTICE));
    returnOriginalState();
  });
};

export {createFilterNotice, deleteFilters, onMapFilters, onResetButtonFilter, COUNT_DATA_NOTICE};
