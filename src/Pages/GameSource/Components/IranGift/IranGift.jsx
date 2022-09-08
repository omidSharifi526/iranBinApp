import React from 'react'
import '../IranGift/iranGift-style.scss'
const IranGift = ({setShowIranGift}) => {
  return (
   <>
    <div className='iranGift-container'>
        <h1>ایران</h1>
        <h1>تبریک..!!</h1>
        <h3>شما برنده جایزه ویژه ما شدید!!</h3>
    <button className='btn btn-info' onClick={()=>{
        setShowIranGift(false)
    }}>OK</button>
    </div>
   
    </>
  )
}

export default IranGift