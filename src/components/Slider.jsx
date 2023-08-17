import React from 'react'

const Slider = ({children, isActive}) => {
  return (
   <div className={`slider ${isActive ? 'active' : ''}`}>
      {children}
   </div>
  )
}

export default Slider