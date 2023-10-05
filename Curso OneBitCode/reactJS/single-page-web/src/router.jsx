import { createBrowserRouter, Link } from "react-router-dom"
import RootLayout from "./pages/RootLayout";
import Admin from "./pages/admin/AdminHome";
import Home from "./pages/home";
import Products from "./pages/Products";
import Cart from "./pages/cart";
import ProductDetails from "./pages/ProductDetails";
import loaderProduct from './loaders/products.js'
import ProductBoundary from './errors-boundaries/ProductBoundary.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children:[{
      index: true,
      element: <Home />,
      },
      {
      path: '/products',
      element: <Products />,
      // children=[{
      //   path: 'search'
      // }]
      },
      {
        path:'products/:productID',
        element:<ProductDetails/>,
        loader: loaderProduct,
        // Loader é uma função que vai carregar os dados necessários para que uma rota específica funcione
        errorElement: <ProductBoundary />
      }, 
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  },
  {
    path: '/admin',
    element: <Admin />
  }
])

export default router;