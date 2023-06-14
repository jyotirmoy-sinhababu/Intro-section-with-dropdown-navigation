import React, { useState } from 'react';

import FeatureBtn from '../Feature/FeatureBtn';
import CompanyBtn from '../company/CompanyBtn';

import './navMobileStyle.css';
import Auth from '../auth/Auth';

const NavMobileBtn = () => {
  const [isNavBtn, SetIsNavBtn] = useState(false);

  const controlFeature = () => {
    if (!isNavBtn) {
      SetIsNavBtn(true);
    }
    if (isNavBtn) {
      SetIsNavBtn(false);
    }
  };
  return (
    <div className='nav-mobile-btn-cnt'>
      <button
        onClick={() => {
          controlFeature();
        }}
        className='nav-mobile-btn'
      >
        <div className={`nav-1stspan ${isNavBtn ? 'one' : 'null'}`}></div>
        <div className={`nav-2ndspan ${isNavBtn ? 'two' : 'null'}`}></div>
        <div className={`nav-3rdspan ${isNavBtn ? 'three' : 'null'}`}></div>
      </button>
      <div>
        {isNavBtn ? (
          <div className='nav-mobile-subBtn-cnt'>
            <div className='nav-btn-first'>
              {' '}
              <FeatureBtn />
              <CompanyBtn />
              <button className='careers'>Careers</button>
              <button className='about'>About</button>
            </div>
            <div className='nav-btn-second'>
              <Auth />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavMobileBtn;
