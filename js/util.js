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

const exampleArr = ['one', 'two', 'three'];
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
findElems(exampleArr, 13);

export {getRandomIntInclusive, getRandomIntDrob, findElems};
