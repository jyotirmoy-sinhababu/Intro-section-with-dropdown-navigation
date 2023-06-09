import React, { useState } from 'react';

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
      <button onClick={controlFeature}>
        Features {!isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
      </button>
      {isOpen ? (
        <div>
          <button>
            <RiTodoLine /> Todo Lists
          </button>
          <button>
            <SlCalender /> Calender
          </button>
          <button>
            <AiOutlineBell /> Reminders
          </button>
          <button>
            <LuCalendarClock /> Planning
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FeatureBtn;