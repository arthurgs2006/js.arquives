import {Subtitle} from "./Components/Subtitle";
import {Status} from "./Components/Status";
import  "./App.modules.css";
import Title from "./Components/Title/Title";


const sum = (a, b) => {
  return a + b
}

const App = () => {
  return(
    <div className="app"
    >
      <Title>React</Title>
      <Subtitle></Subtitle>
      <Status></Status>
      <p>{false && "Text"}</p>
    </div>
  )
}


export default App