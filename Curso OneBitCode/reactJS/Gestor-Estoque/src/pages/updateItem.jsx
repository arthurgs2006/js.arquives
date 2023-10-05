import ItenForm from "../components/ItenForm";
import { useParams, Link } from "react-router-dom";
import useStock from "../hooks/useStock"

export default function(){
  const { getItem } = useStock();
  const { id } = useParams();
  const item = getItem(id)
  return(
    <div className="container">
      <h4>Atualizar Itens</h4>
      <ItenForm itemToUpdate={item}/>
    </div>
  )
}