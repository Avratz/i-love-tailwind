import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc"

const icons = {...FcIcons, ...FaIcons}

interface iIcon {
  name: keyof typeof icons | '',
  color?: string
  className?: string
}

const Icon: React.FC<iIcon> = ({name, color = "black", className = ''}) => {

  const FaIcon = name !== '' ? icons[name] : ''
  return (
    <div 
      className=
      {
        `text-${color} w-11 h-11
        flex items-center justify-center text-2xl 
        ${className}`
      } 
    >
      {FaIcon !== '' ? <FaIcon /> : ''}
    </div>
  )
}

export default Icon
