import React from 'react'
import Icon from './Icon'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'default' | 'light'
  slot?: 'left' | 'right'
  icon?: string
  iconColor?: string
  handleClick?: () => void
}

const Button:React.FC<ButtonProps> = ({
  children, 
  variant = "default", 
  slot, 
  icon,
  iconColor,
  handleClick
}) => {
  const btnClass = () => (
    variant ===  'default' ? 
    'bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-fwhite' 
    : 'bg-fwhite hover:bg-white active:bg-gray-100 text-black' 
  )
  return (
    <button 
      onClick={handleClick ? handleClick : null}
      className={
        `
        ${btnClass()} h-11 w-full rounded shadow-md 
        hover:shadow-lg active:shadow-none transition-shadow 
        focus:outline-none flex items-center justify-between
        `
      }>
      <Icon name={slot === 'left' ? icon : ''} color={iconColor}/>
      {children}
      <Icon name={slot === 'right' ? icon : ''} color={iconColor}/>
    </button>
  )
}

export default Button

