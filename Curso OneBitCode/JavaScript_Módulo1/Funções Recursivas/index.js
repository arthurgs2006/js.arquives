//Função que chama ela mesma para realizar uma ação

function divide(num){
  console.log(num);
  if(num % 2 == 0){
    divide(num / 2);
  } else{
    return num
  }
}
// divisor num inteiro 
divide(40)

function double(num){
  console.log(num);
  double(num * 2);
}
// double(1)

function fatorial(num){
  console.log(`Número: ${num}`);
  if(num === 0 || num === 1){
    return 1
  } else {
    console.log(num + " * !" + (num-1));
    return num * fatorial(num - 1);
  }  
}
fatorial(5);