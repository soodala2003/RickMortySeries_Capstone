import React, { useState} from 'react';
import '../assets/styles/loginpage.css';
import login from '../assets/images/login.jpg';

const LoginPage = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });
  
  return (
    <div className="login_container">
      <div className="login_page"> 
        <div className="login_img"> 
          <img src={login} alt="login" />
        </div> 
        <div className="item1"><b>LOGIN</b></div>
        <div className="item2">
          <input type="text" name="email" id="email" placeholder="Email" />
        </div>
        <div className="item3">
          <input type="password" name="password" id="password" placeholder="Password"/>
        </div>
        <div className="item4">SUBMIT</div>
        <div className="item5">
          <a href="#forgetpw" id="forgetPW">Forget password?</a>
        </div>
      </div> 
    </div> 
  );
}

export default LoginPage;