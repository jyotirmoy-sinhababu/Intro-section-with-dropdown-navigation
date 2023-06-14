import React from 'react';

import './navStyle.css';

import Logo from '../logo/Logo';
import FeatureBtn from '../sub-comp/navBtns/Feature/FeatureBtn';
import CompanyBtn from '../sub-comp/navBtns/company/CompanyBtn';
import Auth from '../sub-comp/navBtns/auth/Auth';
import NavMobileBtn from '../sub-comp/navBtns/navMobileView/NavMobileBtn';

const Nav = () => {
  return (
    <>
      {' '}
      <div className='nav-cnt'>
        <div className='nav-logo-btn-cnt'>
          <div className='nav-logo-cnt'>
            <Logo />
          </div>
          <div className='nav-btn-cnt'>
            <FeatureBtn />
            <CompanyBtn />
            <div>
              <button className='nav-btns'>Careers</button>
            </div>
            <div>
              <button className='nav-btns'>About</button>
            </div>
          </div>
        </div>
        <div className='nav-auth-cnt'>
          <Auth />
        </div>
      </div>
      <div className='nav-mobile-view-cnt'>
        <Logo />
        <NavMobileBtn />
      </div>
    </>
  );
};

export default Nav;
