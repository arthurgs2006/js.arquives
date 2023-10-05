import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function (){
  const error = useRouteError()
  if (isRouteErrorResponse(error)){
    switch (error.status){
      case 404: 
        return(
          <h2>Oops... Produto não encontrado</h2>
        )
      case 401:
        return(
          <h2>Desculpe, mas esta área é somente para funcionários.</h2>
        )
      case 400:
        return(
          <h2>Ocorreu algum erro ao executar sua requisição</h2>
        )
      case 500: 
      return(
        <h2>Erro interno no servidor.</h2>
      )
      }
    } 
    return <h3>Algo deu errado...</h3>
  } 