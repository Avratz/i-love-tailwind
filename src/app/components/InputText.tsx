import React from 'react'

const InputText = ({type = "text", placeholder="default", className = ''}) => {
  return (
    <input 
    type={type} 
    placeholder={placeholder} 
    className={`
      h-11 w-full text-black 
      px-4 
      border-2 border-gray-200
      focus:outline-none focus:ring-0 focus:border-secondary-300
      rounded
    ${className}
    `}
    />
  )
}

export default InputText
