import React from 'react';

import './authStyle.css';

const Auth = () => {
  return (
    <div className='auth-cnt'>
      <div className='logIn-btn-cnt'>
        <button className='logIn-btn'>Login</button>
      </div>
      <div className='register-btn-cnt'>
        <button className='register-btn'>Register</button>
      </div>
    </div>
  );
};

export default Auth;
