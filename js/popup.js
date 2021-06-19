import {rentalAnnouncements} from './data.js';

const similarListElement = document.querySelector('#map-canvas');
const similarCardTemlate = document.querySelector('#card').content.querySelector('.popup');
const ORIGINALS = ['flat', 'bungalow', 'house', 'palace', 'hotel'];
const TRANSLATES = ['Квартира', 'Бунгало', 'Дом', 'Дворец', 'Отель'];
const similarListFragment = document.createDocumentFragment();

const getTypeTranslate = (() => {
  for (let index = 0; index < ORIGINALS.length; index++) {
    if(ORIGINALS[index]) {
      return TRANSLATES[index];
    }
  }
});

const removeChildrens = ((parent) => {
  for (let index = parent.children.length - 1; index >= 0; index--) {
    parent.children[index].remove();
  }
});

rentalAnnouncements.forEach((card) => {
  const cardElement = similarCardTemlate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = card.offer.createOfferObject.title;
  cardElement.querySelector('.popup__text--address').textContent = card.offer.createOfferObject.address;
  cardElement.querySelector('.popup__text--price').textContent = `${card.offer.createOfferObject.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = getTypeTranslate(card.offer.createOfferObject.type);
  cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.createOfferObject.rooms} комнаты для ${card.offer.createOfferObject.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.createOfferObject.checkin} выезд до ${card.offer.createOfferObject.checkout}`;
  const features = cardElement.querySelector('.popup__features');
  const modifiers = card.offer.createOfferObject.features.map((feature) => `popup__feature--${feature}`);
  features.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
  if(card.offer.createOfferObject.description) {
    cardElement.querySelector('.popup__description').textContent = card.offer.createOfferObject.description;
  } else {
    cardElement.querySelector('.popup__description').remove();
  }
  const photos = cardElement.querySelector('.popup__photos');
  removeChildrens(photos);
  for (let index = 0; index < card.offer.createOfferObject.photos.length; index++) {
    const img = document.createElement('img');
    img.src = card.offer.createOfferObject.photos[index];
    img.classList.add('popup__photo');
    img.width = 45;
    img.height = 40;
    img.alt = 'Фотография жилья';
    photos.appendChild(img);
  }
  cardElement.querySelector('.popup__avatar').src = card.author.createAuthorObject.avatar;


  similarListFragment.appendChild(cardElement);

});

similarListElement.appendChild(similarListFragment);

