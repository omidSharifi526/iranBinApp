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
  
  
  




const ListOfCitys = ({playerName,citySelected}) => {

    const [shuffelled,setShuffeled]=useState(true);
    let pName=playerName;
    let CitySels=citySelected;





    
    // console.log('StandadArr',standardArr);
    // console.log('Shuffle Arr',shuffleArr);
    const [showmess,setShowMess]=useState(false);
    const [score,setScore]=useState(0)
    const [jun,reduceJun]=useState(['1','2','3','4','5','6','7','8','9','10']);
    console.log('isjun',jun)
    // const[rate,SetRate]=useState(0);





    


  
    

   
  // console.log(listCityShuffeled_1)

 

      
      
     





      


      const playIniti=()=>{
        
        setShuffeled(false);
        setShowMess(true);
        createShuffeledList();
      
        
      
        
      }


      const createShuffeledList=()=>{
        let shufelled=Cityes
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
        // console.log(shufelled);
        return shufelled;

      }

      let sh1=createShuffeledList();
      let sh2=createShuffeledList();
      let sh3=createShuffeledList();
      let sh4=createShuffeledList();
      let sh5=createShuffeledList();
   




     

     
      
      const resetGameIniti=()=>{
        setShuffeled(true)
        // setJun(jun-10)
        // setShowMess(false)
        

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
                 <span >  <FontAwesomeIcon icon={faUser} color="black" />  {pName} </span>
                <span>استان شما:{CitySels}</span>
              
                </div>



                    <div className='junContainer'>
                   {jun.map((val,index)=>{
                    return(<>
                      <FontAwesomeIcon style={{padding:'5',fontSize:15}} icon={faHeart} color="red" />
                    </>)

                   })}
                  
                    </div>

                    <div className='rateContainer'>
                    <span className='rateDisplay'>امتیاز شما:</span>
                    {score}
                   
                    </div>


       </div>

    </div>
    </div>

    <div className='cityCol-Container'>

    <div className='CityCol'>{(shuffelled?Cityes:sh1).map((val,index)=>{
        return(<>
        <motion.div transition={{duration:5}} animate={{y:shuffelled?860:0 } }>
            <p key={index}>{val.name}</p>
            </motion.div>
        </>)
    })}</div>




    <div className='CityCol'>{(shuffelled?Cityes:sh2).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:4}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>





    <div className='CityCol' style={{background:'green'}}>{(shuffelled?Cityes:sh3).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:2}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>



    <div className='CityCol' style={{background:'gray'}} >{(shuffelled?Cityes:sh4).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:7}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>

    <div className='CityCol' style={{background:'red'}}>{(shuffelled?Cityes:sh5).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:3}} animate={{y:shuffelled?860:0} }>
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