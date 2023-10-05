import UserInfo from './components/UserInfo'
import './App.css'
import UserContext from './context/useContext.js'
function App() {
  const user = {
    name: 'Arthur',
    email: "arthur@email.com"
  }
  return (
    <>
      <UserContext.Provider value={user}>
        <h1>Usando o Contexto</h1>
        <UserInfo></UserInfo>
      </UserContext.Provider>
      <div>
        {/* Não Há acesso ao contexto */}
      </div>
    </>
  )
}

export default App
