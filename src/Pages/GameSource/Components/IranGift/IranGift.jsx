import React from 'react'
import '../IranGift/iranGift-style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import img from '../IranGift/img/recivePrize.jpg'
const IranGift = ({setShowIranGift}) => {
  return (
   <>
    <div className='iranGift-container'>
        <h1>Iran</h1>
       
     
        <img src={img} alt="" />
    <button className='btn btn-primary w-25' onClick={()=>{
        setShowIranGift(false)
    }}><FontAwesomeIcon size={'2x'} icon={faThumbsUp}/></button>
    </div>
   
    </>
  )
}

export default IranGift