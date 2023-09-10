import { useState } from "react";
import propTypes from "prop-types"
// PropTypes biblioteca instalada no npm, funciona em declaração de props para não errar em TS

export default function Input(props) {
  return(
    <input type="number" 
    min={4} max={16} 
    id="passwordSize"
    value={props.passwordSize} 
    onChange={(ev) => props.setPasswordSize(+ev.target.value)} />
    // + antes da expressão transforma em número 
  )
}

Input.propTypes = {
  passwordSize: propTypes.number.isRequired,
  setPasswordSize: propTypes.func
}
