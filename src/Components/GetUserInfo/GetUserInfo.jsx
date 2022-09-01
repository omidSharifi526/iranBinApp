import React from 'react';
import { useState } from 'react';



import { Cityes } from '../../Pages/GameSource/Data/GameInfo';


import '../GetUserInfo/get/user-style.scss'

const GetUserInfo = ({stateChanger,usernameChanger,setCitySelected }) => {

    const[cityPicked,setcityPicked]=useState('');
    let CitySelss;

    const setCitySelectedinternal=(city)=>{
     // console.log( city)
      CitySelss=city.innerHTML;
      // console.log(typeof CitySelss) ;
      
      setcityPicked(CitySelss);
    }
    
 

    const sendData=()=>{
        stateChanger(false)
       let pname=document.getElementById('uName').value;
       usernameChanger(pname);
       setCitySelected(cityPicked)

    
        
        
    }

   
   
  return (
    <div className='GetUserInfo-Container'>
      <div className='required-info-Container'>
        <span className='text text-warning '>خوش آمدید</span>
       <p> برای ورود  نام بازیکن را وارد و استان مورد نظر را انتخاب کنید</p>

      </div>
    
       <div className='namePicker-Container'>
        
        <input className='form-control w-50'   type="text" name="uName" id="uName" placeholder='نام خود را وارد کنید' />
       

       </div>

       <div className='cityNamePicker-Container'>
        <span className='forEnter'>برای انتخاب کلیک کنید</span>
        <div className='listCityforSelect-container'>
          {
            Cityes.map((val,index)=>{
                return(<>
                <div id='City-Cells' className='City-Cells btn '  onClick={(e)=>{
                  setCitySelectedinternal( e.target)
                }}>
                    {val.name}
                </div>
                </>)
            })
          }
            
        </div>
        <div className='CityPickedDisplay-container'>
            <span className='cityInfo'>شهر انتخابی:</span>
            <span className='Cityselected'>{cityPicked}</span>
        </div>


       </div>

       <div className='btnsPicker-Container'>
       <button className='btn btn-primary' onClick={() => sendData()} >ثبت و ورود</button>
       </div>

    
    </div>
  )
}

export default GetUserInfo