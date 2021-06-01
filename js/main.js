/*https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D0%B5_%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE
функция взята из источника по ссылке сверху */

function getRandomIntInclusive (a, b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  if (a >= 0 && b >= 0) {         //диапазон может быть только положительный, включая ноль
   return Math.floor(Math.random() * (b - a + 1)) + a;
  } else if (b <= a) {     //если передать значение «до» меньшее, чем значение «от», или равное ему
     return Math.floor(Math.random() * (a - b + 1)) + b;
  }
 }
 getRandomIntInclusive(2, 3);


 function getRandomIntDrob (a, b) {

  if (a >= 0 && b >= 0) {

  return  Math.random() * (b - a) + a
 } else if (b <= a) {
    return Math.random() * (a - b) + b;
 }

}
getRandomIntDrob(1.155648948,55);
