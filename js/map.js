import {createCardElement} from './popup.js';

const LAT_TOKYO_CENTER = 35.6894;
const LNG_TOKYO_CENTER = 139.69224;
const address = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');
let map;

const createMap = (callback) => {
  map = L.map('map-canvas');
  map.on('load', callback);
  map.setView({
    lat: LAT_TOKYO_CENTER,
    lng: LNG_TOKYO_CENTER,
  }, 10);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};
let mainPinMarker;
const createMinPinIcon = () => {
  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  mainPinMarker = L.marker (
    {
      lat: 35.68945,
      lng: 139.69255,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    const addressPoint = evt.target.getLatLng();
    address.value = `${addressPoint.lat.toFixed(5)}, ${addressPoint.lng.toFixed(5)}`;
  });
};

const returnMainPinIcon = () => {
  resetButton.addEventListener('click', () => {
    mainPinMarker.setLatLng({
      lat: 35.68945,
      lng: 139.69255,
    },
    address.value = '',
    );
    map.setView({
      lat: 35.6894,
      lng: 139.69224,
    }, 10);},
  address.value = '',
  );
};

const createMarker = (object) => {
  const markerGroup = L.layerGroup().addTo(map);
  const lat = object.location.lat;
  const lng = object.location.lng;
  const pinIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const pinMarker = L.marker(
    {
      lat,
      lng,
    },
    { icon: pinIcon,
    },
  );
  pinMarker.addTo(markerGroup).bindPopup(createCardElement(object),
    {
      keepInView: true,
    });
};
const createManyMarkers = (objects) => {
  objects.forEach((object) => {
    createMarker(object);
  });
};

export {createMap, createMinPinIcon, returnMainPinIcon, createManyMarkers};
