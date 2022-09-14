import React from 'react';
import { useState } from 'react';
import { faSmile,faHandPointUp,faSignIn } from '@fortawesome/free-solid-svg-icons';



import { Cityes } from '../../Pages/GameSource/Data/GameInfo';


import '../GetUserInfo/get/user-style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GetUserInfo = ({stateChanger,usernameChanger,setCitySelected,gamerulesChanger }) => {

let cityesWiran=Cityes.length-1;
    const[cityPicked,setcityPicked]=useState('');
    const [inputValue, setInputValue] = useState("");
    let CitySelss;

    const setCitySelectedinternal=(city)=>{
     // console.log( city)
      CitySelss=city.innerHTML;
      // console.log(typeof CitySelss) ;
     

      setcityPicked(CitySelss);
    }
   
 

    const sendData=()=>{
        
       let pname=document.getElementById('uName').value;
       if (pname=='' || CitySelss===null) {
       alert(' Please Enter Valid Values..!')
       } else {
        usernameChanger(pname);
        stateChanger(false);
        gamerulesChanger(true)
       setCitySelected(cityPicked)
       }

       
      

    
        
        
    }

   
   
  return (
    <div className='GetUserInfo-Container'>
      <div className='required-info-Container'>
        <span className='text text-warning '>ٌWellCome  <FontAwesomeIcon icon={faSmile} color='white' /></span>
       <p>            Please Enter PlayerName and Select Your Province  </p>

      </div>
    
       <div className='namePicker-Container'>
        
        <input value={inputValue} className='form-control w-50'   type="text" name="uName" id="uName" placeholder=' Enter PlayerName   '
         onChange={(e) => setInputValue(e.target.value)} />
       

       </div>

       <div className='cityNamePicker-Container'>
        <span className='forEnter'>Click to select <FontAwesomeIcon size={15} icon={faHandPointUp}/></span>
        <div className='listCityforSelect-container'>
          {
            Cityes.map((val,index)=>{
             
                return(<div key={index} >
                <div class='City-Cellss' key={index} className='City-Cellss btn '  onClick={(e)=>{
                  setCitySelectedinternal( e.target)
                }}>
                    {val.name}
                </div>
                </div>)
            })
          }
            
        </div>
        <div className='CityPickedDisplay-container'>
            <span className='cityInfo'> Your Province:</span>
            <span className='Cityselected '>{cityPicked}</span>
        </div>


       </div>

       <div className='btnsPicker-Container'>
       <button className='btn btn-primary sendBtn  ' onClick={() => sendData()} > <span><FontAwesomeIcon size={'2x'}  icon={faSignIn}/></span>  Login   </button>
       </div>

    
    </div>
  )
}

export default GetUserInfo