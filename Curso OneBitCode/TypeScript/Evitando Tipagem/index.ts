const sendSpaceShip = (spaceship: {pilot:string, copilot?:string}) => {
  //insira o ?, antes do : ao declarar um parâmetro para dizer que aquele parâmetro é opcional
  console.log(spaceship);
}

sendSpaceShip({pilot:'Han Solo', copilot: 'Chewbacca'});

sendSpaceShip({pilot:'Arthur'});

let input: unknown //O tipo ainda é desconhecido, por isso ainda não tem referencia

input = 'SpaceShip'
input = 12
input = true
input = []
input = {}

//Todos funcionam pq não há variavel ao input

let text: string;

// input = text -> PODE SER EXECUTADO
// text = input -> NÃO PODE SER EXECUTADO

let otherInput: any; //outra forma de evitar a tipagem, porém com ela o ts não funciona, se torna js puro.
//any não é recomendado pq pode causar erros ou possíveis inconsistências ao TS
text = otherInput; //ele não dá erro, pq ele trabalha como js normal

otherInput = 12;

otherInput = true;

//NEVER:

function verification(test){
  if(test){

  } else {
    let check: never;

    // let text = check
    // return check
  }
  
}