import React from 'react';
import '../ContentfirstPage/MainContent.scss'
import mainImage from '../../Imgs/favicon.png';
import safiranLogo from '../../Imgs/safi.jpg'

const MainContent = () => {
  return (
    <div className='Container'>
    
    <img className='mLogo-fPage' src={mainImage}  alt="like icon"/>
    <p className='sarv-p'>Sarv Bonyan Adabi .co</p>
    <span className='ibspam'>
        IranBinApp 
    </span>
    <span className='com-spam'>Coming Soon ...</span>
    <i class="fa-solid fa-gear"></i>
    <img className='safiran-img' src={safiranLogo} alt="" />


    </div>
  )
}

export default MainContent