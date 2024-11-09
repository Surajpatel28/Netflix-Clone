import React from 'react'
import NetflixLogo from './Netflix_2015_logo.svg';
import "./Navbar.css"
import { IoLanguageOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarLogo'>
       <img className='logo' src={NetflixLogo} width="100px" height="40px" alt="Netflix_2015_logo" /> 
       </div>
       <div className="navbarButtons">
        <select name="" id="">
            <option value="English">English</option>
            <option value="Hindi">हिन्दी</option>
        </select>
        <button className='signInBtn'>Sign In</button>
       </div>
    </div>
  )
}

export default Navbar