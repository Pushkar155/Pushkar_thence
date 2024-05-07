import React from 'react'
import "./navbar.scss";
import logo from "../../assets/image/logo.png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const clikenavigate = (item)=>{
    navigate(item);
  }
  return (
    <div className="navbar_head">
      <div className='navbar'>
        <img src={logo} alt="" />
        <div className="navbar_buttons">
            <button className="navbar_button_1" onClick={()=>clikenavigate("/registration")} >Get projects</button>
            <button className="navbar_button_2">Onboard Talent</button>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar