import React from 'react';
import {motion} from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart,faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

import './ListOfCity-Style.scss';
import { Cityes } from '../Data/GameInfo';
// import { isDisabled } from '@testing-library/user-event/dist/utils';




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
  let pName=playerName;
  let CitySels=citySelected;


 



  const [userName,setUserName]=useState('')
  const [citySelectedDoGet,setcitySelectedDoGet]=useState('');
  const [shuffelled,setShuffeled]=useState(true);
  const [score,setScore]=useState(0);
  const [jun,reduceJun]=useState(['1','2','3','4','5','6','7','8','9','10']);
  const[countRound,setCountRound]=useState(10);
  const [showmess,setShowMess]=useState(false);
  const[countRender,setcountRender]=useState(0);


  const[sortL1,setsortL1]=useState([...Cityes]);
  const[sortL2,setsortL2]=useState([...Cityes]);
  const[sortL3,setsortL3]=useState([...Cityes]);
  const[sortL4,setsortL4]=useState([...Cityes]);
  const[sortL5,setsortL5]=useState([...Cityes]);



  const[shL1,setshL1]=useState([]);
  const[shL2,setshL2]=useState([]);
  const[shL3,setshL3]=useState([]);
  const[shL4,setshL4]=useState([]);
  const[shL5,setshL5]=useState([]);



  useEffect(() => {
    
    
  
    return () => {
      
    }
  }, [])
  


  useEffect(() => {
   
    if (countRender==0 && pName=='' && CitySels=='' ) {
      setUserName('کاربر میهمان')
      setcitySelectedDoGet('-')
      setCountRound(countRender)

    } 
    else if(pName!='' && CitySels!='') {
      setUserName(pName);
      setcitySelectedDoGet(CitySels);
     
    }

  }, [playerName])


  
  
  

    

    
    
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
      setShuffeled(true);
      updateHeart();
      calculateRate();
      
      // setJun(jun-10)
      // setShowMess(false)
      

    }
      
    const createInitshuffleLists=()=>{

      let SHL1Created=createShuffeledList();
      let SHL2Created=createShuffeledList();
      let SHL3Created=createShuffeledList();
      let SHL4Created=createShuffeledList();
      let SHL5Created=createShuffeledList();
      
      
      setshL1(
        [...SHL1Created]
      );
      setshL2(
        [...SHL2Created]
      );
      setshL3(
        [...SHL3Created]
      );
      setshL4(
        [...SHL4Created]
      );
      setshL5(
        [...SHL5Created]
      );
      // console.log('SHL1Created',SHL1Created[1]==citySelectedDoGet);
      // console.log('SHL2Created',SHL2Created);
      // console.log('SHL3Created',SHL3Created);
      // console.log('SHL4Created',SHL4Created);
      // console.log('SHL5Created',SHL5Created);
    }
     





      


      const playIniti=()=>{
        
        setShuffeled(false);
        setShowMess(true);
       
       createInitshuffleLists()
      
        
      
        
      }

   
      

      //////create Calculate Rate for display Result
      const calculateRate=()=>{
   
       
        



           

      }

  


     
   


      
     
     let heartCnt=10;
      const updateHeart=()=>{
       heartCnt--;
       if (jun.length>=2) {
        reduceJun(existingItems => {
          return existingItems.slice(0, existingItems.length - 1)
        
        })
       }
        
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
{/*create PlayerName AND City Selected row informations & Wellcome */}
                <div className='PlayerNameContainer'>  
                 <span >  <FontAwesomeIcon icon={faUser} color="black" />  {userName} عزیز خوش آمدی </span>
                <span>استان شما:{citySelectedDoGet}</span>
              
                </div>

{/*create PlayerName row informations & Wellcome */}

                    <div className='junContainer'>
                   {jun.map((val,index)=>{
                    return(<>
                    <FontAwesomeIcon icon={faHeart} color="red" />
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

{/* create Elament of Game!!!!!!!!! */}



    <div className='cityCol-Container'>


{/* List 1 of Display Results */}
    <div  className='CityCol'>{(shuffelled?sortL1:shL1).map((val,index)=>{
        return(<>
        <motion.div transition={{duration:shuffelled?9:6}} animate={{y:shuffelled?860:0 } }>
            <p key={index}>{val.name}</p>
            </motion.div>
        </>)
    })}</div>



{/* List 2 of Display Results */}
    <div className='CityCol' style={{background:'blue'}} >{(shuffelled?sortL2:shL2).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:shuffelled?11:4}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>




{/* List 3 of Display Results */}
    <div className='CityCol' style={{background:'green'}}>{(shuffelled?sortL3:shL3).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:shuffelled?7:2}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>


{/* List 4 of Display Results */}
    <div className='CityCol' style={{background:'gray'}} >{(shuffelled?sortL4:shL4).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:shuffelled?12:7}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>

{/* List 5 of Display Results */}
    <div className='CityCol' style={{background:'red'}}>{(shuffelled?sortL1:shL5).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:shuffelled?10:3}} animate={{y:shuffelled?860:0} }>
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