import React from 'react';
import { useState } from 'react';

import './PlayGameStyles/PlayGame-Style.scss'
import Header from '../Components/Header/Header';
import ListOfCitys from './GameSource/Components/ListOfCitys';
import GetUserInfo from '../Components/GetUserInfo/GetUserInfo';
import GameRules from '../Components/GameRules/GameRules';
import EndGame from './GameSource/Components/EndGame/EndGame';
import IranGift from './GameSource/Components/IranGift/IranGift';


const PlayGame = () => {

  const[getInfo,setGetInfo]=useState(true);
  const [playerName,setPlayerName]=useState('');
  const [citySelected,setCitySelected]=useState('');
  const[rulesGameShow,setrulesGameShow]=useState(false);
  const[endGame,setEndGameShow]=useState(false);
  const[showIranGift,setShowIranGift]=useState(false)

 // let flagss=false

  return (
    <>
    
    {getInfo && <GetUserInfo gamerulesChanger={setrulesGameShow} usernameChanger={setPlayerName} stateChanger={setGetInfo} setCitySelected={setCitySelected} />}
    { rulesGameShow &&<GameRules/>}
    {showIranGift && <IranGift setShowIranGift={setShowIranGift}/>}
    {endGame && <EndGame  setEndGameShow={setEndGameShow} playerName={playerName} />}

     {/* <Header Userame={playerName}/> */}
    <div className='Main-Container'>
    
       
       <div className='City-Container'>
        
       <ListOfCitys setShowIranGift={setShowIranGift} setEndGameShow={setEndGameShow} playerName={playerName} citySelected={citySelected} />

       </div>
       

       {/* <button className='btn btn-danger '>Play Now</button> */}
      
       

        </div>


        </>
    
  )
}

export default PlayGame