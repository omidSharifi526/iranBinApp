
import '../GameRules/GameRules-style.scss';
import React from 'react';
import { useState } from 'react';
import { faEdit,faThumbsUp,faCoins,faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GameRules = () => {
    const[show,setShow]=useState(true);
  return (
    <div className={show?' showRules gameRules-container':'notshowRules'}>

        <div className='rulesTexts-Container'>
            <p className='rulesText-title badge fs-6 border-1 '>قواعد بازی <FontAwesomeIcon style={{padding:'10px'}} icon={faCoins} color='white' /></p>
           
            
            <div className='rulesText-detail-container'>
               
               
                
               
                <ul>
                    <li>  <p className='rulesText-detail'> شما به صورت پیش فرض 100 امتیاز دارید  </p></li>
                    <li> <p className='rulesText-detail'>با انجام هر مرحله 10 امتیاز کسر خواهد شد</p></li>
                    <li><p className='rulesText-detail'>در صورت وجود نام استان شما در هرکدام از ردیف های وسط به تعداد تکرار 10 امتیاز به شما اضافه خواهد شد</p></li>
                    <li> <p className='rulesText-detail'>درصورت تکرار نام استان شما در همه ردیف ها برنده جایزه بزرگ ما خواهید شد </p></li>
                    <li><p className='rulesText-detail'>در صورت وجود نام مقدس ایران اسلامی شما برنده جایزه ویژه ما خواهید شد</p>
                    </li>
                </ul>
            </div>

        </div>


        <div className='rulesBtn-Container'>
            <button className='btn btn-warning' onClick={()=>{
       setShow(false)
        }}><span ><FontAwesomeIcon icon={faThumbsUp}/></span> بزن بریم</button>
        </div>
    </div>
  )
}

export default GameRules