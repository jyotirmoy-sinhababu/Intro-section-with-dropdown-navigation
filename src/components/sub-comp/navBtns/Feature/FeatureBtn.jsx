import React, { useState } from 'react';

import './featureStyle.css';

import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
import { RiTodoLine } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineBell } from 'react-icons/ai';
import { LuCalendarClock } from 'react-icons/lu';

const FeatureBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const controlFeature = () => {
    if (!isOpen) setIsOpen(true);
    if (isOpen) setIsOpen(false);
  };

  return (
    <div>
      <button className='featue-btn' onClick={controlFeature}>
        Features {!isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
      </button>
      {isOpen ? (
        <div className='feature-btn-cnt'>
          <button className='feature-btn'>
            <RiTodoLine /> Todo Lists
          </button>
          <button className='feature-btn'>
            <SlCalender /> Calender
          </button>
          <button className='feature-btn'>
            <AiOutlineBell /> Reminders
          </button>
          <button className='feature-btn'>
            <LuCalendarClock /> Planning
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FeatureBtn;
