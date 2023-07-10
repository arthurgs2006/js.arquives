
function add(a, b){
  return a + b;
}

const operation = add //FUNÇÃO ANONIMA
let operation_example_wrong = add()//-> não é função anonima pois, esta variavel declarará o resultado da função e nao a propria função.
console.log(operation(4, 7));

//OUTRO EXEMPLO:
const operationnegative = function (a, b){ //Não é necessario criar um nome para a função, já que seu nome recebe o nome da váriavel e da o nome de função anonima
  return a - b;
}
console.log(operationnegative(4,7));
// É POSSIVEL ADEQUAR UMA FUNÇÃO EM DUAS TAREFAS:

let calc = operation(5,7);
console.log(calc);
calc = operationnegative(5,7);
console.log(calc);
//DICA::
//As funções executadas com o nome de função vem primeiro e poderão ser executadas no código inteiro, enquanto as anonimas,por serem variaveis, serão executadas depois...
