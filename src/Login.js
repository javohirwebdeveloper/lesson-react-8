import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';


const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogin = () => {
    // Check if username and password are not empty
    if (username.trim() === '' || password.trim() === '') {
      setIsError(true);
      return;
    }

    // Add your login logic here
    // If login is successful, set user in local storage and redirect to /profile
    setUser({ username });
  };

  return (
    <div className="container">
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png' width='50px' height='41px'></img>
      <h1 className='loginh1'>Log in to Twitter</h1>
      <div className='inputcontain'>
      <input className='input'  type="text" placeholder="Phone number, email address" value={username} onChange={(e) => setUsername(e.target.value)}  required/>
      <input className='input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      <button className='loginbtn' onClick={handleLogin}>Log In</button>
      
    </div>
      <Link to="/register" className="link">Don't have an account? Sign up to Twitter</Link>
    </div>
  );
};

export default Login;
