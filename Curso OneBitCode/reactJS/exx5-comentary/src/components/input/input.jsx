import './style.module.scss'

const Input = ({id, type, label, func, value}) => {
  if (type == 'textarea'){
    return(
      <div>
        <label htmlFor={id}>{label}</label>
        <textarea  id={id} cols="30" rows="10" placeholder='Type here...' value={value} onChange={func}></textarea>
      </div>
    )
  }
  else if (type == 'submit'){
    return(<button className="btn btn-primary" type='submit'>{label}</button>)
  }
  return(
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={func}/>
    </div>
  )
}

export default Input;