import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CityData } from './SliderSource/Source/data';

// Import Swiper styles
import 'swiper/css';
import './mainSlider.scss'

const MainSlider = () => {
  console.log(CityData)
  return (
    <Swiper className='main-frame-slider'
    spaceBetween={50} autoplay pagination
    slidesPerView={1} onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}>
   {
    CityData.map((val,key)=>{
      console.log(val,key)
      return(<>
      <SwiperSlide className='sliderFram' key={key}>
        <p className='sliderTitle'>{val.name}</p>
        <img className='slider-imgs' src={val.imgSrc} key={val.id} />
      </SwiperSlide>
      
      </>)

    })
   }
  </Swiper>
  )
}

export default MainSlider