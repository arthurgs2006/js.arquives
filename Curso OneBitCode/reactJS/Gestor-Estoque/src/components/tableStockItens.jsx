import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteBtn from './DeleteBtn.jsx'

export default function () {
  const {items} = useStock();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items?.map( item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity} unid.</td>
            <td>{item.category}</td>
            <td>
              <Link to={`${item.id}`} className="button is-primary is-small">
                Ver
              </Link>
              <Link to={`${item.id}/update`} className="button is-small">
                Atualizar
              </Link>
              <DeleteBtn name={item.name} ID={item.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}