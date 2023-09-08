export default function Info(props){
  return(
    <p className={`${style.wrapper} ${props.className}`} {...props}>
      {text}
    </p>
  )
}