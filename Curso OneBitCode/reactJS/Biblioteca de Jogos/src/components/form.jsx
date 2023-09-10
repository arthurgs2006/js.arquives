import { setCover, cover, setTitle } from "../hooks/index.jsx"
import Input from "./input.jsx"
import PropTypes from 'prop-types'


const Form = ({el}) => {
  
  return (
    <form onSubmit={el}>
        <h1>Biblioteca de Jogos</h1>
        <Input id="title" textLabel="Title:" value={title} onChange={setTitle(() => title)}/>
        <Input id="cover" textLabel="Cover:" value={cover} onChange={setCover(() => cover)}/>
        <button type="submit">Add To List</button>
      </form>
  )
}
Form.Proptypes = {
  el : PropTypes.func
}

export default Form;