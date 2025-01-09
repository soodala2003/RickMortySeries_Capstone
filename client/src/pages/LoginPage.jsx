import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import '../assets/styles/loginpage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/'); //to HomePage
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  
  return (
    <div className="login_container">
      <div className="login_page"> 
        <div className="item1"><b>Login</b></div>
        <Form onSubmit={submitHandler}>
          <Form.Group className='my-2' controlId='email'>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group> 

          <Form.Group className='my-2' controlId='password'>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <div className="item4">
            <Link className="forgetPW" to={``}>Forget password?</Link>
          </div>

          <div className="item5">
            <button type='submit' disabled={isLoading} className="btn btn-primary">
              <div className="submit_btn">SUBMIT</div>
            </button>
          </div>
        </Form>

        {isLoading && <Loader />}

        <div className="item6">Don't have an account?  
          <Link className="user_btns" to={`/api/users/signup`}>  Sign up</Link>
        </div>
      </div> 
    </div> 
  );
}

export default LoginPage;