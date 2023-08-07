
const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];
// Map -- Como utilizar...

//Antes do MAP:
// const names = [];

// for(i = 0; i < personagens.length; i++){
//   names.push(personagens[i].nome);
// };
// console.log(names);

//Seleciona quais vc deseja
//Com o map():
const names = personagens.map(function (personagem){
  return personagem.nome;
})

console.log(names);

//filter():
//Sem filter:
// const orc = [];
// for (let i = 0; i < personagens.length; i++) {
//   if(personagens[i].raca === "Orc"){
//     orc.push(personagens[i]);
//   }
  
// }
//Valor com filter():
const orc = personagens.filter(function (personagem){
  return personagem.raca === "Orc";
})
console.log(orc)

//Reduce:
// 1 - 2 ...
const niveltotal = personagens.reduce(function (value, personagem){
  return value + personagem.nivel;
}, 0);
console.log(niveltotal);
//Outro exemplo com reduce()...

const raca = personagens.reduce(function(value, personagem){
  if (value[personagem.raca]){
    value[personagem.raca].push(personagem);
  } else{
    value[personagem.raca] = [personagem];
  }
  return value;
}, {});
console.log(raca);

//Sort() ->Ordenar arrays (Muda-los de posição...);
//Sort() no crescente
personagens.slice().sort( function (a, b){ //utilize o slice para realizar uma copia do array e nao atrapalhar o array original
  return a.nivel - b.nivel;
});
console.log(personagens)
//Sort(), porém agora no decrescente
personagens.slice().sort( function (a, b){
  return  b.nivel - a.nivel;
});
console.log(personagens);
//OBS: torne uma das opções comentarios para funcionar