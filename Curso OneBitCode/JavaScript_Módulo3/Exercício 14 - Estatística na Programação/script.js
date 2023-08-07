// Media Convencional:
const avarage = (...numbers) => {
  return numbers.reduce((accum, num) => accum + num, 0)/numbers.length; 
}
console.log(avarage(10, 10, 10, 10));

//Media Aritmética Ponderada

const weightedAvarage = (...entries) => {
  const sum = entries.reduce((accum, {number, weight}) => (accum + number * weight), 0);
  const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0);
  return sum / weightSum;
}
console.log(weightedAvarage({number: 10, weight: 50}, {number: 60, weight: 10}));

//Mediana:
const medianAvarage = (...numbers) => {
  if (numbers.length % 2 == 1){
    // console.log(Math.round(numbers.length / 2))
    return numbers[(Math.round(numbers.length / 2))-1];
  } else {
    const m = Math.round(numbers.length/2)
    // console.log(numbers.length/2)
    return `${numbers[m-1]}, ${numbers[m]}, ou seja, ${avarage(numbers[m-1], numbers[m])}`;
  }
}
console.log(medianAvarage(9 , 4, 3, 7, 6, 2, 1));
console.log(medianAvarage(5, 8, 9, 10, 4, 2));

// Moda:

const mode = (...numbers) => {
  const quantities = numbers.map(num => [ // map -> para cada elemento de numbers
      num,
      numbers.filter(n => num === n).length // filter -> reconhecer quando o numero inserido foi igual a qnt de numero escolhido
    ])// [numero inserido, qnt de vezes que o numero foi repetido] ... 
    quantities.sort((a, b) => b[1] - a[1]);// organizar todos os elementos em ordem decrescente, sendo que o elemento maior fica em primeiro na ordem
    return quantities[0][0] // Coletar o primeiro elemento do array, com o número maior de vezes aparecendo no array
}

console.log(mode(6,6,6,6,4,4,3,2,1,1,24,5,4,4,0))


