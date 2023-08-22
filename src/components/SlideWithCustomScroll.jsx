import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

import rightBottomSpermMini from '../img/rightBottomSpermMini.png'
import rightBottomSperm from '../img/rightBottomSperm.png'
import centerSperm from '../img/centerSperm.png'
import topRightSperm from '../img/topRightSperm.png'
import topRightSpermMini from '../img/topRightSpermMini.png'

const SlideWithCustomScroll = ({scrollRef, resetCurrentIndex}) => {
   const [currentY, setCurrentY] = useState(null)
   const [delayY, setDelayY] = useState(null)
   const [newY, setNewY] = useState(null)

   const handleTouchStart = (event) => {
      currentY ? setCurrentY(currentY) : setCurrentY(event.touches[0].pageY)
   }

   const handlTouchMove = (event) => {
      const newCurrentY = event.touches[0].pageY - currentY
      if(newCurrentY > 333 || event.touches[0].pageY < 280){
         return
      } else setDelayY(newCurrentY)
   }

   const handleTouchEnd = () => {
      setNewY(delayY)
   }

  return (
    <div className='slideWithCustomScroll'>
      <Header resetCurrentIndex={resetCurrentIndex}/>
      <div className="container">
         <h3>текст <br />сообщения</h3>
         <div className="flex">
            <div className="scroll">
               <button className='scroll__btn' 
               ref={scrollRef}
               onTouchStart={handleTouchStart}
               onTouchMove={handlTouchMove}
               onTouchEnd={handleTouchEnd}
               style={{transform: `translateY(${delayY}px)`}}></button>
               <div className="scroll__line"></div>
            </div>
            <div className="text">
               <div className="text__container"
               style={{transform: `translateY(${delayY ? -delayY : -newY}px)`}}>
                  <p>
                     <span>Lorem ipsum dolor sit amet, </span>
                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
                     tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget
                     felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
                     dignissim diam quis enim lobortis. Est sit amet facilisis magna.
                     Neque laoreet suspendisse interdum consectetur libero id.
                     Nec ullamcorper sit amet risus nullam eget felis eget.
                     Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.
                     Euismod quis viverra nibh cras puivinar mattis nunc.
                     Massa massa ultricies mi quis. Sit amet massa vitae tortor
                     condimentum lacinia. Et malesuada fames ac turpis egestas
                     integer eget. Elementum pulvinar etiam non quam lacus suspendisse
                     faucibus interdum posuere.
                  </p>
                  <p>
                     Amet justo donec enim diam vulputate ut pharetra sit.
                     Risus ultricies tristique nulla aliquet enim tortor at auctor.
                     Velit sed ullamcorper morbi tincidunt ornare massa.
                     Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim
                     diam quis enim. Gravida neque convallis a cras. Ut enim blandit
                     volutpat maecenas volutpat. Mauris sit amet massa vitae tortor
                     condimentum lacinia quis vel.
                  </p>
               </div>
            </div>
         </div>
      </div>
      <img src={topRightSpermMini} alt="img" />
      <img src={topRightSperm} alt="img" />
      <img src={centerSperm} alt="img" />
      <img src={rightBottomSperm} alt="img" />
      <img src={rightBottomSpermMini} alt="img" />
      <Footer/>
    </div>
  )
}

export default SlideWithCustomScroll