import React from 'react'
import * as ReactIcons from "react-icons/fa";

interface iIcon {
  name: string,
  color?: string
}

const Icon: React.FC<iIcon> = ({name, color = "black"}) => {
  const FaIcon = ReactIcons[name]
  return (
    <div 
      className=
      {
        `text-${color} w-11 h-11
        flex items-center justify-center text-2xl`
      }
    >
      {FaIcon !== undefined ? <FaIcon /> : ''}
    </div>
  )
}

export default Icon
