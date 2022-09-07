import React from 'react';
import '../EndGame/EndGame-style.scss';
import {Link,NavLink} from 'react-router-dom';

const EndGame = ({playerName,setEndGameShow}) => {
    let fName=playerName.split(' ');
    
  return (
    <div className='endGame-Maincontainer'>
        <div className='endGameElementsContainer'>
        <h3>{fName}!!! شما باختید</h3>
   <Link to="/">
   <button className='btn btn-danger'>خروج</button>
   </Link>
        
        
        <button onClick={()=>{
          setEndGameShow(false)
        }} className='btn btn-primary'>تلاش مجدد</button>
        </div>

    </div>
  )
}

export default EndGame