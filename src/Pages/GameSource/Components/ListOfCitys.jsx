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
  const[shLists,setshLists]=useState([[],[],[],[],[]])

let count=1
  useEffect(() => {
    console.log(typeof count)
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
  

    

    let Lshuf1,Lshuf2,Lshuf3,Lshuf4,Lshuf5;
    
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
      
     





      


      const playIniti=()=>{
        
        setShuffeled(false);
        setShowMess(true);
       
        calculateRate();
      
        
      
        
      }

   
      

      //////create Calculate Rate for display Result
      const calculateRate=()=>{
   
       
        
          // for (let index = 1; index < shLists.length; index++) {
            // let[sh1,sh2,sh3,sh4,sh5]=shLists;
            //  console.log(sh1,sh2,sh3,sh4,sh5);
            let Lshf1=createShuffeledList()
            setshLists(shLists[0]=[...Lshf1])
            console.log('shLists[0]',shLists[0])
            console.log('this sh :',sh1)
            
            //console.log(sh1)
            



            //  randomArrays[index].randomList.length=0;
            //  let newArr=[...res];
            //  randomArrays[index].randomList.push(newArr)
            //  WOW Result Corrrrrrrrrect :)
            //  console.log(index, randomArrays[index].randomList)

            //  randomArrays[index].randomList;
            // console.log(index,res);
           
           

            
           // console.log(res,'res')
           // console.log(index,randomArrays[index].randomList);

            
          // }

        //   let shufList=randomArrays.map((key,value)=>{
        //     return(<>
        //     {randomArrays}
        //     <p></p>
        //     </>)
        //   })
        
        // console.log(shufList,'created by calculate Btn')
    // console.table('first',sh1)

      }

      const intRandomList=()=>{
        if (shLists[0].length==0) {
          return sh1;
        } else {
         return shLists[0]
        }

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
    <div  className='CityCol'>{(shuffelled?Cityes:sh1).map((val,index)=>{
        return(<>
        
        <motion.div transition={{duration:5}} animate={{y:shuffelled?860:0 } }>
            <p key={index}>{val.name}</p>
            </motion.div>
        </>)
    })}</div>



{/* List 2 of Display Results */}
    <div className='CityCol' style={{background:'blue'}} >{(shuffelled?Cityes:sh2).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:4}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>




{/* List 3 of Display Results */}
    <div className='CityCol' style={{background:'green'}}>{(shuffelled?Cityes:sh3).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:2}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>


{/* List 4 of Display Results */}
    <div className='CityCol' style={{background:'gray'}} >{(shuffelled?Cityes:sh4).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:7}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>

{/* List 5 of Display Results */}
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