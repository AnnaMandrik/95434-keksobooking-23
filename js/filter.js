import {createManyMarkers} from './map.js';
import {removeManyMarkers} from './map.js';


const VALUE_ANY = 'any';
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;
const mapFilters = document.querySelector('.map__filters');
const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');

const filterType = (object) => {
  housingType.value === VALUE_ANY || (object.offer.type === housingType.value);
};

const filterRooms = (object) => {
  housingRooms.value === VALUE_ANY || (object.offer.rooms === housingRooms.value);
};

const filterGuests = (object) => {
  housingGuests.value === VALUE_ANY || (object.offer.guests === housingGuests.value);
};

const filterPrice = (object) => {
  if (housingPrice.value === VALUE_ANY) {
    return true;
  } else if (housingPrice.value === 'low') {
    return (object.offer.price < MIN_PRICE);
  } else if (housingPrice === 'high') {
    return (object.offer.price > MAX_PRICE);
  } else if (housingPrice.value === 'middle') {
    return (object.offer.price > MIN_PRICE && object.offer.price < MAX_PRICE);
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


const filterNotice = (object) => filterType(object) &&
  filterRooms(object) &&
  filterGuests(object) &&
  filterPrice(object) &&
  filterFeauters(object);

const getFilterArrays = (objects) => {
  const filterArrays = [];
  for (let index = 0; index < objects.length; index ++) {
    const indexOfArr = objects[index];
    if (filterNotice(indexOfArr)) {
      filterArrays.push(indexOfArr);
    }
    if (filterArrays === 10) {
      break;
    }
    return filterArrays;
  }
};

const createFilterNotice = (objects) => {
  const filterObjects = getFilterArrays(objects);
  createManyMarkers(filterObjects);
};

const onMapFilters = (cb) => {
  mapFilters.addEventListener('change', () => cb());
  removeManyMarkers();
};

const deleteFilters = () => {
  mapFilters.reset();
};

export {createFilterNotice, onMapFilters, deleteFilters};
