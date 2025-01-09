import React from 'react';
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import Button from 'react-bootstrap/Button';
import '../assets/styles/header.css';
import mainIMG from '../assets/images/img.jpg';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="header">
        <div className="row1">
          <img className="image" src={mainIMG} alt="Rick_and_Morty" /> 
        </div> 
        <div className="row2">
          Rick and Morty
        </div>

        {/* <Nav className='ms-auto'>
          {userInfo ? (
            <>
              <NavDropdown title={userInfo.email} id='email'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
            ) : (  */}
            <div className="row3">
              <Button variant="outline-primary" className="login_btn">
                <Link className="login" to={`/api/users/login`}>LOGIN</Link></Button>
              <Button variant="dark" className="signup_btn">
                <Link className="signup" to={`/api/users/signup`}>SIGNUP</Link></Button>
            </div>
          {/* )}
        </Nav> */}
      </div>
    </div>
  );
}

export default Header;


            