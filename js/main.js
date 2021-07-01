import './form.js';
import {rentalAnnouncements} from './data.js';
import {createMap, createMinPinIcon, createManyMarkers} from'./map.js';
import {disableForm, enableForm} from './main-page.js';

const COUNT_ELEMENTS = 5;
const objects = rentalAnnouncements(COUNT_ELEMENTS);

disableForm();
createMap(() => {
  enableForm();
  createMinPinIcon();
  createManyMarkers(objects);
});


