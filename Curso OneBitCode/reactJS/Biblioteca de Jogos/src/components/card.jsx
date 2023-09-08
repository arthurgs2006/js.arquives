import PropTypes from "prop-types"

Card.PropTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  OnRemove: PropTypes.func
}

export default function Card({title, cover, OnRemove}){
  return (
    <div className="card">
      <img src={cover} alt={title} className="img" />
      <div className="title-area">
        <h1>{title}</h1>
        <button type="button" className="button" 
        onClick={OnRemove}
        >Remove</button>
      </div>
    </div>
  )
}