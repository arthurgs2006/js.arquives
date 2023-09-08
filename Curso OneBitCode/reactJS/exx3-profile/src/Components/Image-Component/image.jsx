export default function({src_img, alt_img="Image render by ReactJS", title}){
  return(
    <div className="img-area">
      <img src={src_img} alt={alt_img} srcset="" className="ProfileImage"/>
      <h1 className="title">{title}</h1>
    </div>
  )
}