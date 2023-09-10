import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const games = [
  {
    "id": 1,
    "coverImage": "https://i.pinimg.com/originals/d0/8b/bd/d08bbd23315fa7a430d2d6ff2575339e.jpg",
    "title": "Super Mario Bros",
    "releaseYear": 1985,
    "description": "A classic platformer game."
  },
  {
    "id": 2,
    "coverImage": "https://cdn.mobygames.com/covers/4857336-the-legend-of-zelda-nes-front-cover.jpg",
    "title": "The Legend of Zelda",
    "releaseYear": 1986,
    "description": "A top-down adventure game."
  },
  {
    "id": 3,
    "coverImage": "https://www.hellandheavennet.com/files/final-fantasy/box-nes-us-1.jpg",
    "title": "Final Fantasy",
    "releaseYear": 1987,
    "description": "A classic role-playing game."
  },
  {
    "id": 4,
    "coverImage": "https://gamefaqs.gamespot.com/a/box/0/3/4/3034_front.jpg",
    "title": "Doom",
    "releaseYear": 1993,
    "description": "A first-person shooter game."
  },
  {
    "id": 5,
    "coverImage": "https://cdn.mobygames.com/covers/4056006-warcraft-orcs-humans-dos-front-cover.jpg",
    "title": "Warcraft",
    "releaseYear": 1994,
    "description": "A real-time strategy game."
  },
  {
    "id": 6,
    "coverImage": "https://cdn.mobygames.com/covers/5346152-starcraft-windows-front-cover.jpg",
    "title": "Starcraft",
    "releaseYear": 1998,
    "description": "A military science fiction game."
  },
  {
    "id": 7,
    "coverImage": "https://i.pinimg.com/originals/a0/d0/9c/a0d09c9cd3eb770f8f83e23744da72fc.jpg",
    "title": "Half-Life",
    "releaseYear": 1998,
    "description": "A first-person shooter game."
  }
]

function App() {
  return (
    <div >
      <h1>Meus Jogos</h1>
      {games.map((game) => {
        return(
          <div key={game.id}>
            <img src={game.coverImage} alt="" srcset="" />
            <h2>{game.title}</h2>
            <p>{game.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
