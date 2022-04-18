import React from 'react'
import cs from './Button.module.css'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <div 
      className={[cs.Button, props.className].join(' ')}
      style={{
        background: props.background,
        width: props.width,
        border: props.border,
        color:props.textColor,
        padding: props.padding
      }}>{props.children}</div>
  )
}

Button.propTypes = {
  background: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  padding: PropTypes.string,
}

export default Button