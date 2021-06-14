import React from 'react'
import Link from 'next/link'

interface iLink {
  href?: string
  children: React.ReactNode
  className?: string
}

const CustomLink:React.FC<iLink> = ({href = "#", children, className=''}) => {
  return (
    <Link href={href} >
      <a 
        className={
          `text-secondary-500 
          hover:text-secondary-300
          ${className}`
        }
      >
        {children}
      </a>
    </Link>
  )
}

export default CustomLink
