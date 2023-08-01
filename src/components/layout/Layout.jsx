import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { menus } from '@/lib/constants';
import Link from 'next/link';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false)
    );
  }, []);
  return (
    <div
      className={`overflow-x-hidden
        ${menuOpen ? 'mobile-menu-visible' : ''}`}
    >
      <Header isVisible={isVisible} setMenuOpen={setMenuOpen} />

      {children}

      {/* <Newsletter /> */}
      <Footer />
      <MobileMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />

      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
        className={`scroll-top scroll-to-target ${isVisible && 'open'}`}
        dataTarget='html'
      >
        <span className='icon-42'>
          <i className='fa fa-angle-double-right'></i>
        </span>
      </button>
    </div>
  );
};

export default Layout;

const MobileMenu = ({ menuOpen, setMenuOpen }) => (
  <div className={`mobile-menu `}>
    <div onClick={() => setMenuOpen(false)} className='menu-backdrop'></div>
    <div onClick={() => setMenuOpen(false)} className='close-btn'>
      <i className='fas fa-times'></i>
    </div>
    <nav className='menu-box mCustomScrollbar _mCS_1 mCS_no_scrollbar'>
      <div
        id='mCSB_1'
        className='mCustomScrollBox mCS-light mCSB_vertical mCSB_inside'
        style={{ maxHeight: '1008px' }}
        tabindex='0'
      >
        <div
          id='mCSB_1_container'
          className='mCSB_container mCS_y_hidden mCS_no_scrollbar_y'
          style={{ position: 'relative', top: 0, left: 0 }}
          dir='ltr'
        >
          <div className='nav-logo'>
            <a href='index.html'>
              <img
                src='/assets/images/logo.png'
                alt='logo'
                className='mCS_img_loaded'
              />
            </a>
          </div>
          <div className='menu-outer'>
            <div className=' ' id='navbarSupportedContent'>
              <ul className='navigation clearfix'>
                {menus.map((menu) => (
                  <li key={`mobile_menu_${menu.title}`}>
                    <Link href={menu.link}> {menu.title} </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='contact-info'>
            <h4>Contact Info</h4>
            <ul>
              <li>
                <a href='tel:+2348154105285'>(+234)815 4105 285</a>
              </li>
              <li>
                <a href='mailto:admin2@atuwateseii.com'>
                  admin2@atuwateseii.com
                </a>
              </li>
            </ul>
          </div>
          <div className='social-links'>
            <ul className='clearfix'>
              <li>
                <Link href='https://www.linkedin.com/company/royal-iwere-foundation'>
                  <span className='fab fa-instagram'></span>
                </Link>
              </li>
              <li>
                <Link href='https://www.instagram.com/royaliwerefoundation/'>
                  <span className='fab fa-linkedin'></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          id='mCSB_1_scrollbar_vertical'
          className='mCSB_scrollTools mCSB_1_scrollbar
                     mCS-light mCSB_scrollTools_vertical'
          style={{ display: 'none' }}
        >
          <div className='mCSB_draggerContainer'>
            <div
              id='mCSB_1_dragger_vertical'
              className='mCSB_dragger'
              style={{
                position: 'absolute',
                minHeight: '0px',
                height: '0px',
                top: '0px',
              }}
              onContextMenu={() => false}
            >
              <div
                className='mCSB_dragger_bar'
                style={{ lineHeight: '0px' }}
              ></div>
            </div>
            <div className='mCSB_draggerRail'></div>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

const Newsletter = () => {
  return (
    <section
      data-aos='fade-up'
      data-aos-anchor-placement='center-center'
      className='news_letter'
    >
      <div className='auto_container'>
        <div className='news_letter_content'>
          <div className='row'>
            <div className='col-xl-6 col-lg-12'>
              <div className='news_letter_left p_relative'>
                <h3>Newsletter</h3>
                <h4>
                  To get monthly news, <br />
                  Subscribe to our newsletter.
                </h4>
              </div>
            </div>
            <div className='col-xl-6 col-lg-12 ps-xl-0'>
              <div className='news_letter_right p_relative'>
                <div className='form-inner p_relative'>
                  <form
                    action='index.html'
                    method='post'
                    className='subscribe-form'
                  >
                    <div className='form-group'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Your mail address'
                        required=''
                      />
                      <div className='news-form-btn'>
                        <button
                          type='submit'
                          className='news_letter_btn'
                        ></button>
                        <a href='' className='btn-1 btn-alt'>
                          Subscribe <span></span>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
