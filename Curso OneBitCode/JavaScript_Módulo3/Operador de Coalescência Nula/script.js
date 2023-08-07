
const a = 0 // Quando se trata de operaçao lógica, o JS retorna falso

const b = null // Falso

const c = 'Teste'

console.log(a || b || c);
 //O operador || condena todos as operações lógicas como falsas para aqueles que receberem undefined, null ou 0
 //O operador ?? reconhece o 0 como valor verdadeiro, porém retorna falso para os dois outros tópicos...

 console.log(a ?? b ?? c);


 let a2 = 0
 let b2 = a2 || 42;
 console.log({a2, b2}); // Retornará como variavel o valor real primeiro com o ||

 let a3 = 0
 let b3 = a3 ?? 42 //Com o ??, o pensamento volta com: se o a3 tiver agum valor atribuido, incluindo 0, ele será add, caso contrario...42.
 console.log({a3, b3});

 let c2 = null ?? 42;
 console.log({c2})//

