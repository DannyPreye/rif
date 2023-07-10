import { menus } from "@/lib/constants";
import Link from "next/link";
import React from "react";

const Header = ({ setMenuOpen, isVisible }) => {
    return (
        <>
            <header
                className={`main-header style-one ${
                    isVisible && "fixed-header"
                }`}
            >
                <div className="header-lower">
                    {
                        // header-top
                    }
                    <div className="header_top">
                        <div className="auto_container">
                            <div className="header_top_left">
                                <ul className="top_left">
                                    <li>
                                        <a href="tel:081243256">
                                            <i
                                                className="flaticon-phone-call
                                    "
                                            ></i>
                                            (+234) 555-0112
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:jennings@example.com">
                                            <i className="flaticon-email"></i>{" "}
                                            admin2@atuwateseii.com
                                        </a>
                                    </li>
                                    {/* <li>
                                        <img
                                            src="/assets/images/icons/location.png"
                                            alt="icon"
                                        />{" "}
                                        6391 Elgin St. Celina, Delaware 10299
                                    </li> */}
                                </ul>
                            </div>
                            <div className="header_top_right">
                                <div className="header_right_info">
                                    <ul className="top_right">
                                        <li>
                                            <a href="#">
                                                {" "}
                                                <i className="flaticon-facebook-app-symbol"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="flaticon-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="flaticon-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="flaticon-pinterest"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        // header-top
                    }

                    <div className="header_bottom p_relative">
                        <div className="logo__shape"></div>
                        <div className="auto_container">
                            <div className="outer-box">
                                <div className="logo-box">
                                    <figure className="logo">
                                        <a href="index.html">
                                            <img
                                                src="/assets/images/logo.png"
                                                alt=""
                                            />
                                        </a>
                                    </figure>
                                </div>
                                <div className="menu-area">
                                    {
                                        // Mobile Navigation Toggler
                                    }
                                    <div
                                        onClick={() =>
                                            setMenuOpen((prev) => !prev)
                                        }
                                        className="mobile-nav-toggler"
                                    >
                                        <i className="icon-bar"></i>
                                        <i className="icon-bar"></i>
                                        <i className="icon-bar"></i>
                                    </div>
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div
                                            className=" clearfix show"
                                            id="navbarSupportedContent"
                                        >
                                            <ul className="navigation clearfix">
                                                {menus.map((menu) => (
                                                    <li
                                                        key={
                                                            "main" + menu.title
                                                        }
                                                    >
                                                        <Link href={menu.link}>
                                                            {" "}
                                                            {menu.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                                {/* <li className="dropdown current">
                                                    <a
                                                        href="index.html"
                                                        className="active"
                                                    >
                                                        Home
                                                    </a>
                                                    <ul>
                                                        <li className="current">
                                                            <a
                                                                href="index.html"
                                                                className="active"
                                                            >
                                                                Home One
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html">
                                                                Home Two
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-3.html">
                                                                Home Three
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="dropdown-btn">
                                                        <span className="fas fa-angle-down"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="about-us.html">
                                                        About
                                                    </a>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="causes.html">
                                                        Causes
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="causes.html">
                                                                Causes
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="causes-details.html">
                                                                Cause Details
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="dropdown-btn">
                                                        <span className="fas fa-angle-down"></span>
                                                    </div>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="#">Pages</a>
                                                    <ul>
                                                        <li className="dropdown">
                                                            <a href="#">
                                                                Events
                                                            </a>
                                                            <ul>
                                                                <li>
                                                                    <a href="events.html">
                                                                        Events
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="events-carousel.html">
                                                                        Events
                                                                        Carousel
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="events-details.html">
                                                                        Event
                                                                        Details
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <div className="dropdown-btn">
                                                                <span className="fas fa-angle-down"></span>
                                                            </div>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a href="#">Team</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="team.html">
                                                                        Team
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="team-2.html">
                                                                        Become A
                                                                        Volunteer
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="team-3.html">
                                                                        Volunteer
                                                                        Details{" "}
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <div className="dropdown-btn">
                                                                <span className="fas fa-angle-down"></span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="testimonials.html">
                                                                Testimonials
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="faq.html">
                                                                FAQs
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="error.html">
                                                                404 Error
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="gallery.html">
                                                                Our Gallery
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="donate.html">
                                                                Donate
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="dropdown-btn">
                                                        <span className="fas fa-angle-down"></span>
                                                    </div>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="blog-grid.html">
                                                        Blog
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="blog-grid.html">
                                                                Blog Grid
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-carousel.html">
                                                                Blog Carousel
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-details.html">
                                                                Blog Details
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="dropdown-btn">
                                                        <span className="fas fa-angle-down"></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="contact-us.html">
                                                        {" "}
                                                        Contact{" "}
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="header__right ">
                                    <div className="header__right__button">
                                        <div className="header-link-btn hidden lg:block">
                                            <a
                                                href="donate.html"
                                                target="_blank"
                                                className="btn-1 btn-alt"
                                            >
                                                Become A Volunteer<span></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <StickHeader />
            </header>
        </>
    );
};

const StickHeader = () => {
    return (
        <div className="sticky-header">
            <div className="auto_container">
                <div className="outer-box">
                    <div className="logo-box">
                        <figure className="logo">
                            <a href="index.html">
                                <img src="/assets/images/logo.png" alt="" />
                            </a>
                        </figure>
                    </div>
                    <div className="menu-area">
                        <nav className="main-menu clearfix">
                            {
                                //--Keep This Empty / Menu will come through Javascript
                            }

                            <div
                                className=" navbar-collapse show clearfix"
                                id="navbarSupportedContent"
                            >
                                <ul className="navigation clearfix">
                                    {menus.map((menu) => (
                                        <li key={menu.title}>
                                            <Link href={menu.link}>
                                                {" "}
                                                {menu.title}
                                            </Link>
                                        </li>
                                    ))}
                                    {/* <li className="dropdown current">
                                        <a href="index.html" className="active">
                                            Home
                                        </a>
                                        <ul>
                                            <li className="current">
                                                <a
                                                    href="index.html"
                                                    className="active"
                                                >
                                                    Home One
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index-2.html">
                                                    Home Two
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index-3.html">
                                                    Home Three
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="dropdown-btn">
                                            <span className="fas fa-angle-down"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="about-us.html">About</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="causes.html">Causes</a>
                                        <ul>
                                            <li>
                                                <a href="causes.html">Causes</a>
                                            </li>
                                            <li>
                                                <a href="causes-details.html">
                                                    Cause Details
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="dropdown-btn">
                                            <span className="fas fa-angle-down"></span>
                                        </div>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">Pages</a>
                                        <ul>
                                            <li className="dropdown">
                                                <a href="#">Events</a>
                                                <ul>
                                                    <li>
                                                        <a href="events.html">
                                                            Events
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="events-carousel.html">
                                                            Events Carousel
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="events-details.html">
                                                            Event Details
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="dropdown-btn">
                                                    <span className="fas fa-angle-down"></span>
                                                </div>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Team</a>
                                                <ul>
                                                    <li>
                                                        <a href="team.html">
                                                            Team
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="team-2.html">
                                                            Become A Volunteer
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="team-3.html">
                                                            Volunteer Details{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="dropdown-btn">
                                                    <span className="fas fa-angle-down"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="testimonials.html">
                                                    Testimonials
                                                </a>
                                            </li>
                                            <li>
                                                <a href="faq.html">FAQs</a>
                                            </li>
                                            <li>
                                                <a href="error.html">
                                                    404 Error
                                                </a>
                                            </li>
                                            <li>
                                                <a href="gallery.html">
                                                    Our Gallery
                                                </a>
                                            </li>
                                            <li>
                                                <a href="donate.html">Donate</a>
                                            </li>
                                        </ul>
                                        <div className="dropdown-btn">
                                            <span className="fas fa-angle-down"></span>
                                        </div>
                                    </li>
                                    <li className="dropdown">
                                        <a href="blog-grid.html">Blog</a>
                                        <ul>
                                            <li>
                                                <a href="blog-grid.html">
                                                    Blog Grid
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-carousel.html">
                                                    Blog Carousel
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html">
                                                    Blog Details
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="dropdown-btn">
                                            <span className="fas fa-angle-down"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="contact-us.html"> Contact </a>
                                    </li> */}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
