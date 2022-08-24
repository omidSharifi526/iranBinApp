import React from 'react';
import SwiperCore, { Autoplay,EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { CityData } from './SliderSource/Source/data';

// Import Swiper styles
import 'swiper/css';
import './mainSlider.scss'

const MainSlider = () => {
  SwiperCore.use([Autoplay,EffectFade]);
 
  return (
    <Swiper   
      className='main-frame-slider'  
        
      autoplay={{
      delay: 5000,
      disableOnInteraction: false,
      Transition:true
  }}
    effect={EffectFade}
    spaceBetween={0}  
    slidesPerView={1} onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}>
   {
    CityData.map((val,key)=>{
     // console.log(val,key)
      return(<>
      <SwiperSlide className='sliderFram' key={key}>
        <p className='sliderTitle'>{val.name}</p>
        <img className='slider-imgs' src={val.imgSrc} key={val.id} />
        <span className='slider-descript  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, nostrum!</span>
      </SwiperSlide>
      
      </>)

    })
   }
  </Swiper>
  )
}

export default MainSlider