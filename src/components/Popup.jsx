import React, { useState } from 'react'
import btn_prev from '../img/btn_prev.png'
import btn_next from '../img/btn_next.png'
import Slider from './Slider'
import Slide from './Slide'

const Popup = ({onCLose, popupRef, isActive}) => {
   const [numberOfSlide, setNumber] = useState(1)
   const [isSliderActive, setSliderActive] = useState(true)

   const handleNextSlide = () => {
      setSliderActive(false)
      if(numberOfSlide < 2) {
         setTimeout(() => {
            setNumber((prev) => prev+1)
            setSliderActive(true)
         }, 500)
      }
   }
   
   const handlePrevSlide = () => {
      setSliderActive(false)
      if(numberOfSlide > 1) {
         setTimeout(() => {
            setNumber((prev) => prev-1)
            setSliderActive(true)
         }, 500)
      }
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
                  checked={numberOfSlide === 1 ? "active" : null}
                  onClick={() => setNumber(1)}/>
                  <input type="radio" name="slider"
                  checked={numberOfSlide === 2 ? "active" : null}
                  onClick={() => setNumber(2)}/>
               </div>
               <img src={btn_next} alt="right" onClick={handleNextSlide}/>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Popup