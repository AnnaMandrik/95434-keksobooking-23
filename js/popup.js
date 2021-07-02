
const ORIGINALS = ['flat', 'bungalow', 'house', 'palace', 'hotel'];
const TRANSLATES = ['Квартира', 'Бунгало', 'Дом', 'Дворец', 'Отель'];


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
    cardElement.querySelector('.popup__type').textContent = getTypeTranslate(object.offer.type);
  } else {
    cardElement.querySelector('.popup__type').remove();
  }
  if (object.offer.rooms || object.offer.guests) {
    cardElement.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`;
  } else {
    cardElement.querySelector('.popup__text--capacity').remove();
  }
  if (object.offer.checkin || object.offer.checkout) {
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${object.offer.checkin} выезд до ${object.offer.checkout}`;
  } else {
    cardElement.querySelector('.popup__text--time').remove();
  }
  const features = cardElement.querySelector('.popup__features');
  const modifiers = object.offer.features.map((feature) => `popup__feature--${feature}`);
  features.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
  if(object.offer.description) {
    cardElement.querySelector('.popup__description').textContent = object.offer.description;
  } else {
    cardElement.querySelector('.popup__description').remove();
  }
  const photos = cardElement.querySelector('.popup__photos');
  removeChildrens(photos);
  for (let index = 0; index < object.offer.photos.length; index++) {
    const img = document.createElement('img');
    img.src = object.offer.photos[index];
    img.classList.add('popup__photo');
    img.width = 45;
    img.height = 40;
    img.alt = 'Фотография жилья';
    photos.appendChild(img);
  }
  if (object.author.avatar) {
    cardElement.querySelector('.popup__avatar').src = object.author.avatar;
  } else {
    cardElement.querySelector('.popup__avatar').remove();
  }

  return cardElement;

};

export {createCardElement};

