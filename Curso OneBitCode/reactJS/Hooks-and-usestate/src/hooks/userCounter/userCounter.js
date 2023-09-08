import { useState } from "react"; //Importa a render de do react
//Criando um Hook

const getInitialValue = () => {
  console.log(`Obtendo o valor inicial.`)
  return 1+1;
}

export default function(){
  const [count, setCount] = useState(() => getInitialValue());
  //utilizando como uma alternativa para que o React não fique a todo momento recarregando o componente
  // utilize no useState() uma callbackfunction que irá iniciar somente quando for necessário
  const increment = () => {
    // setCount(count + 1)
    // setCount(count + 1)
    //Caso os repetidas vezes sejá feita a reconstrução de algum elemento, o react pode
    //realizar a tarefa assincronamente, como no caso acima, que soma as duas de uma vez e renderiza somente uma vez
    //Para que o processo seja inicialmente preparado, utilize uma callbackfnc para alterar isso
    setCount((currentState) => currentState + 1)
    setCount((currentState) => currentState + 1)
  };
  return {count, increment};
}