import { useParams, Link } from "react-router-dom";
import useStock from "../hooks/useStock"
import DeleteBtn from '../components/DeleteBtn.jsx'

export default function () {
  const { getItem } = useStock();
  const { id } = useParams();
  const item = getItem(id)
  return (
    <div className="item">
      <h2>{item.name}</h2>
      <Link to={`/about/${item.id}/update`} className="button is-small">
        Atualizar
      </Link>
      <DeleteBtn name={item.name} ID={item.id} />
      <div className="row">
        <span>Categoria: {item.category}</span>
        <span>Quantidade: {item.quantity}</span>
        <span>Preço: {item.price}</span>
      </div>
      <p>{item.description}</p>
      <div className="row">
        <p>Cadastrado em: {item.createdAt.toDateString()}</p>
        <p>Atualizado em: {item.updatedAt.toDateString()}</p>
      </div>
    </div>
  )
}