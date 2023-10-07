import { menus } from '@/lib/constants';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Header = ({ setMenuOpen, isVisible }) => {
  return (
    <>
      <header className=''>
        <div className='header-area '>
          <div className='header-top_area'>
            <div className='container-fluid'>
              <div className='flex items-center justify-center md:justify-between '>
                <div className='col-xl-6 col-md-12 col-lg-8 hidden md:block'>
                  <div className='short_contact_list'>
                    <ul className='font-museo '>
                      <li>
                        <Link
                          className='font-museo text-primary-pink hover:text-primary-green-1'
                          href='tel:+2348154105285'
                        >
                          <i className='fa fa-phone'></i> (+234)815 4105 285
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='font-museo text-primary-pink hover:text-primary-green-1'
                          href='mailto:contact@rif.ng'
                        >
                          <i className='fa fa-envelope'></i>Contact@rif.ng
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=' '>
                  <div className='social_media_links flex font-museo '>
                    <Link
                      className='text-primary-pink hover:scale-95 hover:text-primary-green-1 '
                      href='#'
                    >
                      <AiFillInstagram size={24} />
                    </Link>
                    <Link
                      className='text-primary-pink hover:scale-95 hover:text-primary-green-1 '
                      href='#'
                    >
                      <AiFillLinkedin size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id='sticky-header'
            className={`main-header-area  ${
              isVisible && 'sticky left-0 top-0'
            }`}
          >
            <div className='container-fluid  '>
              <div className='row  align-items-center '>
                <div className='col-xl-3 col-lg-3 '>
                  <div className='logo'>
                    <Link href='/'>
                      <Image
                        width={200}
                        height={150}
                        src='/assets/images/logo-white.png'
                        alt=''
                      />
                    </Link>
                  </div>
                </div>
                <div className='col-xl-9  col-lg-9 '>
                  <div className='hidden justify-between lg:flex  '>
                    <nav>
                      <ul className=' flex gap-2 '>
                        {menus.map((menu, id) => (
                          <li>
                            <Link
                              className='font-open-sans text-white hover:text-gray-200 '
                              href={menu.link}
                            >
                              {menu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className='Appointment'>
                      <div className='book_btn d-none d-lg-block'>
                        <a data-scroll-nav='1' href='#'>
                          Become a
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='mobile_menu d-block d-lg-none'>
                    <div className='slicknav_menu'>
                      <div
                        // href='#'
                        aria-haspopup='true'
                        role='button'
                        onClick={() => setMenuOpen((prev) => !prev)}
                        tabindex='0'
                        className='slicknav_btn slicknav_collapsed'
                        style={{ outline: 'none' }}
                      >
                        <span className='slicknav_menutxt'>MENU</span>
                        <span className='slicknav_icon'>
                          <span className='slicknav_icon-bar'></span>
                          <span className='slicknav_icon-bar'></span>
                          <span className='slicknav_icon-bar'></span>
                        </span>
                      </div>
                      <ul
                        className='slicknav_nav slicknav_hidden'
                        aria-hidden='true'
                        role='menu'
                        style={{ display: 'none' }}
                      >
                        {menus.map((menu, id) => (
                          <li>
                            <Link
                              href={menu.link}
                              role='menuitem'
                              tabindex='-1'
                            >
                              {menu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
