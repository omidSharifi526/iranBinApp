
import '../GameRules/GameRules-style.scss';
import React from 'react';
import { useState } from 'react';
import { faEdit,faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GameRules = () => {
    const[show,setShow]=useState(true);
  return (
    <div className={show?' showRules gameRules-container':'notshowRules'}>

        <div className='rulesTexts-Container'>
            <p className='rulesText-title badge fs-6 border-1 '>قواعد بازی</p>
            <div className='rulesText-detail-container'>
                <p className='rulesText-detail'>قانون 1</p>
                <p className='rulesText-detail'>قانون2</p>
                <p className='rulesText-detail'>قانون3</p>
                <p className='rulesText-detail'>قانون4</p>
                <p className='rulesText-detail'>قانون5</p>
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