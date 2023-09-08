import "../../style/card.scss";

// class Card1{
//   constructor(img_src, alt_text, title, bio){
//     this.img_src = img_src;
//     this.alt_text = alt_text;
//     this.title = title;
//     this.bio = bio;
//     const card = (
//       <div className="card">
//       <div className="img-space">
//         <img src={img} alt={alt_text} className="image"srcset="" />
//       </div>
//       <hr />
//       <main>
//           <h1>{title}</h1>
//           <p>
//           {bio}
//           </p>
//           <button type='submit'>Add to Favorites!</button>
//       </main>
//       </div>
//     )
//     return card
//   }
// }

const Card2 = ({title, array, bio}) => {
  //Aqui se coloca como parametro do obj desistruturado as informações seguimentadas
}
const Card = (props) => {
  // const img_src ="../../img/1989.png"
  // const alt_text ="1989-TV-Poster"
  // const title = "1989 Taylor's Version"
  // const bio = "1989 (Taylor's Version) é o futuro quarto álbum regravado pela cantora e compositora estadunidense Taylor Swift, com lançamento previsto para 27 de outubro de 2023, através da Republic Records."
  return (
    <div className={props.bgcolor ? 'card background-red' : 'card background-blue'}>
      <div className="img-space">
        <img src={props.img_src} alt={props.alt_text} className="image" srcset="" />
      </div>
      <hr />
      <main>
        <h1>{props.title}</h1>
        <p>
          {props.bio}
        </p>
        <button type='submit'>{props.btn_content}</button>
      </main>
    </div>
  )
  
}


export default Card;