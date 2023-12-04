import React from 'react'
import style from './Button.module.css'
const Button = (props) => {
  return (
    <div>
      <button className={[style.btn, style.textXl].join(' ')} title={props.title } onClick={props.HandleClick}>
        <img src={props.image} alt="Left Arrow" />
      </button>
    </div>
  )
}

export default Button
