import React from 'react';

import Logo from '../logo/Logo';
import FeatureBtn from '../sub-comp/navBtns/Feature/FeatureBtn';
import CompanyBtn from '../sub-comp/navBtns/company/CompanyBtn';

const Nav = () => {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <FeatureBtn />
        <CompanyBtn />
      </div>
    </div>
  );
};

export default Nav;
