import React, { useState } from 'react'
import btn_prev from '../img/btn_prev.png'
import btn_next from '../img/btn_next.png'
import Slider from './Slider'
import Slide from './Slide'

const Popup = ({onCLose, popupRef, isActive}) => {
   const [numberOfSlide, setNumber] = useState(1)
   const [isSliderActive, setSliderActive] = useState(true)

   const handleNextSlide = () => {
      if(numberOfSlide < 2) {
         setSliderActive(false)
         setTimeout(() => {
            setNumber((prev) => prev+1)
            setSliderActive(true)
         }, 500)
      }
   }
   
   const handlePrevSlide = () => {
      if(numberOfSlide > 1) {
         setSliderActive(false)
         setTimeout(() => {
            setNumber((prev) => prev-1)
            setSliderActive(true)
         }, 500)
      }
   }

   const handleChangeSlide = (value) => {
      setSliderActive(false)
      setTimeout(() => {
         setNumber(+value)
         setSliderActive(true)
      }, 500)
   }

  return (
    <div className={`popup ${isActive ? 'active' : ''}`} ref={popupRef}>
      <div className="popup__body">
         <div className="popup__container">
            <div 
            onClick={(event) => onCLose(event)}
            className='popup__close'>
            </div>
            <p>преимущества</p>
            <h1>brend <span>xy</span></h1>
            <Slider isActive={isSliderActive}>
               {
                  numberOfSlide === 1 ? 
                  <Slide>
                     <div className="slide__elem">
                        <h3>01</h3>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur
                           adipiscing elit
                        </p>
                     </div>
                     <div className="slide__elem">
                        <h3>02</h3>
                        <p>Faucibus pulvinar elementum integer enim</p>
                     </div>
                     <div className="slide__elem">
                        <h3>03</h3>
                        <p>Faucibus pulvinar elementum integer enim</p>
                     </div>
                  </Slide> 
                  : 
                  <Slide> 
                     <div className="slide__elem">
                        <h3>04</h3>
                        <p>
                           Mi bibendum neque egestas congue quisque
                           egestas diam
                        </p>
                     </div>
                     <div className="slide__elem">
                        <h3>05</h3>
                        <p>Venenatis lectus magna fringilla urna</p>
                     </div>
                     <div className="slide__elem">
                        <h3>06</h3>
                        <p>Venenatis lectus magna fringilla urna</p>
                     </div>
                  </Slide>
               }
            </Slider>
            <div className="pagination">
               <img src={btn_prev} alt="left" onClick={handlePrevSlide}/>
               <div className="radio-block">
                  <input type="radio" name="slider" 
                  checked={numberOfSlide === 1 ? true : false}
                  value={1}
                  onChange={(e) => handleChangeSlide(e.target.value)}
                  />
                  <input type="radio" name="slider"
                  checked={numberOfSlide === 2 ? true : false}
                  value={2}
                  onChange={(e) => handleChangeSlide(e.target.value)}
                  />
               </div>
               <img src={btn_next} alt="right" onClick={handleNextSlide}/>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Popup