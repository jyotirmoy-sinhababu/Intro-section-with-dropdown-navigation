import React, { useState } from 'react';

import './companyStyle.css';

import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';

const CompanyBtn = () => {
  const [isClicked, setIsClicked] = useState(false);

  const controlCompany = () => {
    if (!isClicked) setIsClicked(true);
    if (isClicked) setIsClicked(false);
  };
  return (
    <div>
      <div>
        <button className='company-btn' onClick={controlCompany}>
          Company {!isClicked ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </button>
        {isClicked ? (
          <div className='company-btn-cnt'>
            <button className='company-btn'>History </button>
            <button className='company-btn'>Our Team </button>
            <button className='company-btn'>Blog </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CompanyBtn;
