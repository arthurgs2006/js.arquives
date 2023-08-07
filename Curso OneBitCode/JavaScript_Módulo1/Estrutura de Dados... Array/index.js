
const shopList = ["Açúcar", false];
alert(shopList);//Insira diversos tipos de valores dentro de um array...
shopList[0] = "Arroz";
shopList[1] = "Feijão";
shopList[2] = 7
shopList[5] = "Batata"//Não gera erro, mesmo sem estar na sequência
alert(shopList);
alert(shopList[10])

//Adicione o nome do elemento e um ".", para descobrir as funções disponíveis.
//Formas de add elementos ao array
//Push (Add) -> add no final
const arr = ["Arthur", "Gabriel", "Amanda", "Ana Laura", "Marcelo"];
alert(arr);
arr.push("Sara");
alert(arr);

//unshift -> add no início
arr.unshift("Davi");
alert(arr);

// pop -> remover elemento do final
arr.pop();
alert(arr);

// shift -> remover elemento no inicio
arr.shift();
alert(arr);


//Formas de pesquisar elemento:

// includes() -> analisa se há ou não a presença deste elemento
const inclui = arr.includes("Arthur");
alert(inclui);

//indexOf ->Encontra o nº do indicie do elemento
const indexOf = arr.indexOf("Arthur");
alert(indexOf);


//Formas de cortar e concatenar
//slice
const hobbits = arr.slice(0, 4);// ele vai receber do 0 até o 3
hobbits = arr.slice(-4, 0);// ele vai receber do 3 até o 0 -> puxa os indicies pelo final
//o segundo par^metro e opcional


//concat ->concatenar valores e outros arrays a um array
const society = hobbits.concat(arr, "Rio De Janeiro");
alert(society);


//Substituição dos elementos:
//splice -> remover um grupo de elementos e/ou substituir por outros elementos
const removed_elements = society.splice(indexOf, "São Paulo");
// Digite o elemento a ser removido e logo após, o elemento a ser substituído.
alert(removed_elements);


//Iterar sobre os elementos do array
for(i = 0; i < society.length; i++){
  let element = society[i];
  alert(element);
}
