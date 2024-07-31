import React from 'react'
import "./button.css";

const Button = ({buttonText, onClick, custom, prefix}) => {
  return (
    <div className={`flex absolute-center button-wrapper ${custom}`} onClick={onClick}>
        {prefix} {buttonText}
    </div>
  )
}

export default Button;
