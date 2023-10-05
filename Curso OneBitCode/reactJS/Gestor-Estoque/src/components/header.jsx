import {Link} from 'react-router-dom'
export default function({title}){
  return(
    <header>
      <div className="text-area">
        <h4 className="subtitle-upper">REACT STOCK</h4>
        <h2 className="title">{title}</h2>
      </div>
        <nav className="nav">
          <Link className='href' to='/'>Início</Link>
          <Link className='href' to='/about'>Items</Link>
        </nav>
    </header>
  )
}