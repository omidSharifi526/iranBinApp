import React from 'react';
import './ListOfCity-Style.scss';
import { Cityes } from '../Data/GameInfo';


const ListOfCitys = () => {
  return (
    <>
    <div className='cityCol-Container'>
    <div className='CityCol'>{Cityes.map((val,index)=>{
        return(<>
        <p key={index}>{val.name}</p>
        </>)
    })}</div>
    <div className='CityCol'>{Cityes.map((val,index)=>{
        return(<>
        <p key={index}>{val.name}</p>
        </>)
    })}</div>
    <div className='CityCol'>{Cityes.map((val,index)=>{
        return(<>
        <p key={index}>{val.name}</p>
        </>)
    })}</div>
    <div className='CityCol'>{Cityes.map((val,index)=>{
        return(<>
        <p key={index}>{val.name}</p>
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