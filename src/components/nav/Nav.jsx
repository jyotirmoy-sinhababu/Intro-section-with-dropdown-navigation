import React from 'react';

import Logo from '../logo/Logo';
import FeatureBtn from '../sub-comp/navBtns/Feature/FeatureBtn';

const Nav = () => {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <FeatureBtn />
      </div>
    </div>
  );
};

export default Nav;
