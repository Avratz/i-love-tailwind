import React from 'react'
import PlayBtn from './PlayBtn'

const Image = ({src = "img/default.jpg", alt = "some image", rounded = false, withPlay = false}) => {
  const imgClass = `${rounded ? 'rounded-full' : ''}`
  return (
    <div className="relative">
      <img className={`${imgClass} w-full`} src={src} alt={alt} />
      {withPlay ? <PlayBtn /> : null }
    </div>
  )
}

export default Image
