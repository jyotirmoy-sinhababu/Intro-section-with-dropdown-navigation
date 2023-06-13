import React, { useState } from 'react';

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
        <button onClick={controlCompany}>
          Company {!isClicked ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </button>
        {isClicked ? (
          <div>
            <button>History </button>
            <button>Our Team </button>
            <button>Blog </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CompanyBtn;
