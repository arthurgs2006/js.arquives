



//Criando componentes:
const Button = () => {
  return <button>My Button</button>
}
const PrimaryButton = () => {
  return <button className="btn-primary"></button>
}
function Container(){
  return (
    <div className="container">
      <label htmlFor="input" className="label">Oi</label>
      <input type="text" id="input" />
    </div>
  )
}