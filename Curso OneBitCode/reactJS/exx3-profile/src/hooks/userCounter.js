import { useState } from "react";
//criando um hook
export default function(){
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  return {count, increment};
}