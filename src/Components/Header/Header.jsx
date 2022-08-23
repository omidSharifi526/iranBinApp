import React from 'react';
import './header-style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUserCircle,faGamepad } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='main-container'>
     <div className='sectionsHeader'>
     <h3><FontAwesomeIcon icon={faGamepad} color="red" /></h3>
     <p>PlayGame</p>
     </div>
      <div className='sectionsHeader'>
      <h3><FontAwesomeIcon icon={faUserCircle} color="red" /> </h3> 
      <p>Login</p>          
      </div>
    <div className='sectionsHeader'>
    <h3><FontAwesomeIcon icon={faHome} color="red" /></h3>
    <p>Home</p>
    </div>
                

                
    </div>
  )
}

export default Header
