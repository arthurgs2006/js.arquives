import Title from '../title/title.jsx';

export default function(element){
  // element.commentary="asdoadsm"
  // element.email = "arljoijr@hotmail.com"
  // element.time = "13/04/2025"
  return(
    <aside>
      <Title>Comments:</Title>
      <div>
        <b>{element.email}</b>
        <p className='small-paragraph'>{element.time}</p>
        <p>{element.commentary}</p>
      </div>
    </aside>
  )
}