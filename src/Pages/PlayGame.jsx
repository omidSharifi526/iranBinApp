import React from 'react';

import './PlayGameStyles/PlayGame-Style.scss'
import Header from '../Components/Header/Header';
import ListOfCitys from './GameSource/Components/ListOfCitys';


const PlayGame = () => {
  return (
    <>
     <Header/>
    <div className='Main-Container'>
       
       
       <div className='City-Container'>
       <ListOfCitys/>

       </div>
       

       {/* <button className='btn btn-danger '>Play Now</button> */}
      
       

        </div>


        </>
    
  )
}

export default PlayGame