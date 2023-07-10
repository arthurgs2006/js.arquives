

function calculate(a, b, operation){
  console.log("Realizaremos uma função.");
  const result = operation(a, b);//a e b se repetem, porem poderia ser outro parâmetro...
  return result;
}

function add(x, y){
  console.log("Realizando uma soma...");
  return x + y;
}
// function minus(x ,y){
//   console.log("Subtraindo...");
//   return x - y;
// }
console.log(calculate(5, 6, add));
console.log(calculate(5, 6, function (x ,y){
  console.log("Subtraindo...");
  return x - y;
}));

//EXEMPLO:
function exElement(element, indice, array){
  console.log(
    element,
    indice,
    array
  );
};
const list = ["Apple", "Banana", "Manga", "Laranja", 'Limão'];
for (i = 0; i < list.length; i++){
  exElement(list[i], i, list);
}
// Todo esse exemplo é compactado para o método foreach.
list.forEach(exElement); //Exemplo de high order function convertida para método...
list.forEach(function (element, indice, array){
  console.log(
    element, 
    indicie,
    array
  );
});