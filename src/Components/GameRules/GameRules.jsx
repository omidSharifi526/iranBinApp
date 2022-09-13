
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
            <p className='rulesText-title badge fs-2 mt-2 '> Rules of the game <FontAwesomeIcon style={{padding:'10px'}} icon={faCoins} color='white' /></p>
           
            
            <div className='rulesText-detail-container'>
                <ul>
                    <li>  <p className='rulesText-detail'>-You have 10 points by default </p></li>
                    <li> <p className='rulesText-detail'>-One Point will be deducted for each step</p></li>
                    <li><p className='rulesText-detail'>-If there is the name of your province in each of the middle rows, 1 point will be added to the number of repetitions</p></li>
                    <li> <p className='rulesText-detail'>-If you repeat the name of your province in all rows, you will win our grand prize</p></li>
                    <li><p className='rulesText-detail'>-If there is a holy name of Islamic Iran, you will win our special prize</p>
                    </li>
                </ul>
            </div>

        </div>


        <div className='rulesBtn-Container'>
            <button className='btn btn-warning w-25 p-1 fs-3 fw-600' onClick={()=>{
       setShow(false)
        }}><span ><FontAwesomeIcon icon={faThumbsUp}/></span>Let's go  </button>
        </div>
    </div>
  )
}

export default GameRules