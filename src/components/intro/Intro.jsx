import React from 'react';

import './introStyle.css';

import audio from '../../assests/img/client-audiophile.svg';
import databiz from '../../assests/img/client-databiz.svg';
import maker from '../../assests/img/client-maker.svg';
import deskImg from '../../assests/img/image-hero-desktop.png';
import mobImg from '../../assests/img/image-hero-mobile.png';

const Intro = () => {
  return (
    <div className='intro-cnt'>
      <div className='intro-txt-cnt'>
        <div className='intro-txt-first'>
          <h1 className='intro-header'>Make remote work</h1>
          <p className='intro-para'>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <div>
          <button className='intro-btn'>Learn More</button>
        </div>
        <div className='intro-imgs'>
          <img src={databiz} alt='' />
          <img src={audio} alt='' />
          <img src={maker} alt='' />
        </div>
      </div>
      <div>
        <img className='main-img' src={deskImg} alt='desktop img' />
        <img className='mobile-img' src={mobImg} alt='mobile img' />
      </div>
    </div>
  );
};

export default Intro;
