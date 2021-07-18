import {removeChildrens} from './util.js';

const TYPE_NAME = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  hotel: 'Отель',
  palace: 'Дворец',
};
const PHOTO_WIDTH = 45;
const PHOTO_HEIGHT = 40;

const createCardElement = (object) => {
  const similarCardTemlate = document.querySelector('#card').content.querySelector('.popup');
  const cardElement = similarCardTemlate.cloneNode(true);
  if (object.offer.title) {
    cardElement.querySelector('.popup__title').textContent = object.offer.title;
  } else {
    cardElement.querySelector('.popup__title').remove();
  }
  if (object.offer.address) {
    cardElement.querySelector('.popup__text--address').textContent = object.offer.address;
  } else {
    cardElement.querySelector('.popup__text--address').remove();
  }
  if(object.offer.price) {
    cardElement.querySelector('.popup__text--price').textContent = `${object.offer.price} ₽/ночь`;
  } else {
    cardElement.querySelector('.popup__text--price').remove();
  }
  if (object.offer.type) {
    cardElement.querySelector('.popup__type').textContent = TYPE_NAME[object.offer.type];
  } else {
    cardElement.querySelector('.popup__type').remove();
  }
  if (object.offer.rooms || object.offer.guests) {
    cardElement.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`;
  } else {
    cardElement.querySelector('.popup__text--capacity').remove();
  }
  if (object.offer.checkin || object.offer.checkout) {
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}`;
  } else {
    cardElement.querySelector('.popup__text--time').remove();
  }
  const featuresElements = object.offer.features;
  const featureElement = cardElement.querySelector('.popup__features');
  removeChildrens(featureElement);
  if (featuresElements) {
    featuresElements.forEach((item) => {
      const liElement = document.createElement('li');
      liElement.classList.add('popup__feature');
      liElement.classList.add(`popup__feature--${item}`);
      featureElement.appendChild(liElement);
    });
  }
  if(object.offer.description) {
    cardElement.querySelector('.popup__description').textContent = object.offer.description;
  } else {
    cardElement.querySelector('.popup__description').remove();
  }
  const photosElements = object.offer.photos;
  const photoElement = cardElement.querySelector('.popup__photos');
  removeChildrens(photoElement);
  if (photosElements){
    photosElements.forEach((item) => {
      const img = document.createElement('img');
      img.src = item;
      img.classList.add('popup__photo');
      img.width = PHOTO_WIDTH;
      img.height = PHOTO_HEIGHT;
      img.alt = 'Фотография жилья';
      photoElement.appendChild(img);
    });
  }
  if (object.author.avatar) {
    cardElement.querySelector('.popup__avatar').src = object.author.avatar;
  } else {
    cardElement.querySelector('.popup__avatar').remove();
  }
  return cardElement;
};

export {createCardElement};

