//Forma tradicional:
function normalSum (a, b){
  return a + b;
}

console.log(`Soma normal ${normalSum(2, 2)}`)
//Outra forma:
const arrayFunction = function (a, b){
  return a + b;
}
console.log(`Soma anônima: ${arrayFunction(2,2)}`);

//forma da arrow (=>) function
const arrowFunction = (a,b) =>{
  return a+b
}
console.log(`Soma da ArrowFunction: ${arrowFunction(2, 2)}`);

// Forma da Arrow mas simplificada:

const arrow = (a, b) => a - b;
console.log(`A subtração resulta em ${arrow(5, 2)}`);

//Outra forma com Arrow Simplificado:
const double = n => `O dobro de ${n} é ${n*2}`;
console.log(double(5));

//Exemplo:

const towns = ['Rio de Janeiro', 'São Paulo', 'Salvador', 'Brasília', 'São José', 'Recife', 'Salinas'];
const startWithP = towns.filter(town => town[0] === 'P');
console.log(startWithP);