import React from 'react';
import {motion} from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart,faStar,faPlay,faRepeat,faCity } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import imgSample from '../Data/Imgs/Nature.jpg';


// import img from '../Data/GameIn'

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
  const[iranflagConter,setiranFlagConter]=useState(0);

 
  const [jun,reduceJun]=useState(['','','','','','','','','','']);
  const[countRound,setCountRound]=useState(10);
  const [showmess,setShowMess]=useState(false);
  const[countRender,setcountRender]=useState(0);
  const[iranFlag,setIranFlag]=useState(false);
  const [maskTop,setMaskTop]=useState(false);
  const[maskBottom,setMaskBottom]=useState(false);


  const[sortL1,setsortL1]=useState([...Cityes]);
 


  const[shL1,setshL1]=useState([]);
  const[shL2,setshL2]=useState([]);
  const[shL3,setshL3]=useState([]);
  const[shL4,setshL4]=useState([]);
  const[shL5,setshL5]=useState([]);
  const[listCitys,setListCiys]=useState([]);



  

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
      let iranNameNumber=0;
      let myCitys=[SHL1Created[1].name,SHL2Created[1].name,SHL3Created[1].name,SHL4Created[1].name,SHL5Created[1].name];
      setListCiys(myCitys);
     console.log(SHL1Created[1].name,SHL2Created[1].name,SHL3Created[1].name,SHL4Created[1].name,SHL5Created[1].name)
      for (let index = 0; index < myCitys.length; index++) {
         if (myCitys[index]==citySelectedDoGet) {
       
          currentRate++;
        //  console.log(currentRate)
        
         }
         if (myCitys[index]==='Iran') {
          console.log('iranflagTrue',myCitys[index])
          iranNameNumber=iranNameNumber+1;
          setIranFlag(true)
          console.log('myCitys[index]',myCitys[index])
        
         }

         setiranFlagConter(iranNameNumber)


         

        
      }
      
      if (iranNameNumber>1) {
        // setiranFlagConter(iranflagConter+1)
        setTimeout(() => {
          setShowIranGift(true)
         }, 7000);

      }

      setScore(currentRate);
      // console.log(score)
    
      
   
      

   
    }
     





      

/////PlayButtonnnnnnnnnnnnn
      const playIniti=()=>{
        
        setShuffeled(false);
        setShowMess(true);

       createInitshuffleLists()
      
       setMaskTop(true)
       setMaskBottom(true)
       setIranFlag(true)
      
        
      }

      ///Resort Button
      const resetGameIniti=()=>{
        setShowMess(false);
        setShuffeled(true);
        updateHeart(score);
        // setScore(0)
        setMaskTop(false)
        setMaskBottom(false)
        setIranFlag(false)

        
        
        
  
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

        


   

{/* create Elament of Game!!!!!!!!! */}



    <div className='cityCol-Container'>


{/* List 1 of Display Results */}
    <div  className='CityCol'>{(shuffelled?sortL1:shL1).map((val,index)=>{
        return(<>
        <motion.div transition={{duration:shuffelled?3:3}} animate={{y:shuffelled?5200:0 } }>
             <div className='City-Cells'>
             <img className='City-img' src={val.src} ></img>
              {/* <p>{val.name}</p> */}
              

              </div>
            </motion.div>
        </>)
    })}</div>



{/* List 2 of Display Results */}
    <div className='CityCol'  >{(shuffelled?sortL1:shL2).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:shuffelled?2:4}} animate={{y:shuffelled?3131:0} }>
            <div className='City-Cells'>
            <img className='City-img' src={val.src} ></img>
              {/* <p key={index}>{val.name}</p> */}
              
              </div>
                </motion.div>
            </>)
    })}
    </div>




{/* List 3 of Display Results */}
    <div className='CityCol' >{(shuffelled?sortL1:shL3).map((val,index)=>{
      
        return(<>
            <motion.div transition={{duration:shuffelled?5:5}} animate={{y:shuffelled?2098:0} }>
            <div  className='City-Cells'>
            <img className='City-img' src={val.src} ></img>
              {/* <p key={index}>{val.name}</p> */}
            
            </div>
                </motion.div>
            </>)
    })}
    </div>


{/* List 4 of Display Results */}
    <div className='CityCol'  >{(shuffelled?sortL1:shL4).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:shuffelled?4:4}} animate={{y:shuffelled?3131:0} }>
            <div className='City-Cells'>
            <img className='City-img' src={val.src} ></img>
            {/* <p key={index}>{val.name}</p> */}
            </div>
            </motion.div>
            </>)
    })}
    </div>

{/* List 5 of Display Results */}
    <div className='CityCol' >{(shuffelled?sortL1:shL5).map((val,index)=>{
        return(<>
            <motion.div transition={{duration:shuffelled?2:3}} animate={{y:shuffelled?6022:0} }>
            <div className='City-Cells'>
            <img className='City-img' src={val.src} ></img>
              {/* <p key={index}>{val.name}</p> */}

              </div>
                </motion.div>
            </>)
    })}
    </div>

    


    </div>



    
    <div className='GameInfo-container' >
        
        <div className={showmess?'showMess':'notshowMess'}>    
           {score} X  <FontAwesomeIcon className='jun' icon={faStar} color="yellow" />
          

            </div>
            <div className={iranFlag?'showFlagConter':'notShowFlagConter'}>
           {iranflagConter}  X  <img className='iranFlagPicture' src='data:image/png;base64,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'></img>
            </div>

            <div  className={maskTop?'showMaskTop':'notShowMaskTop'}>
            <p>{listCitys[0]}</p>
              <p>{listCitys[1]}</p>
              <p>{listCitys[2]}</p>
              <p>{listCitys[3]}</p>
              <p>{listCitys[4]}</p>
              </div>

            <div className={maskBottom?'showMaskBottom':'notShowMaskBottom'}>
        <div><p><FontAwesomeIcon color='red' icon={faCity}/> {citySelectedDoGet} </p></div>
        <div>  <FontAwesomeIcon icon={faUser} color="red" /> {userName}</div>
              </div>
    
    
    
            
        <div className='PlayerInfo-Container'>
            
           
           <div className='userInfo-Container'>


                    {/* create PlayerName AND City Selected row informations & Wellcome */}
                    {/* <div className='PlayerNameContainer'>  
                     <span >  <FontAwesomeIcon icon={faUser} color="black" />  {userName} عزیز خوش آمدی </span>
                    <span>استان شما:{citySelectedDoGet}</span>
                  
                    </div> */}
    
    {/* create PlayerName row informations & Wellcome */}
    
                        <div className='junContainer'>
                       {jun.map((val,index)=>{
                        return(<>
                       <span> <FontAwesomeIcon className='jun' icon={faStar} color="yellow" /></span>
                        </>)
    
                       })}
                       
                      
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

}}> <Link style={{textDecoration:'none'}} className='' to='/'><span>Exit</span></Link>
</button>
                       </div>
    
    
           </div>
    
        </div>
        </div>


    <div className='playButtons-container'>
   
   
   
     
       
    
   
    

    </div>




    </div>
   
    </>
  )
}

export default ListOfCitys