/*https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D0%B5_%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE
функция взята из источника по ссылке сверху */

function getRandomIntInclusive (firstNumber, secondNumber) {
  firstNumber = Math.ceil(firstNumber);
  secondNumber = Math.floor(secondNumber);
  if (firstNumber >= 0 && secondNumber >= 0) {         //диапазон может быть только положительный, включая ноль
    return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  } else if (secondNumber <= firstNumber) {     //если передать значение «до» меньшее, чем значение «от», или равное ему
    return Math.floor(Math.random() * (firstNumber - secondNumber + 1)) + secondNumber;
  }
}
getRandomIntInclusive(2, 3);


function getRandomIntDrob (firstInteger, secondInteger, limitSigns) {

  if (secondInteger - firstInteger >= 0) {
    return  Number((Math.random() * (secondInteger - firstInteger) + firstInteger).toFixed(limitSigns));
  } else if (secondInteger <= firstInteger) {
    return Number((Math.random() * (firstInteger - secondInteger) + secondInteger).toFixed(limitSigns));
  }

}
getRandomIntDrob(1.1, 2, 2);


const shirota = getRandomIntDrob(35.65000, 35.70000, 5);
const dolgota = getRandomIntDrob(139.70000, 139.80000, 5);
const typeFlatArr = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkInOutArr = ['12:00', '13:00', '14:00'];
const featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosArr = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg' ];

function findElems(anyNamedArray, counter) {
  const newArray = [];
  for (let index = 0; index < counter; index++) {
    // находим случайное число
    const newElemIndex = getRandomIntInclusive(0, anyNamedArray.length - 1);
    // находим элемент по этому порядковому номеру
    const newElem = anyNamedArray[newElemIndex];

    // нужно сравнивнивать с самим собой
    let povtoryBykv = [];
    // заполняем массив всеми найденными повторами
    povtoryBykv = newArray.filter((item) => {
      if (item === newElem) {
        return item = newElem;
      }
    });
    // проверяем количество повторов (нет повторов это 0)

    const thisElemExist = povtoryBykv.length;
    // если повторов нет то добавляем элемент
    if (!thisElemExist) {
      newArray.push(newElem);
    }
  }
  return newArray;
}

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
  address: `{{location.${shirota}}}, {{location.${dolgota}}}`,
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
  lat: shirota,
  lng: dolgota,
});

const SIMILAR_ANNOUNCMENT_COUNT = 10;

const rentalAnnouncement =  ()=> ({
  author:  createAuthorObject(),
  offer: createOfferObject(),
  location: createLocationObject(),
});

const similarAnnouncment = new Array(SIMILAR_ANNOUNCMENT_COUNT).fill(null).map(() => rentalAnnouncement());

similarAnnouncment;
