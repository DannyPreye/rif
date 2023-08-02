import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EachProject = ({ location, date, title, img, link }) => {
  return (
    <div class='col-xl-4 col-lg-4 relative mt-2 h-[450px] w-[100%] max-w-[450px]'>
      <div
        class='causes-card
       event-card wow

  fadeInUp animated relative h-full '
        data-wow-delay='00ms'
        data-wow-duration='1500ms'
        style={{
          visibility: 'visible',
          animationDuration: '1500ms',
          animationDelay: '0ms',
          animationName: 'fadeInUp',
          background: 'linear-gradient(to top, black, transparent)',
        }}
      >
        <div class='causes-image blog-image event-image'>
          <img src={img} alt={title} />
        </div>
        <div class='blog-contant event-content'>
          <div class='header-link-btn'>
            <a class='btn-1'>
              {date}
              <span></span>
            </a>
          </div>
          <div class='comments'>
            <ul>
              {/* <li><i class="fa fa-clock"></i> <span>{ }</span></li> */}
              <li>
                <i class='flaticon-pin'></i> <span> {location}</span>
              </li>
            </ul>
          </div>
          <Link href={link} class='hover-content'>
            {title}
          </Link>
          <div class='blog-btn event-btn opacity-btn'>
            <Link href={link}>
              Read More <i class='flaticon-arrow-right'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProject;
