import { Outlet, Link, useLocation } from "react-router-dom"

export default function () {
  const { pathname } = useLocation()
  return (
    <>
      <nav>
        <Link to='/about'
          className={`tab ${pathname == '/about' ? "active" : ""}`}>Todos os itens</Link>
        <Link to='/about/createElement'>Novo Item</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}