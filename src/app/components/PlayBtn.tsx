import React from 'react'
import Icon from './Icon'

const PlayBtn = ({forPlayer = false, className = ''}) => {

  const btnClass = `
    ${forPlayer? 
      'bg-transparent rounded-none text-white' 
      : 'rounded-full bg-gray-50 text-primary-500 absolute right-4 bottom-4'
    } 
    shadow-md hover:shadow-lg active:shadow-none transition-shadow 
    ${className}`

  return (
    <div className={btnClass}>
      <Icon name="FaPlay" color={forPlayer? 'black' : 'primary-500'} className="pl-3.5 p-3"/>
    </div>
  )
}

export default PlayBtn
