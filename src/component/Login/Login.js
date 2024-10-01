import React from 'react';
import "./Login.css"
const Login = () => {
  return (
    <div>
      <form className="login-form">
        <h2 style={{color:'blue'}}>Login</h2>
        <label>
          
          <input type="text" name="username" placeholder='username'/>
        </label>
        <br />
        <label>
         
          <input type="password" name="password" placeholder='password'/>
        </label>
        <br />
        <button type="submit">Login</button>
        <p className="small-text">
        If not registered, <a href="/register">go to register page</a>
      </p>
      </form>
      
    </div>
  );
};

export default Login;
