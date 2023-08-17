import React from 'react'

const Slide = ({children}) => {
  return (
    <div className={`slide active`}>
      {children}
    </div>
  )
}

export default Slide