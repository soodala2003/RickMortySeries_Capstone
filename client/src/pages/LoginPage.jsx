import React, { useState} from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/loginpage.css';
//import login from '../assets/images/login.jpg';

const LoginPage = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });
  
  return (
    <div className="login_container">
      <div className="login_page"> 
        {/* <div className="login_img"> 
          <img src={login} alt="login" />
        </div>  */}
        <div className="item1"><b>LOGIN</b></div>
        <div className="item2">
          <input type="text" name="email" id="email" placeholder="Email" />
        </div>
        <div className="item3">
          <input type="password" name="password" id="password" placeholder="Password"/>
        </div>
        <div className="item4">
          <Link className="forgetPW" to={``}>Forget password?</Link>
        </div>
        <div className="item5">
          <button type="button" className="btn btn-primary">
            <Link to={`/`} className="submit_btn">SUBMIT</Link></button>
        </div>
        <div className="item6">Don't have an account?  
          <Link className="signin_btn" to={`/api/signup`}>  Sign up</Link>
        </div>
      </div> 
    </div> 
  );
}

export default LoginPage;