//  Operador que permite espalhar do objeto iterável, sendo um array ou uma string por exemplo.
const towns = ['Ribeirão Preto', 'São Paulo', 'Nova York', 'Rio de Janeiro', 'Salvador', 'Feira de Santana', 'Sertãozinho'];

console.log(...towns); //Para utilizar o comando, inicie a operation com '...'
console.log(...towns[0]); // Com strings
console.log(towns) //Modelo origem

const townsCopy = towns; // A const townsCopy é na verdade um indicador que se refere ao mesmo array Towns, caso queria mudar
//isso, é necessário utilizar o método .push() e não o '='
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Belo Horizonte')
console.log({towns, townsCopy});

const townsClone = [...towns] // assim ele cria um novo array cm as informações presentes no anterior

townsClone.push('Rio Branco');
console.log({towns, townsCopy, townsClone})


const townsObj = { ...towns};
const townsCloneObj = { ...townsObj};

townsCloneObj.test = 'test'
console.log({townsObj, townsCloneObj})