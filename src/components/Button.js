import React from 'react'

const Button = ({className,text,onClick}) => {
  return (
   <button onClick={onClick} className={'btn ' + className}>{text}</button>
  )
}

Button.defaultProps = {
    text : 'Add',
}

export default Button