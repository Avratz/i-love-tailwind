import React from 'react'

interface iHeading {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | undefined
  children: React.ReactNode
  className?: string
}

const Heading:React.FC<iHeading> = ({as  = "h1", size ="base", children, className = ''}) => {
  return React.createElement(as, {className: `text-${size} ${className}`}, children);
}

export default Heading
