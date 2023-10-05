import { useEffect, useState } from 'react'
import './App.css'

const fetchPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  //Chamar com fetch() a api a ser buscada
  //É importante colocar o await a cada chamada ou transformação de info durante as async function
  const data = await response.json();
  //await é para espera do método, e .json() é para transformar a info em formato JS
  return data.results; //.results é a volta com os dados da api
}
//Para realizar requisições, é necessário utilizar sempre o useState, já que para as informações 
//aparecerem na tela, precisam de algo que chame e retorne ela

function App() {
  const [pokemon, setState] = useState([]) 
  const [pokemonShown, setPokemonShown] = useState(null)
  useEffect(() => {
  }, [])
  if(pokemon.length === 0){
    fetchPokemon().then(results => {
      console.log("Requisição foi realizada com sucesso!")
      console.log(results)
      setState(results)
    }).catch(err => {
      console.log(`Ocorreu o erro "${err}", ao tentar reproduzir a API Pokemón!\nTente Novamente...`)
    })
  }

  const showDetails = async (url) => {
    const data = await fetch(url).then(res => res.json())
    console.log('Pokemon Encontrado!')
    console.log(data)
    setPokemonShown(data)
  }
  return (
    <>
      <div>
        <h2>Pokémon</h2>
        <ul className='ul'>
          {pokemon.map(mon => (
            <li key={mon.name}>
              <span>{mon.name}</span>
              <button className='see' onClick={() => showDetails(mon.url)}>
                Ver Detalhes
              </button> 
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
