import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './mainSlider.scss'

const MainSlider = () => {
  return (
    <Swiper className='main-frame-slider'
    spaceBetween={50} Autoplay={true}
    slidesPerView={3} onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}>
    <SwiperSlide>esfahan</SwiperSlide>
    <SwiperSlide>shairaz</SwiperSlide>
    <SwiperSlide>lorestan</SwiperSlide>
    <SwiperSlide>Kordestan</SwiperSlide>
    ...
  </Swiper>
  )
}

export default MainSlider