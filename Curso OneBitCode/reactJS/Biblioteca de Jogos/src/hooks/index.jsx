import Card from "../components/card.jsx"
import { useState } from "react";

  const [games, addGames] = useState((game) => {
    const savedGames = localStorage.getItem('obc-game-lib', game)
    if (!savedGames) return [];
    return JSON.parse(savedGames)
  })
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')
  
  const HandleSubmit = (ev) => {
    ev.preventDefault()
    addGames(state => {
      const id = Math.floor(Math.random() * 10000);
      const game = {title, cover, id}
      const arrayGames =  [...state,game];
      localStorage.setItem('obc-game-lib', JSON.stringify(arrayGames));
      return arrayGames;
    })
    setTitle('')
    setCover('')
  }

  const listGames = ({games}) => {
    return games?.map((game)=>(
      <Card cover={game.cover} title={game.title} key={game.id}/>
    ))
  }

  const removeGame = ({id}) => {
    const elements = games.filter(g => g.id != id);
    localStorage.setItem('obc-game-lib', JSON.stringify(elements));
    return elements;
  }


export {removeGame, listGames, HandleSubmit, addGames, setCover, setTitle, games, cover, title};