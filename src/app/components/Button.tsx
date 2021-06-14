import React from 'react'
import Icon from './Icon'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'default' | 'light'
  slot?: 'left' | 'right'
  icon?: any
  iconColor?: string
  handleClick?: () => void
  className?: string
}

const Button:React.FC<ButtonProps> = ({
  children, 
  variant = "default", 
  slot, 
  icon = '',
  iconColor,
  className = '',
  handleClick = () => {}
}) => {
  const btnClass = () => (
    variant ===  'default' ? 
    'bg-secondary-500 hover:bg-secondary-400 active:bg-secondary-600 text-fwhite' 
    : 'bg-fwhite hover:bg-white active:bg-gray-100 text-black' 
  )
  return (
    <button 
      onClick={handleClick}
      className={
        `
        ${className} ${btnClass()} h-11 w-full rounded shadow-md 
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

