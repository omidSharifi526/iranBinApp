import React from 'react';
import {motion} from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart,faStar } from '@fortawesome/free-solid-svg-icons'

import './ListOfCity-Style.scss';
import { Cityes } from '../Data/GameInfo';
import { isDisabled } from '@testing-library/user-event/dist/utils';



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
    const [showmess,setShowMess]=useState(false);
    const [score,setScore]=useState(100)
    const [jun,setJun]=useState(100);
    const[rate,SetRate]=useState(0);
    


    let unshuffled = Cityes;
    

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


      let listCityShuffeled_5= unshuffled
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);



      


      const playIniti=()=>{
        setSpeed(false);
        setShowMess(true)
        setTimeout(() => {
            setScore(score+100)
            
        }, 7000);
        
      
        
      }

     
      
      const resetGameIniti=()=>{
        setSpeed(true)
        setJun(jun-10)
        setShowMess(false)
        

      }
      
    

   

  return (
    <>
    <div className='Play-Container'>
        


    <div className='GameInfo-container' >
        
    <div className='gameMessages-Container'>    
        <p className={showmess?'showMess':'notshowMess'}> امتیاز شما : { <FontAwesomeIcon style={{padding:'1'}} icon={faStar} color="yellow" />}  {score}</p>
        </div>
        
    <div className='PlayerInfo-Container'>
        
       




       <div className='userInfo-Container'>
       <div className='PlayerNameContainer'>
        
        <span>کاربر میهمان</span>
        :
        <FontAwesomeIcon style={{padding:'5'}} icon={faUser} color="black" />
        


        </div>
        <div className='junContainer'>
        <span className='disJun'> {jun}:</span>
        <FontAwesomeIcon style={{padding:'5',fontSize:15}} icon={faHeart} color="red" />
        </div>

        <div className='rateContainer'>
        {score}:
        <FontAwesomeIcon style={{padding:'5'}} icon={faStar} color="yellow" />
        
        </div>


       </div>

    </div>
    </div>

    <div className='cityCol-Container'>

    <div className='CityCol'>{(speed?Cityes:listCityShuffeled_1).map((val,index)=>{
        return(<>
        <motion.div transition={{duration:5}} animate={{y:speed?860:0 } }>
            <p key={index}>{val.name}</p>
            </motion.div>
        </>)
    })}</div>




    <div className='CityCol'>{(speed?Cityes:listCityShuffeled_2).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:4}} animate={{y:speed?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>





    <div className='CityCol'>{(speed?Cityes:listCityShuffeled_3).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:2}} animate={{y:speed?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>



    <div className='CityCol'>{(speed?Cityes:listCityShuffeled_4).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:7}} animate={{y:speed?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>

    <div className='CityCol'>{(speed?Cityes:listCityShuffeled_5).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:3}} animate={{y:speed?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>


    </div>


    <div className='playButtons-container'>
    <button className='btn btn-primary w-25 fs-6'  onClick={()=>{

     playIniti()}}>Shuffle

     </button>
     <button   className='btn btn-warning w-25 fs-6' onClick={()=>{
        resetGameIniti()
     }} >
        {jun==100?'Start Game':"Please Sort again"}</button>

     <button className='btn btn-danger w-25 fs-6 ' onClick={()=>{}}>Exit</button>

    </div>




    </div>
   
    </>
  )
}

export default ListOfCitys