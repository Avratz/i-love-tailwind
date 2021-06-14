import React from 'react'
import Heading from './Heading'
import Image from './Image'

interface iAvatar {
  name?: string | undefined
  src?: string | undefined
  className?: string | undefined
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | undefined
}

const sizeTable = {
  'xs': 'w-6 h-6',
  'sm': 'w-8 h-8',
  'base': 'w-11 h-11',
  'lg': 'w-14 h-14',
  'xl': 'w-16 h-16',
}

const Avatar: React.FC<iAvatar> = ({size = "base", name = '', src, className = ""}) => {
  const initials = name.split(' ').map((word:string) => word[0]).join('')
  const sizeStyle = sizeTable[size]
  return (
    <div className={`
      bg-primary-500 rounded-full
      flex items-center justify-center 
      ${sizeStyle} ${className}
    `}>
      {src ? 
        <Image src={src} alt={name} rounded/> 
      : <Heading as="h4">{initials}</Heading>}
    </div>
  )
}

export default Avatar
