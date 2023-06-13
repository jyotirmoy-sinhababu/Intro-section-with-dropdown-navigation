import React from 'react';

import './navMobileStyle.css';

const NavMobileBtn = () => {
  return (
    <div className='nav-mobile-btn-cnt'>
      <button className='nav-mobile-btn'>
        <div className='nav-1stspan'></div>
        <div className='nav-2ndspan'></div>
        <div className='nav-3rdspan'></div>
      </button>
    </div>
  );
};

export default NavMobileBtn;
