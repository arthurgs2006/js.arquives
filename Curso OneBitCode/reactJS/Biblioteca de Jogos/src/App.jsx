import { useState } from "react"
import "./style.modules.scss"
import Form from "./components/form.jsx"
import {listGames, HandleSubmit, addGames, setCover, setTitle, games}  from './hooks/index.jsx'

const App = () => {

  return (
    <div className="container">
        <Form el={HandleSubmit}/>
      <div className="main">
        {listGames(games)}
      </div>
    </div>
  )
}

export default App;