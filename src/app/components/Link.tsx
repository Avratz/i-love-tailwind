import React from 'react'

interface iLink {
  href?: string
  children: React.ReactNode
  className?: string
}

const Link:React.FC<iLink> = ({href = "#", children, className=''}) => {
  return (
    <a 
      href={href} 
      className={
        `text-secondary-500 
        hover:text-secondary-300
        ${className}`
      }
    >
      {children}
    </a>
  )
}

export default Link
