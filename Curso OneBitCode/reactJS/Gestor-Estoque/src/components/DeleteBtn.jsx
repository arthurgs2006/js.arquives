import { useNavigate } from 'react-router-dom';
import useStock from '../hooks/useStock.js'
export default function ({name, ID}) {
  const { removeItem} = useStock();
  const navigate = useNavigate()
  const handleDelete = () => {
    if (confirm(`Tem certeza que quer excluir o elemento ${name} ?`)){
      removeItem(ID)
      navigate('/about')
    }
  }

  return(
    <button className="btn " onClick={handleDelete}>
      Deletar
    </button>
  )
}