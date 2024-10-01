import React from 'react';
import "./Register.css"
const Register = () => {
  return (
    <div>
      <form className="register-form">
        <h2 style={{color:'red'}}>Sign Up</h2>
        <label>
          
          <input type="text" name="username" placeholder='username'/>
        </label>
        <br />
        <label>
          
          <input type="password" name="password" placeholder='password'/>
        </label>
        <br />
        <label>
          
          <input type="password" name="confirmPassword" placeholder='confirmpassword'/>
        </label>
        <br />
        <button type="submit">Register</button>
        
        <p className="small-text">
        Already registered? <a href="/login">Go to login page</a>
      </p>
      </form>
      
    </div>
  );
};

export default Register;
