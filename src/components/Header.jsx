import React from 'react'
import home from '../img/home.png'

const Header = ({resetCurrentIndex}) => {
  return (
    <header>
      <img src={home} alt="home" onClick={resetCurrentIndex}/>
      <span></span>
      <p>project</p>
    </header>
  )
}

export default Header