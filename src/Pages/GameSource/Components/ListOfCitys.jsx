import React from 'react';
import {motion} from 'framer-motion';

import './ListOfCity-Style.scss';
import { Cityes } from '../Data/GameInfo';


const changePosOfArr=(arr,from,to)=>{
    Cityes.splice(to,0,Cityes.splice(from,1)[0])
     return  Cityes;

 }

const ListOfCitys = () => {

    

    let newsort=changePosOfArr(Cityes,1,3)

  return (
    <>
    <div className='cityCol-Container'>

    <div className='CityCol'>{Cityes.map((val,index)=>{
        return(<>
        <motion.div transition={{duration:10,repeat:Infinity,delay:2}} animate={{y:400 } }>
            <p key={index}>{val.name}</p>
            </motion.div>
        </>)
    })}</div>

    <div className='CityCol'>{newsort.map((val,index)=>{
        return(<>
            <motion.div transition={{duration:10,repeat:Infinity,delay:1}} animate={{y:200} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}
    </div>

    <div className='CityCol'>{Cityes.map((val,index)=>{
        return(<>
            <motion.div transition={{duration:10,repeat:Infinity}} animate={{y:350} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}</div>
    <div className='CityCol'>{Cityes.map((val,index)=>{
        return(<>
            <motion.div transition={{duration:10,repeat:Infinity,delay:3}} animate={{y:350} }>
                <p key={index}>{val.name}</p>
                </motion.div>
            </>)
    })}</div>



<div className='PlayBtn'>
    <button className='btn btn-danger '>Play Now</button>
    <button className='btn btn-danger '>Exit</button>
    
    </div>

    </div>
   
    </>
  )
}

export default ListOfCitys