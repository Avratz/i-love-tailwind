import React from 'react'
import * as FaIcons from "react-icons/fa";
import { IconType } from 'react-icons/lib';

interface iIcon {
  name: string,
  color?: string
}

const Icon: React.FC<iIcon> = ({name, color = "black"}) => {

  const FaIcon: IconType | string = name !== '' ? FaIcons[name] : ''
  return (
    <div 
      className=
      {
        `text-${color} w-11 h-11
        flex items-center justify-center text-2xl`
      } 
    >
      {FaIcon !== '' ? <FaIcon /> : ''}
    </div>
  )
}

export default Icon
