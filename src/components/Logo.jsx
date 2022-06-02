import React from 'react'

const Logo = ({image,image1}) => {
  return (
    <div className='logo'>
        <div>
        <img className='image' src={image} alt="" />
        </div>
        <div>
        <img className='image1' src={image1} alt="" />
        </div>
    </div>
  )
}

export default Logo