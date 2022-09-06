import React from 'react';
import '../EndGame/EndGame-style.scss';

const EndGame = ({playerName}) => {
    let fName=playerName.split();
    
  return (
    <div className='endGame-container'>
        <h3>{fName} شما باختید</h3>
    </div>
  )
}

export default EndGame