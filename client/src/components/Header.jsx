import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../assets/styles/header.css';
import mainIMG from '../assets/images/img.jpg';

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
          <Button variant="outline-primary" className="login_btn">
            <Link className="login" to={`/api/users/login`}>LOGIN</Link></Button>
          <Button variant="dark" className="signup_btn">
            <Link className="signup" to={`/api/users/signup`}>SIGNUP</Link></Button>
        </div>
      </div>
    </div>
  );
}

export default Header;


            