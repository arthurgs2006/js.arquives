"use strict";

// Media Convencional:
var avarage = function avarage() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  return numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0) / numbers.length;
};
console.log(avarage(10, 10, 10, 10));

//Media Aritmética Ponderada

var weightedAvarage = function weightedAvarage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * weight;
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    return accum + entry.weight;
  }, 0);
  return sum / weightSum;
};
console.log(weightedAvarage({
  number: 10,
  weight: 50
}, {
  number: 60,
  weight: 10
}));

//Mediana:
var medianAvarage = function medianAvarage() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  if (numbers.length % 2 == 1) {
    // console.log(Math.round(numbers.length / 2))
    return numbers[Math.round(numbers.length / 2) - 1];
  } else {
    var m = Math.round(numbers.length / 2);
    // console.log(numbers.length/2)
    return "".concat(numbers[m - 1], ", ").concat(numbers[m], ", ou seja, ").concat(avarage(numbers[m - 1], numbers[m]));
  }
};
console.log(medianAvarage(9, 4, 3, 7, 6, 2, 1));
console.log(medianAvarage(5, 8, 9, 10, 4, 2));

// Moda:

var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [
    // map -> para cada elemento de numbers
    num, numbers.filter(function (n) {
      return num === n;
    }).length // filter -> reconhecer quando o numero inserido foi igual a qnt de numero escolhido
    ];
  }); // [numero inserido, qnt de vezes que o numero foi repetido] ... 
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  }); // organizar todos os elementos em ordem decrescente, sendo que o elemento maior fica em primeiro na ordem
  return quantities[0][0]; // Coletar o primeiro elemento do array, com o número maior de vezes aparecendo no array
};

console.log(mode(6, 6, 6, 6, 4, 4, 3, 2, 1, 1, 24, 5, 4, 4, 0));
