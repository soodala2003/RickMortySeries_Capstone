import React, { useState} from 'react';

const LoginPage = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });
  
  return (
    <div className="container-fluid" style="background-color:#e6f5fa">
      <div className="d-flex flex-column">
        <div className="login-page"> 
          <div className="login-img"> 
            <img src="/images/login.jpg" alt="login" width="200px" height="200px" />
          </div> 
          <div className="item1"><b>LOGIN</b></div>
          <div className="item2">
            <input type="text" name="email" id="email" placeholder="Email" />
          </div>
          <div className="item2" style="margin-top:0">
            <input type="password" name="password" id="password" placeholder="Password"/>
          </div>
          <div className="item3">SUBMIT</div>
          <div className="item4">
            <a href="#forgetpw" id="forgetPW">Forget password?</a>
          </div>
        </div>
      </div> 
    </div> 
  );
}

export default LoginPage;