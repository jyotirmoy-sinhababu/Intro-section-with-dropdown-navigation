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
      <div>
        <div>
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <div>
          <button>Learn More</button>
        </div>
        <div>
          <img src={databiz} alt='' />
          <img src={audio} alt='' />
          <img src={maker} alt='' />
        </div>
      </div>
      <div>
        <img className='main-img' src={deskImg} alt='' />
      </div>
    </div>
  );
};

export default Intro;
