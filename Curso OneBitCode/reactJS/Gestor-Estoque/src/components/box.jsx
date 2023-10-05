
export default function ({label, value}){
  return(
    <div className="box">
      <label htmlFor="">{label}</label> 
      <span className="number-area">
        {value}
      </span>
    </div>
  )
}