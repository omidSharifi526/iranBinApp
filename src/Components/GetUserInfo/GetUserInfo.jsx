import React from 'react';
import { useState } from 'react';
import { faSmile,faHandPointUp,faSignIn } from '@fortawesome/free-solid-svg-icons';



import { Cityes } from '../../Pages/GameSource/Data/GameInfo';


import '../GetUserInfo/get/user-style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GetUserInfo = ({stateChanger,usernameChanger,setCitySelected,gamerulesChanger }) => {

    const[cityPicked,setcityPicked]=useState('');
    let CitySelss;

    const setCitySelectedinternal=(city)=>{
     // console.log( city)
      CitySelss=city.innerHTML;
      // console.log(typeof CitySelss) ;
     

      setcityPicked(CitySelss);
    }
   
 

    const sendData=()=>{
        
       let pname=document.getElementById('uName').value;
       if (pname==='' || CitySelss===null) {
       alert('لطفا مقادیر معتبر وارد کنید')
       } else {
        usernameChanger(pname);
        stateChanger(false)
       }

       gamerulesChanger(true)
       setCitySelected(cityPicked)
      

    
        
        
    }

   
   
  return (
    <div className='GetUserInfo-Container'>
      <div className='required-info-Container'>
        <span className='text text-warning '>خوش آمدید <FontAwesomeIcon icon={faSmile} color='white' /></span>
       <p> برای ورود  نام بازیکن را وارد و استان مورد نظر را انتخاب کنید</p>

      </div>
    
       <div className='namePicker-Container'>
        
        <input className='form-control w-50'   type="text" name="uName" id="uName" placeholder='نام خود را وارد کنید' />
       

       </div>

       <div className='cityNamePicker-Container'>
        <span className='forEnter'>برای انتخاب کلیک کنید <FontAwesomeIcon size={15} icon={faHandPointUp}/></span>
        <div className='listCityforSelect-container'>
          {
            Cityes.map((val,index)=>{
             
                return(<div key={index} >
                <div id='City-Cells' key={index} className='City-Cells btn '  onClick={(e)=>{
                  setCitySelectedinternal( e.target)
                }}>
                    {val.name}
                </div>
                </div>)
            })
          }
            
        </div>
        <div className='CityPickedDisplay-container'>
            <span className='cityInfo'> استان شما :</span>
            <span className='Cityselected '>{cityPicked}</span>
        </div>


       </div>

       <div className='btnsPicker-Container'>
       <button className='btn btn-primary sendBtn ' onClick={() => sendData()} > <span><FontAwesomeIcon  icon={faSignIn}/></span> ثبت و ورود  </button>
       </div>

    
    </div>
  )
}

export default GetUserInfo