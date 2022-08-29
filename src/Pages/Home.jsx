import React from 'react';
import Header from "../Components/Header/Header";
import MainSlider from "../Components/ContentfirstPage/MainSlider/MainSlider";
import {useState} from 'react'




function Home() {

  const [logined,setLogined]=useState(true);


  if (logined) {
    return (
      <div>
          <Header/>
          <MainSlider/>
      </div>
    )
  } else {
    return (
      <>
       <div>
        
       </div>
      </>
    )
  }


  return (
    <div>
        <Header/>
        <MainSlider/>
    </div>
  )
}

export default Home