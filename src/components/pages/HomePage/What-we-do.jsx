import React from 'react';
import EachGoal from './EachGoal';

const focus = [
  {
    text: 'Combating militancy to promote positive youth engagement',
    image: '/assets/images/focus/youth-rif.svg',
  },
  {
    text: 'Job Creation',
    image: '/assets/images/focus/youth-rif.svg',
  },
];

const WhatWeDo = () => {
  return (
    <div className='reson_area section_padding'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section_title mb-55 text-center'>
              <h3>
                <span>What We do</span>
              </h3>
              <p>
                We Are Primarily Focused On Areas That Border On The Following
              </p>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>{}</div>
      </div>
    </div>
  );
};

export default WhatWeDo;

const EachFocusCard = ({focus}) => {
  return (
    <div className='col-lg-4 col-md-6'>
      <div className='single_reson'>
        <div className='thum'>
          <div className='thum_1'>
            <img src='img/help/3.png' alt='' />
          </div>
        </div>
        <div className='help_content'>
          <h4>Friendly Volunteer</h4>
         
        </div>
      </div>
    </div>
  );
};
