import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section className='banner'>
      <div
        className='banner-image'
        style={{
          backgroundImage: 'url(assets/images/shape/shape-01.png)',
        }}
      >
        <div className='slide-item'>
          <div className='container'>
            <div className='row '>
              <div data-aos='fade-right' className='col-lg-7'>
                <div className='banner-slide'>
                  <div className=''>
                    <div className='banner-content-wrapper'>
                      <div className='banner-content-wrapper-inner text-white'>
                        <h2>RIF- ROYAL IWERE FOUNDATION</h2>
                        <p>
                          An Iwere Nation&apos;s Human Capital Development
                          Programme
                        </p>
                        <div className='btn-group mt-4 gap-4'>
                          <div
                            data-aos='flip-up'
                            data-aos-delay='300'
                            className='header-link-btn'
                          >
                            <Link href='/contact-us' className='btn-1'>
                              {' '}
                              Contact Us
                              <span></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos='fade-left' className='col-lg-5 hidden lg:block '>
                <div className='banner-right-content '>
                  <div
                    className='banner-right-image
                                     grid place-items-end border-2
                                      border-dashed
                                     border-gray-400 p-[8px]'
                  >
                    <div
                      className=' relative h-full
                                        w-full overflow-hidden rounded-t-full'
                    >
                      <Image
                        fill
                        objectFit='contain'
                        src='/assets/iwere-banner-2.jpg'
                        alt='banner-two-image'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
