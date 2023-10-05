import products from "../database.json"
export default function({params}){
  const product = products.find(p => p.id === +params.productID);
  // passando o operador + antes da variavel string, ele converte para numero... (+productID)
  if(!products || products == undefined){
    throw new Response("404 Not Found", {status: 404})
  }
  // throw new Response("404 Not Found", {status: 404})
  return product
}