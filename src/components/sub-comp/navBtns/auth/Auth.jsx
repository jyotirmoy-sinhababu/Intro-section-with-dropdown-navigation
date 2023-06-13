import React from 'react';

import './authStyle.css';

const Auth = () => {
  return (
    <div className='auth-cnt'>
      <div className='logIn-btn-cnt'>
        <button>Login</button>
      </div>
      <div className='register-btn-cnt'>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Auth;
