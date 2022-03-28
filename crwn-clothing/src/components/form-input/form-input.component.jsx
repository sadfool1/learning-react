import React from "react";
import "./form-input.styles.scss"

const FormInput = ({ handleChange, label, ...otherProps }) => {

  return (
  <div className="group">
    <label className=""> {label} </label>
    <input className="form-input" onChange={handleChange} {...otherProps}></input>
    {
      label ?
      (<label className={`${otherProps.value.length} ? 'shrink' : ''`}> {label} </label>)
      : null
    }


  </div>
);

}

export default FormInput;
