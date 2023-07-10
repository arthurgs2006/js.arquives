const arr = [
  "Arroz",
  "Feijão",
  "Batata"
] // Um array convencional funciona dessa forma.
const arr2 = [
  [
    "Arroz",
    "Feijão",
    "Batata"
  ]
  [
    "Arroz",
    "Feijão",
    "Batata"
  ] //É possivel colocar vários arrays em um array bidmensional
] // Um array bidmensional funciona dessa forma.
//Um array bidmensional utiliza um array dentro de outro para funcionar normalmente.
//Outro exemplo:

// console.log(arr2[0]);
// console.log(arr2[1][1])

let matriz = [
  ["l1, l2","l1, l2","l1, l2","l1, l2"],
  ["l1, l2","l1, l2","l1, l2","l1, l2"],
  ["l1, l2","l1, l2","l1, l2","l1, l2"]
]
console.table(matriz); //criar tabela cm array
matriz.push(["Nova linha"]);//Add novas linhas ou colunas a tabela
matriz[0].push(["Nova coluna"])
console.table(matriz);

for(i = 0; i < matriz.length; i++){
  for(l = 0; l < matriz[i].length; l++){
    const element = matriz[i][j];
    console.log(`Posição ${i} + ${l} = ${element}`)
  }
}