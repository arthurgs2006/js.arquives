let literal: "Hello world!"; //diretamente declarado como um novo tipo, "hello world!" é classficiado como novo tipo
let pi: 3.141592653589 //o mesmo sistema

// literal = 'oi mundo!' // Não é possivel de se atribuir a outro tipo
// pi = 3 //o mesmo aqui

let option: "Yes" | "No" | "Maybe" // A "|"" significa "Ou", ou seja, o valor pode ser um dos dois
option = "Maybe"

let option2: number | boolean 
option2 = true;
option2 = 1;

//Criar um tipo:
type Planet = 'Mercury' | 'Earth' | 'Jupiter' | 'Neptune' | 'Saturn';

let planet: Planet = 'Earth';

let homeplanet: Planet ;

function check(planet: Planet){
  if(planet == 'Earth'){
      console.log('O planeta é o Earth');
    }
    else{
      console.log('O planeta não é o Earth');
    }
}

type GreetingCallBack = (message: string) => void; //void -> Não retorna nada

let greeting: GreetingCallBack = (message: string) => {
  console.log(message);
}
