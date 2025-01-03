import React from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/header.css';
import mainIMG from '../assets/images/img.jpg';
import loginIMG from '../assets/images/login-user.jpg';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="row1">
          <img className="image" src={mainIMG} alt="Rick_and_Morty" /> 
        </div> 
        <div className="row2">
          Rick and Morty
        </div>
        <div className="row3">
          <Link className="login" to={`/api/login`}>LOGIN/SIGNUP</Link>
          <img className="image2" src={loginIMG} alt="Login Icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;


            