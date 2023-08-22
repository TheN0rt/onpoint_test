import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Popup from './Popup'

import bottle from '../img/bottle.png'
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import CustomBtn from './CustomBtn'
import plus from '../img/plus.png'

import rightBottomBlueBubble from '../img/bottomBlueBuble.png'
import leftBottomPinkBubble from '../img/leftBottomPinkBubble.png'
import leftBottomBlueBubbleMini from '../img/leftBottomBlueBubbleMinipng.png'
import rightBottomPinkBubble from '../img/rightBottomPinkBubble.png'
import rightBottomBlueBubbleMini from '../img/rightBottomBlueBubbleMini.png'
import leftTopPinkBubble from '../img/leftTopPinkBubble.png'
import rightTopBlueBubble from '../img/rightTopBlueBubble.png'
import rightTopBlueBubbleMini from '../img/rightTopBlueBubbleMini.png'

const SlideWithPopup = ({popupRef, resetCurrentIndex}) => {
   const [isPopupActive, setPopupActive] = useState(false)

   const handleOnClick = (event) => {
      event.preventDefault()
      setPopupActive(true)
   }

   const handleOnClose = (event) => {
      event.preventDefault()
      setPopupActive(false)
   } 

  return (
    <div className='slideWithPopup'>
      <Header resetCurrentIndex={resetCurrentIndex}/>
      <div className="container">
         <div className="flex">
            <div className="bottle">
               <img src={rightBottomBlueBubble} alt="bubble" />
               <img src={leftBottomPinkBubble} alt="bubble" />
               <img src={leftBottomBlueBubbleMini} alt="bubble" />
               <img src={rightBottomPinkBubble} alt="bubble" />
               <img src={rightBottomBlueBubbleMini} alt="bubble" />
               <img src={leftTopPinkBubble} alt="bubble" />
               <img src={rightTopBlueBubble} alt="bubble" />
               <img src={rightTopBlueBubbleMini} alt="bubble" />
               <img src={bottle} alt="bottle" />
            </div>
            <div className="text">
               <p>ключевое сообщение</p>
               <h1>brend <span>xy</span></h1>
               <div className="grid">
                  <div className="grid__elem">
                     <div className="grid__elem-text">
                        <img src={icon2} alt="icon" />
                        <p>
                           Ehicula ipsum a arcu
                           cursus vitae. Eu non
                           diam phasellus
                           vestibulum lorem sed
                           risus ultricies
                        </p>
                     </div>
                  </div>
                  <div className="grid__elem">
                     <div className="grid__elem-text">
                        <img src={icon1} alt="icon" />
                        <p>
                           A arcu <br />
                           cursus vitae
                        </p>
                     </div>
                  </div>
                  <div className="grid__elem">
                     <CustomBtn imgSrc={plus} text={"Подробнее"} 
                     onClick={handleOnClick}/>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <Footer/>

      <Popup onCLose={handleOnClose} popupRef={popupRef} isActive={isPopupActive}/>
    </div>
  )
}

export default SlideWithPopup
