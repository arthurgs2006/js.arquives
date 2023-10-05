import {Link} from 'react-router-dom'

export default function(){
  return(
    <header>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <Link to='/'>Ínicio</Link>
          <Link to='/products'>Produtos</Link>
          <Link to='/cart'>Carrinho</Link>
        </nav>
      </header>
  )
}