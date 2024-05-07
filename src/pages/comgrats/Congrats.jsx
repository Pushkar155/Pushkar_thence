import React,{useState,useEffect} from 'react'
import "./congrats.scss"
import { useNavigate } from 'react-router-dom';

import logo from "../../assets/image/logo.png";
import tick from "../../assets/image/frame1.png"

const Congrats = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
    
        const redirectTimer = setTimeout(() => {
          navigate('/');
        }, 5000);
    
        return () => {
          clearInterval(timer);
          clearTimeout(redirectTimer);
        };
      }, [navigate]);


  return (
    <div className='congr'>
        <div className="congr_nav">
            <img src={logo} alt="" />
        </div>

        <div className="congr_main">
                <img src={tick} alt="" />
                <p>Success Submitted</p>
                <h1>Congratulations</h1>
                <span>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</span>

        </div>

        <div className="congr_footer">
            <p>Redirecting you to Homepage in <span>{countdown} Seconds</span></p>
        </div>

    </div>
  )
}

export default Congrats