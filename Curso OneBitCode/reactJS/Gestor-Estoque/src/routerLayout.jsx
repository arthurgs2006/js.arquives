import Header from "./components/header";
import { Outlet, useLocation } from "react-router-dom";

export default function(){
  const {pathname} = useLocation()
  return(
    <>
      <Header title={pathname == '/' ? 'Dashboard' : 'StockItens'}></Header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Feito por Arthur com React & React Router</p>
      </footer>
    </>
  )
}