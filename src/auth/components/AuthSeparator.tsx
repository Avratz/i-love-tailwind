import React from 'react'

const AuthSeparator = () => {
  return (
    <div className="w-full relative">
      <div className="h-px w-full bg-gray-200 my-4 mt-5"></div>
      <span 
        className="absolute top-1/2 left-1/2 
        transform -translate-x-1/2 -translate-y-1/2 
        bg-white px-4"
      >or</span>
    </div>
  )
}

export default AuthSeparator
