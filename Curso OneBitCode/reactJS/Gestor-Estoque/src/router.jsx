import RootLayout from "./routerLayout";
import { createBrowserRouter } from "react-router-dom"
import Home from './pages/home';
import Itens from './pages/itens';
import ItenPage from "./pages/itenPage"; 
import UpdateItem from "./pages/updateItem"; 
import CreateItem from "./pages/createItem";
import TableStockItens from './components/tableStockItens.jsx'
const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Home />
    },
    {
      path:'/about',
      element: <Itens />,
      children: [{
        index: true,
        element: <TableStockItens />
      },
      {
        path:":id",
        element: <ItenPage />
      },
      {
        path: 'createElement',
        element: <CreateItem />
      },
      {
        path: ':id/update',
        element: <UpdateItem />
      }
    ]
    }]
  }]
)

export default router;