import { useRef } from "react";

export default function() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log()
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = '#F64348'
  }
  return(
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus on Input</button>
    </div>
  )
}