import React from 'react';

import './PlayGameStyles/PlayGame-Style.scss'
import Header from '../Components/Header/Header';
import ListOfCitys from './GameSource/Components/ListOfCitys';


const PlayGame = () => {
  return (
    <>
     <Header/>
    <div className='Main-Container'>
       
       
       <ListOfCitys/>

        </div>


        </>
    
  )
}

export default PlayGame