import {createCardElement} from './popup.js';

const LAT_TOKYO_CENTER = (35.680174645).toFixed(5);
const LNG_TOKYO_CENTER = (139.7539934567).toFixed(5);
const address = document.querySelector('#address');
let map;

const createMap = (cb) => {
  map = L.map('map-canvas');
  map.on('load', cb);
  map.setView({
    lat: LAT_TOKYO_CENTER,
    lng: LNG_TOKYO_CENTER,
  }, 12);
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
      lat: LAT_TOKYO_CENTER,
      lng: LNG_TOKYO_CENTER,
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
  mainPinMarker.setLatLng({
    lat: LAT_TOKYO_CENTER,
    lng: LNG_TOKYO_CENTER,
  },
  address.value = '',
  );
  map.setView({
    lat: LAT_TOKYO_CENTER,
    lng: LNG_TOKYO_CENTER,
  }, 12);
};

const markerGroup = L.layerGroup();
const createMarkers = (object) => {
  markerGroup.addTo(map);
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
    });
  pinMarker.addTo(markerGroup).
    bindPopup(() => createCardElement(object),
      {
        keepInView: true,
      });
};

const createManyMarkers = (objects) => {
  objects.forEach((object) => {
    createMarkers(object);
  });
};

const removeManyMarkers = () => {
  markerGroup.clearLayers();
};

export {createMap, createMinPinIcon, returnMainPinIcon, createManyMarkers, removeManyMarkers};

