import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './header-style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUserCircle,faGamepad } from '@fortawesome/free-solid-svg-icons'

const Header = ({Userame}) => {
  return (
    <div className='main-container'>
       
       
       <div className='sectionsHeader'>
       <Link className='sectionsHeader' to="/login">
      <h3 ><FontAwesomeIcon icon={faUserCircle} color="red" /> </h3> 
      <p>{Userame?Userame:'کابر میهمان'}</p> 
      </Link>
      
      </div>
      
      
      
     <div className='sectionsHeader'>
     <Link className='sectionsHeader' to="/playGame">
     <h3><FontAwesomeIcon icon={faGamepad} color="red" /></h3>
     <p>بازی</p>
     </Link>
     </div>
     
     
    <div className='sectionsHeader'>
    <Link className='sectionsHeader' to="/">
    <h3><FontAwesomeIcon icon={faHome} color="red" /></h3>
    <p>خانه</p>
    </Link>
    </div>

    
                

                
    </div>
  )
}

export default Header
