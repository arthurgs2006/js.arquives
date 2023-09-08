import Card from "./Components/Card/Card.jsx";
import "./style/global.scss"
import img from "./img/1989.png"
import img2 from "./img/redtv.jpg"
const App = () => {
  // const card = new Card("", "1989-TV-Poster", "1989 Taylor's Version", "1989 (Taylor's Version) é o futuro quarto álbum regravado pela cantora e compositora estadunidense Taylor Swift, com lançamento previsto para 27 de outubro de 2023, através da Republic Records.")
  return (
    //fragment: <> </> -> Importa o elemento pai acima dele e desaparece ao ser executado
    <> 
      <div className="container"> 
        {/* {card} */}
        <Card
        bgcolor=""        
        title="1989 Taylor's Version"
        img_src={img}
        alt_text ="1989-TV-Poster"
        btn_content="Add to Favorites!"
        bio="1989 (Taylor's Version) é o futuro quarto álbum regravado pela cantora e compositora estadunidense Taylor Swift, com lançamento previsto para 27 de outubro de 2023, através da Republic Records."
        />
        <Card 
        bgcolor="true"
        title="RED Taylor's Version"
        img_src={img2}
        alt_text ="RED-TV-Poster"
        btn_content="Add to Favorites!"
        className="red"
        bio="RED (Taylor's Version) é o segundo álbum regravado pela cantora e compositora estadunidense Taylor Swift, com lançamento em 12 de novembro de 2021, através da Republic Records."
        />
      </div>
    </>
  )
}

export default App;