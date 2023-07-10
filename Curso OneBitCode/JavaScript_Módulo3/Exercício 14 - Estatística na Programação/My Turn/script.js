
const average = (...numbers) => {
  return numbers.reduce((accum, num) => (accum + num)/numbers.length, 0);
}

const weightedAverage = (...entries) => {
  const sum = entries.reduce((accum, {number, weight}) => (accum + number) * weight, 0);
  const weight = entries.reduce((accum, entry) => accum + entry.weight, 0);
  return sum/weight;
}

const median = (...numbers) => {
  if(numbers % 2 == 1){
    return numbers[Math.round(numbers.length/2)-1]
  } else{
    const m = numbers[Math.round(numbers.length/2)]
    return `${numbers[m-1]}, ${numbers[m]}, ou seja, ${average(numbers[m-1], numbers[m])}`;
  }
}

const mode = (...numbers) => {
  const quant = numbers.map([ num, numbers.filter((n) => num === n).length])
  quant.sort((a,b) => b[1] - a[1])
  return quant[0][0];
}

console.log(`Média: ${average(5, 4, 2, 1, 3, 4, 9)}
\nMédia Ponderada: ${weightedAverage(4, 4,2, 1,23,4,5,5,5,3,2)}\n
Mediana: ${median({number: 10, weight: 50}, {number: 60, weight: 10})}\n
Moda: ${mode(6,6,5,4,1,1,1,2,3,4,5,6,4,2,1,23,3,2)}`);
