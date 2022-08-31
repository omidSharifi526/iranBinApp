import React from 'react';
import { useState } from 'react';

import './PlayGameStyles/PlayGame-Style.scss'
import Header from '../Components/Header/Header';
import ListOfCitys from './GameSource/Components/ListOfCitys';
import GetUserInfo from '../Components/GetUserInfo/GetUserInfo';


const PlayGame = () => {

  const[getInfo,setGetInfo]=useState(true);
  const [playerName,setPlayerName]=useState('');
  const [citySelected,setCitySelected]=useState('')

  let flagss=false

  return (
    <>
    {getInfo && <GetUserInfo usernameChanger={setPlayerName} stateChanger={setGetInfo} setCitySelected={setCitySelected} />}


     <Header/>
    <div className='Main-Container'>
       
       
       <div className='City-Container'>
       <ListOfCitys playerName={playerName} citySelected={citySelected} />

       </div>
       

       {/* <button className='btn btn-danger '>Play Now</button> */}
      
       

        </div>


        </>
    
  )
}

export default PlayGame