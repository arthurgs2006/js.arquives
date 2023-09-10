import { useState } from 'react'
import './App.css'
import Input from './Components/Input/index.jsx';
// import Length from './Components/length';
import passwordGenerator from "./Components/passwordGenerator/index.jsx";


function App() {
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState(false);
  const [passwordSize, setPasswordSize] = useState(12);
  const [showInput, setShowInput] = useState(false);
  //Criar um password, que será renderizada a partir do momento em que o botão for clicado
  const generator = () => {
    let length = passwordSize
    let characters = "QWERTYUIOP`ASDFGHJKLÇ~^ZXCVBNM,.;/:|1234567890-=+qwertyuiopasdfghjklçzxcvbnm@!#$%&*()"
    const newPassword = passwordGenerator(characters, length);
    setPassword(newPassword);
    setCopy(false);
  }
  const copytotheclipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopy(true);
    }).catch((err) => {
      alert(`Ocorreu o seguinte erro ao tentar executar a tarefa de copiar: ${err}`);
    })
  }
  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div className="card">
        <div className="mg-b">
          <div className="check-box">
            <label htmlFor="check">
              Change the size:
            </label>
            <input 
            type="checkbox" name="" 
            value={showInput}
            onChange={() => setShowInput(currentState => !currentState) }
            id="check" />
          </div>
          {showInput ? (
            <>
              <div className='input-area'>
                <label htmlFor="passwordSize">Password Size:</label>
                {/* <input type="number" min={4} max={16} id="passwordSize"value={passwordSize} onChange={(ev) => setPasswordSize(ev.target.value)} /> */}
                <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}></Input>
              </div>
              <p  className='minLabel'>MIN:4/MAX:16</p>
            </>
          ): null}
        </div>
        <button id="gerar" onClick={generator}>Gerar senha de {showInput ? passwordSize : 12} caracteres</button>
        <button onClick={copytotheclipboard}>{copy ? "Copied!" : "Copy"}</button>
        <p id='password'>{password}</p>
      </div>
    </>
  )
}

export default App;
