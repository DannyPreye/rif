import { menus } from "@/lib/constants";
import { Instagram } from "lucide-react";
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
                                </ul>
                            </div>
                            <div className="header_top_right">
                                <div className="header_right_info">
                                    <ul className="top_right">
                                        <li>
                                            <Link href="https://www.linkedin.com/company/royal-iwere-foundation">
                                                {" "}
                                                <i className="flaticon-facebook-app-symbol"></i>
                                            </Link>
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
                                            <a href="https://www.instagram.com/reel/CttIzqSgqf0/">
                                                <Instagram size={20} />
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
                                        <Link href="/">
                                            <img
                                                src="/assets/images/logo.png"
                                                alt=""
                                            />
                                        </Link>
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
                            <Link href="/">
                                <img src="/assets/images/logo.png" alt="" />
                            </Link>
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
