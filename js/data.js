import {getRandomIntInclusive, getRandomIntDrob, findElems} from './util.js';


const typeFlatArr = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkInOutArr = ['12:00', '13:00', '14:00'];
const featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosArr = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg' ];

const createAuthorObject = () => {
  let numberOfUser = getRandomIntInclusive(1, 8);
  numberOfUser++;
  return {
    // eslint-disable-next-line no-useless-concat
    avatar: `img/avatars/user 0${  numberOfUser }.png`,
  };
};


const createOfferObject = () => ({
  title: 'Сдается жильё!',
  address: `{{location.${location.shirota}}}, {{location.${location.dolgota}}}`,
  price: getRandomIntInclusive(1000, 5000) ,
  type: typeFlatArr[getRandomIntInclusive(0, typeFlatArr.length-1)],
  rooms: getRandomIntInclusive(1, 5),
  guests: getRandomIntInclusive(1, 20),
  checkin: checkInOutArr[getRandomIntInclusive(0, checkInOutArr.length-1)],
  checkout: checkInOutArr[getRandomIntInclusive(0, checkInOutArr.length-1)],
  features: findElems(featuresArr, featuresArr.length -1),
  description: 'Уютная квартира, со всеми удобствами в центре города. Достопримечательности и магазины в пешей доступности. До метро 10 мин. пешком',
  photos: findElems(photosArr,photosArr.length-1 ),
});

const createLocationObject = () => ({
  lat: getRandomIntDrob(35.31513, 36.26421, 5),
  lng: getRandomIntDrob(139.31213, 140.01251, 5),
});

const rentalAnnouncement =  () => {
  const location = createLocationObject();
  return {
    author:  createAuthorObject(),
    offer: createOfferObject(),
    location: location,
  };
};


const rentalAnnouncements = (COUNT_ELEMENTS) => {
  const newArr = new Array(COUNT_ELEMENTS).fill(null).map(() => rentalAnnouncement());
  return newArr;
};
export {rentalAnnouncements};
