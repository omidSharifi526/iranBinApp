import React from 'react';
import {motion} from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart,faStar,faPlay,faRepeat } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


import './ListOfCity-Style.scss';
import { Cityes } from '../Data/GameInfo';
import { Link } from 'react-router-dom';


const ListOfCitys = ({setShowIranGift,setEndGameShow,playerName,citySelected}) => {
  let pName=playerName;
  let CitySels=citySelected;
  
  const [userName,setUserName]=useState('')
  const [citySelectedDoGet,setcitySelectedDoGet]=useState('');
  const [shuffelled,setShuffeled]=useState(true);
  const [score,setScore]=useState(0);

 
  const [jun,reduceJun]=useState(['','','','','','','','','','']);
  const[countRound,setCountRound]=useState(10);
  const [showmess,setShowMess]=useState(false);
  const[countRender,setcountRender]=useState(0);
  const[iranFlag,setIranFlag]=useState(true);


  const[sortL1,setsortL1]=useState([...Cityes]);
 


  const[shL1,setshL1]=useState([]);
  const[shL2,setshL2]=useState([]);
  const[shL3,setshL3]=useState([]);
  const[shL4,setshL4]=useState([]);
  const[shL5,setshL5]=useState([]);



  

/////قراردادن اطلاعات در صفحه اصلی
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


  
  
///////     createShuffeledList         //////////
    const createShuffeledList=()=>{
      let shufelled=Cityes
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
      // console.log(shufelled);
      return shufelled;
       

    }

    
 

   
      
    const createInitshuffleLists=()=>{

    

      let SHL1Created= createShuffeledList();
      let SHL2Created=createShuffeledList();
      let SHL3Created=createShuffeledList();
      let SHL4Created=createShuffeledList();
      let SHL5Created=createShuffeledList();

      setshL1([...SHL1Created])
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

      
      let currentRate=0;
      let iranNameFlag=false;
      let myCitys=[SHL1Created[1].name,SHL2Created[1].name,SHL3Created[1].name,SHL4Created[1].name,SHL5Created[1].name];
     console.log(SHL1Created[1].name,SHL2Created[1].name,SHL3Created[1].name,SHL4Created[1].name,SHL5Created[1].name)
      for (let index = 0; index < myCitys.length; index++) {
         if (myCitys[index]==citySelectedDoGet) {
       
          currentRate++;
        //  console.log(currentRate)
        
         }
         if (myCitys[index]==='ایران') {
          console.log('iranflagTrue',myCitys[index])
          setIranFlag(true)
          console.log('myCitys[index]',myCitys[index])
         setTimeout(() => {
          setShowIranGift(true)
         }, 7000);
         }
        
      }

      setScore(currentRate);
      // console.log(score)
    
      
   
      

   
    }
     





      

/////PlayButtonnnnnnnnnnnnn
      const playIniti=()=>{
        
        setShuffeled(false);
        setShowMess(true);

       createInitshuffleLists()
      
        
      
        
      }

      ///Resort Button
      const resetGameIniti=()=>{
        setShowMess(false);
        setShuffeled(true);
        updateHeart(score);
        setScore(0)
       
       
        
        
        
  
      }

   
      

      //////create Calculate Rate for display Result
     

  


     
   


      
     
     
      const updateHeart=(score)=>{
        
        console.log('score',score)
      if (score) {

        for (let index = 0; index < score+1 ; index++) {
          jun.push('')
          
        }
       
       
      } else {
        jun.slice(0,jun.length-1);
      
      }

       if (jun.length>=2) {
        reduceJun(existingItems => {
          return existingItems.slice(0, existingItems.length - 1)
        
        })
       }
       else{
        setEndGameShow(true)


      }
        
      }

      
   
//////////////End OFFFFFFF Functionality
  return (
    <>
    <div className='Play-Container'>
        


    <div className='GameInfo-container' >
        
    <div className={showmess?'showMess':'notshowMess'}>    
       {score} X  <FontAwesomeIcon className='jun' icon={faStar} color="yellow" />
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
                   <span> <FontAwesomeIcon className='jun' icon={faStar} color="yellow" /></span>
                    </>)

                   })}
                   {jun.length} 
                  
                    </div>



                    {/* <div className='rateContainer'>
                    <span className='rateDisplay'>امتیاز شما:</span>
                    {score}
                   
                    </div> */}


       </div>

    </div>
    </div>

{/* create Elament of Game!!!!!!!!! */}



    <div className='cityCol-Container'>


{/* List 1 of Display Results */}
    <div  className='CityCol'>{(shuffelled?sortL1:shL1).map((val,index)=>{
        return(<>
        <motion.div transition={{duration:shuffelled?3:4}} animate={{y:shuffelled?860:0 } }>
            <p key={index}>{val.name}</p>
            </motion.div>
        </>)
    })}</div>



{/* List 2 of Display Results */}
    <div className='CityCol' style={{background:'blue'}} >{(shuffelled?sortL1:shL2).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:shuffelled?5:4}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>




{/* List 3 of Display Results */}
    <div className='CityCol' style={{background:'green'}}>{(shuffelled?sortL1:shL3).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:shuffelled?4:2}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>


{/* List 4 of Display Results */}
    <div className='CityCol' style={{background:'gray'}} >{(shuffelled?sortL1:shL4).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:shuffelled?4:3}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>

{/* List 5 of Display Results */}
    <div className='CityCol' style={{background:'red'}}>{(shuffelled?sortL1:shL5).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:shuffelled?4:3}} animate={{y:shuffelled?860:0} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>


    </div>


    <div className='playButtons-container'>
   
   <button disabled={!shuffelled}    className='PlayBtn btn'  onClick={()=>{

   playIniti()}}><FontAwesomeIcon className='PlayIcon' color='black' icon={faPlay}/>

   </button>
   
     <button  disabled={shuffelled}   className='repeatBtn btn' onClick={()=>{
        resetGameIniti()
     }} >
        <FontAwesomeIcon color='black' icon={faRepeat}/>
        </button>
       
    
    <button className='ExitBtn btn ' onClick={()=>{
     
    }}> <Link style={{textDecoration:'none'}} className='' to='/'><span>خروج</span></Link>
    </button>
    

    </div>




    </div>
   
    </>
  )
}

export default ListOfCitys