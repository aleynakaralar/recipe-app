import React from 'react'

const Recipe = ({title,image,recipe}) => {
  return (
    <div>
        <h1>{title}</h1>
        <img src={image} alt="" />
    
    </div>
  )
}

export default Recipe