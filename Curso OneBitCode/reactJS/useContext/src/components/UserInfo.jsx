import userContext from "../context/useContext"
import { useContext } from "react";

export default function (){
  const user = useContext(userContext);
  return (
    <div>
      <h3>Informações do Usuário</h3>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}