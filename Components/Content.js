import React, { useState } from 'react'
import car1 from '../Assets/car1.jpeg';
import car2 from '../Assets/car2.jpeg';
import car3 from '../Assets/car3.jpeg';
import car4 from '../Assets/car4.jpeg';
import car5 from '../Assets/car5.jpeg';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../Styles/Content.css';
const images = [car1,car2,car3,car4,car5];

const Content = () => {
  const [current,setCurrent] = useState(0);

  const prevSlide = () =>{
    setCurrent(current===images.length-1 ? 0:current+1);
  }
  const nextSlide = () =>{
    setCurrent(current===0?images.length-1:current-1);
  }
  return (
    <div>
      <div className='slider'>
      <div className='left-arrow' onClick={prevSlide}><ArrowBackIosNewIcon/></div>
      <div className='right-arrow' onClick={nextSlide}><ArrowForwardIosIcon /></div>
      <img src={images[current]} alt={`car${current + 1}`} />
      </div>
      
    </div>
  )
}

export default Content;