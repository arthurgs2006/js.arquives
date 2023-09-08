import Proptypes from "prop-types"

Input.Proptypes = {
  id: Proptypes.string,
  textLabel: Proptypes.string,
  value: Proptypes.string,
  onChange: Proptypes.func
}
export default function Input({id, textLabel, value, onChange}){
  return(
    <div className="input-space">
      <label htmlFor={id} className="label">{textLabel}</label>
      <input type="text" id={id} className="input" 
      value={value} onChange={onChange}
      />
    </div>
  )
}