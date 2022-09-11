import React from 'react'
import '../IranGift/iranGift-style.scss'
const IranGift = ({setShowIranGift}) => {
  return (
   <>
    <div className='iranGift-container'>
        <h1>ایران</h1>
        <h1>تبریک..!!</h1>
        <h3>شما برنده جایزه ویژه ما شدید!!</h3>
        <img src="https://img.freepik.com/premium-vector/you-win-lettering-pop-art-text-banner_185004-60.jpg" alt="" />
    <button className='btn btn-info' onClick={()=>{
        setShowIranGift(false)
    }}>OK</button>
    </div>
   
    </>
  )
}

export default IranGift