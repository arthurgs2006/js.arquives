import Box from '../components/box'
import TableHomePage from '../components/tableHomePage'
import useStock from '../hooks/useStock'
import { Link } from 'react-router-dom'

export default function () {
  const {items} = useStock()

  const diversity = items.length
  const inventoryTotal = items.reduce( (sum, item) => sum + +item.quantity, 0)

  const today = new Date()
  const limitDate = new Date()
  limitDate.setDate(limitDate.getDate() - 10)
  const recentItems = items.filter((item) => item.createdAt >= limitDate && item.createdAt <= today)
  const recentTotal = recentItems.length

  const lowquanttityItens = items.filter(item => item.quantity < 10)
  const lowquanttityTotal = lowquanttityItens.length
  return (
    <>
    <main>
      <div className='row'>
        <div className='dashboard-card'>
          Diversidade de Itens:
          <span>{diversity}</span>
        </div>
        <div className="dashboard-card">
          Inventário Total:
          <span>{inventoryTotal}</span>
        </div>
        <div className="dashboard-card">
          Itens recentes:
          <span>{recentTotal}</span>
        </div>
        <div className="dashboard-card">
          Estoque acabando:
          <span>{lowquanttityTotal}</span>
        </div>
      </div>
      <div className="row">
        <div className="recent">
          <table>
            <thead>
              <tr><th>Itens Recentes</th>
              <th>Ações</th>
            </tr>
            </thead>
            <tbody>
              {recentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td><Link to={`/about/${item.id}`} className="button is-small">Ver</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="low">
          <table>
            <thead>
              <tr>
                <th>Itens acabando</th>
                <th>Qtd.</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lowquanttityItens.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td><Link to={`/items/${item.id}`} className="button is-small">Ver</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
    </>
  )
}