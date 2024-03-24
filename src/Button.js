import React from 'react'

const Button = ({ buttonText, reqType, setReqType }) => {
    //Below classname syntax helps us to apply the css property selection and deSelection style
  return (
    <button className={buttonText === reqType ? 'selected': null} type='button' onClick={()=> setReqType(buttonText)}>
        {buttonText}
    </button>
  )
}

export default Button