import React from 'react'
import arrow from '../img/arrow.png'
import virus_1 from '../img/virus_1.png'
import virus_2 from '../img/virus_2.png'
import virus_3 from '../img/virus_3.png'
import bakt_1 from '../img/bakt_1.png'
import bakti from '../img/bakti_1.png'
import virus_back_1 from '../img/virus_back_1.png'
import virus_back_2 from '../img/virus_back_2.png'
import pink_sperm from '../img/pink_sperm.png'
import pink_sperm_1 from '../img/pink_sperm_1.png'

import Header from './Header'
import Footer from './Footer'
import CustomBtn from './CustomBtn'

const Home = ({nextSlide, resetCurrentIndex}) => {
  return (
   <div className='home'>
      <img src={bakt_1} alt="img" className='bakt'/>
      <img src={bakti} alt="img" className='bakt'/>
      <img src={virus_1} alt="img" className="virus" />
      <img src={virus_2} alt="img" className="virus" />
      <img src={pink_sperm} alt="img" className="sperm" />
      <img src={pink_sperm_1} alt="img" className="sperm" />
      <img src={virus_back_1} alt="img" className="virus" />
      <img src={virus_back_2} alt="img" className="virus" />
      <img src={virus_3} alt="img" className="virus" />
      
      <Header resetCurrentIndex={resetCurrentIndex}/>
      <div className="container">
        <p>привет,</p>
        <h1>это <span>не</span> коммерческое задание</h1>
        <CustomBtn imgSrc={arrow} text={"Что дальше?"} onClick={nextSlide}/>
      </div>
      <Footer/>
   </div>
  )
}

export default Home