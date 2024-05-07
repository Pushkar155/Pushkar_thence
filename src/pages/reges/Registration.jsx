import React, { useState } from 'react';
import "./registration.scss";

import logo from "../../assets/image/logo.png";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

import { useNavigate } from 'react-router-dom';


const Registration = () => {
    const navigate = useNavigate();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [formFilled, setFormFilled] = useState(false);

  const clikenavigate = (item)=>{
    navigate(item);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
    setFormFilled(!!event.target.value && !!email && isValidEmail);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(validateEmail(event.target.value));
    setFormFilled(!!name && !!event.target.value && isValidEmail);
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleSubmit = () => {
    if (name && email && isValidEmail) {
      // Submit logic goes here
      navigate("/congrats");
      console.log("Form submitted");
    } else {
      console.log("Form not submitted. Please fill all fields correctly");
    }
  }

  return (
    <div className='reges'>
        <div className="reges_nav">
            <img src={logo} alt="" />
            <ClearRoundedIcon className='icon2' style={{ fontSize: '20px' }} onClick={()=>clikenavigate('/')} />
        </div>
        <div className="reges_main"  >
            <div className="reges_main_1">
                <p>Registration Form</p> 
                <h1>Start your success Journey here!</h1>
                <div className="reges_main_input">
                    <input 
                      type="text" 
                      placeholder='Enter your name' 
                      className='input1' 
                      value={name} 
                      onChange={handleNameChange} 
                    />
                    <input 
                      type="text" 
                      placeholder='Enter your email' 
                      className='input2' 
                      value={email} 
                      onChange={handleEmailChange} 
                    />
                    {!isValidEmail && <p> <ErrorRoundedIcon className='icon3'/> Enter a valid email address</p>}
                    <button 
                      onClick={handleSubmit} 
                      disabled={!name || !email || !isValidEmail}
                      style={{ backgroundColor: (formFilled && isValidEmail) ? 'rgba(28, 28, 28, 1)' : '' }}
                    >
                      Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration;
