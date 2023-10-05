import { useState, useRef } from 'react'
import Refexample from './refexample';
import './App.css'

function App() {
  let variable = 0;
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValue = () => {
    alert(`
    Variável: ${variable}
    Ref: ${ref.current}
    State: ${state}
    `)
  }

  return (
    <>
      <h3>Metting UseRef</h3>
      <hr />
      <Refexample></Refexample>
      <hr />
      <p>Variable: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button onClick={() => variable++}>Add to Variable</button>
      <button onClick={() => ref.current++}>Add to Ref</button>
      <button onClick={() => setState(state => state + 1)}>Add to State</button>
      <hr />
      <button onClick={showValue}>Show Values</button>
    </>
  )  
}

export default App
