
function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
  //Somar todos os numeros dentro de um array
  //rest parameters sempre como parametro final da function
}

console.log(sum(1, 1));
console.log(sum(1, 1, 2, 2, 2, 2, 2, 2, 2, 2 , 2, 2));
