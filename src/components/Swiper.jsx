import React, { useRef, useState } from 'react'
import SlideWithCustomScroll from './SlideWithCustomScroll'
import Home from './Home'
import SlideWithPopup from './SlideWithPopup'

const Swiper = () => {
  const [touchPosition, setTouchPosition] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef(null)
  const popupRef = useRef(null)

  const resetCurrentIndex = () => {
    setCurrentIndex(0)
  }

  const nextSlide = (event) => {
    event.preventDefault()
    setCurrentIndex(1)
  }

  const handleNext = () => {
    if(currentIndex < 2){
      setCurrentIndex((prevIndex) => (prevIndex + 1));
    }
 };

 const handlePrev = () => {
  if(currentIndex > 0){
    setCurrentIndex((prevIndex) => (prevIndex - 1));
  }
 };

 const handleTouchStart = (e) => {
  const touchDown = e.touches[0].clientX
  setTouchPosition(touchDown)
}

  const handleTouchMove = (event) => {
   if(event.target === scrollRef.current || event.target === popupRef.current) return
   const touchDown = touchPosition

   if(touchDown === null) {
      return
    }

   const currentTouch = event.touches[0].clientX
   const diff = touchDown - currentTouch

   if (diff > 5) {
     handleNext();
   } else if (diff < -5) {
     handlePrev();
   }

   setTouchPosition(null)
 };

  return (
    <div className="swiper-container">
        <div className="swiper-wrapper">
            <div className="swiper-content-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove} >
                <div className="swiper-content"
                style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                  <Home nextSlide={nextSlide} resetCurrentIndex={resetCurrentIndex}/>
                  <SlideWithCustomScroll scrollRef={scrollRef} 
                  resetCurrentIndex={resetCurrentIndex}/>
                  <SlideWithPopup popupRef={popupRef} 
                  resetCurrentIndex={resetCurrentIndex}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Swiper