import React from "react";

const Footer = () => {
    return (
        <footer className="main__footer p_relative">
            <div
                className="main__footer__top"
                style={{
                    backgroundImage: "url(assets/images/shape/shape-01.png)",
                }}
            >
                <div className="footer__middle  p_relative d_block">
                    <div className="auto_container">
                        <div className="footer__middle__content">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 footer_column">
                                    <div className="footer_widget left">
                                        <div className="footer__logo">
                                            <figure>
                                                <img
                                                    src="/assets/images/logo-white.png"
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                        <div className="widget_content">
                                            <p>
                                                Lorem ipsum dolor rtame consect
                                                pisicing sed do eiusmod tempor
                                                incididunt ut labore.
                                            </p>
                                        </div>
                                        <div className="widget_media">
                                            <ul>
                                                <li>
                                                    <a href="#0">
                                                        {" "}
                                                        <i className="flaticon-facebook-app-symbol"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0">
                                                        <i className="flaticon-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0">
                                                        <i className="flaticon-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0">
                                                        <i className="flaticon-pinterest"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12 footer_column">
                                    <div className="footer_widget links_widget ml_100">
                                        <div className="widget_title">
                                            <h4>Services</h4>
                                        </div>
                                        <div className="widget_content">
                                            <ul className="links_list clearfix">
                                                <li>
                                                    <a href="about-us.html">
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="causes.html">
                                                        Causes
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="team.html">
                                                        Our Team
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="events-details.html">
                                                        Latest News
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 footer_column">
                                    <div className="footer_widget links_widget">
                                        <div className="widget_title">
                                            <h4>Fundraising</h4>
                                        </div>
                                        <div className="widget_content">
                                            <ul className="links_list clearfix">
                                                <li>
                                                    <a href="events.html">
                                                        Education
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="causes.html">
                                                        Food Donation
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="team.html">
                                                        Medical Help
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="events-carousel.html">
                                                        Technology
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 footer_column">
                                    <div className="footer_widget links_widget">
                                        <div className="widget_title">
                                            <h4>Contact</h4>
                                        </div>
                                        <div className="widget_content">
                                            <ul className="links_list right">
                                                <li>
                                                    4140 Parker Rd. Allentown,
                                                    New Mexico
                                                </li>
                                                <li>
                                                    <a href="mailto:jennings@example.com">
                                                        <i className="flaticon-email"></i>{" "}
                                                        jennings@example.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tel:081243256">
                                                        <i className="flaticon-phone-call"></i>
                                                        (208) 555-0112
                                                    </a>
                                                </li>
                                                <li>
                                                    <div className="header-link-btn footer-donate">
                                                        <a
                                                            href="donate.html"
                                                            target="_blank"
                                                            className="btn-1 btn-alt"
                                                        >
                                                            Donate Now{" "}
                                                            <span></span>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom p_relative">
                <div className="auto_container">
                    <div className="bottom_inner  p_relative">
                        <div className="copyright">
                            <p> SaveUs © 2023. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
