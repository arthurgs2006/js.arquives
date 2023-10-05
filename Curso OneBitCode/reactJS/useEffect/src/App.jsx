import { useState, useEffect } from 'react'
import './App.css'

function Counter(){
  const [count, setCount] = useState(0)
    // Chamar a função deve ficar no topless da Function
    useEffect(() => {
      console.log("O efeito colateral foi ativado!")
      return () => {
        console.log("Limpando...")
        console.log("Componente desmontado!")
      } 
    }, [count])
    // O react.strickmode é ativado e possibilita a execução do componente duas vezes
    return(
      <button onClick={() => setCount(count => count + 1)}>
        Counter: {count}
      </button>
    )
}

function App() {
  const [show, setShow] = useState(false)
  return (
    <>
      <h1>Metting UseEffect</h1>
      <div>
        <input type="checkbox" id="show" value={show} onChange={() => setShow(state => !state)}/>
        <label htmlFor="show">Exibir</label>
      </div>
      {show ? <Counter /> : null }
      <hr />
      {show ? <Counter /> : null }

    </>
  )
}

export default App
