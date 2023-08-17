import React from 'react'

const CustomBtn = ({imgSrc, text, onClick}) => {
  return (
   <button onClick={(event) => {onClick(event)}} className='custom-btn'>
      <div className="arrow">
         <img src={imgSrc} alt="arrow" />
      </div>
      <span>{text}</span>
   </button>
  )
}

export default CustomBtn