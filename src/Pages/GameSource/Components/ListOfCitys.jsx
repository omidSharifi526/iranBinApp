import React from 'react';
import {motion} from 'framer-motion';
import { useState } from 'react';

import './ListOfCity-Style.scss';
import { Cityes } from '../Data/GameInfo';



// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {
  
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
//   }



// let standardArr[]=Cityes[];
// let shuffleArr=shuffle(Cityes);





  
  // Used like so
  
  
  




const ListOfCitys = () => {

    const [speed,setSpeed]=useState(false);
    // console.log('StandadArr',standardArr);
    // console.log('Shuffle Arr',shuffleArr);

    let unshuffled = Cityes

    let listCityShuffeled_1= unshuffled
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
   
  // console.log(listCityShuffeled_1)

  let listCityShuffeled_2= unshuffled
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

      let listCityShuffeled_3= unshuffled
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

      
      let listCityShuffeled_4= unshuffled
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

       console.log()
      console.log(listCityShuffeled_1[0].name,listCityShuffeled_2[0].name)
        
      
    

   

  return (
    <>
    <div className='Play-Container'>

    <div className='cityCol-Container'>

    <div className='CityCol'>{listCityShuffeled_1.map((val,index)=>{
        return(<>
        <motion.div transition={{duration:5}} animate={{y:speed?860:0 } }>
            <p key={index}>{val.name}</p>
            </motion.div>
        </>)
    })}</div>




    <div className='CityCol'>{listCityShuffeled_2.map((val,index)=>{
        return(<>
            <motion.div transition={{duration:4}} animate={{y:speed?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>





    <div className='CityCol'>{listCityShuffeled_3.map((val,index)=>{
        return(<>
            <motion.div transition={{duration:2}} animate={{y:speed?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>



    <div className='CityCol'>{listCityShuffeled_4.map((val,index)=>{
        return(<>
            <motion.div transition={{duration:7}} animate={{y:speed?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>


    </div>


    <div className='playButtons-container'>
    <button className='btn btn-primary w-25 fs-6' onClick={()=>{

     setSpeed(true)}}>Play Now

     </button>
     <button   className='btn btn-warning w-25 fs-6' onClick={()=>{
        setSpeed(false)
     }} >
        Reset Game</button>

     <button className='btn btn-danger w-25 fs-6 ' onClick={()=>{window.location.reload()}}>Exit</button>

    </div>




    </div>
   
    </>
  )
}

export default ListOfCitys