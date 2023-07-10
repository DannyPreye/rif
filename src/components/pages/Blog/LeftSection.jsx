import React from "react";

const LeftSection = () => {
    return (
        <div className="col-xl-4 col-lg-4">
            <div className="causes-details-card event-details-card">
                <div className="blog-details-left-form">
                    <input type="search" name="search" placeholder="Search" />
                    <i className="flaticon-search-interface-symbol"></i>
                </div>
            </div>

            <div className="causes-details-card">
                <div className="causes-details-title">
                    <h3>Categories</h3>
                </div>
                <div className="causes-categories">
                    <ul>
                        <li>
                            <a href="events-details.html">
                                <i className="flaticon-angle-right"></i>
                                Charity
                            </a>
                        </li>
                        <li>
                            <a href="blog-grid.html">
                                <i className="flaticon-angle-right"></i>
                                Electrical
                            </a>
                        </li>
                        <li>
                            <a href="blog-grid.html">
                                <i className="flaticon-angle-right"></i>
                                Education
                            </a>
                        </li>
                        <li>
                            <a href="events.html">
                                <i className="flaticon-angle-right"></i>
                                Medical
                            </a>
                        </li>
                        <li>
                            <a href="events-details.html">
                                <i className="flaticon-angle-right"></i>
                                Food Donation
                            </a>
                        </li>
                        <li>
                            <a href="events.html">
                                <i className="flaticon-angle-right"></i>
                                Health
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="causes-details-card">
                <div className="causes-details-title">
                    <h3>Recent Article</h3>
                </div>
                <div className="causes-categories blog-recent-categories">
                    <div className="blog-recent">
                        <div className="blog-recent-image">
                            <img
                                src="/assets/images/gallery/bd1.png"
                                alt="img"
                            />
                        </div>
                        <div className="blog-recent-info">
                            <a href="blog-grid.html">
                                Project Concepts or Related Queries
                            </a>
                            <p>Apr 17, 2022</p>
                        </div>
                    </div>
                    <div className="blog-recent">
                        <div className="blog-recent-image">
                            <img
                                src="/assets/images/gallery/bd2.png"
                                alt="img"
                            />
                        </div>
                        <div className="blog-recent-info">
                            <a href="blog-grid.html">
                                To Improve Your Express Application
                            </a>
                            <p>Apr 17, 2022</p>
                        </div>
                    </div>
                    <div className="blog-recent">
                        <div className="blog-recent-image">
                            <img
                                src="/assets/images/gallery/bd3.png"
                                alt="img"
                            />
                        </div>
                        <div className="blog-recent-info">
                            <a href="blog-grid.html">
                                Ensure that Copies of Documents
                            </a>
                            <p>Apr 17, 2022</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="causes-details-card">
                <div className="causes-details-title">
                    <h3>Popular Tags</h3>
                </div>
                <div className="causes-categories">
                    <div className="blog-tags">
                        <a href="events-details.html">fundraising</a>
                        <a href="events.html">charity</a>
                        <a href="donate.html">donation</a>
                        <a href="events-details.html">water</a>
                        <a href="events-carousel.html">kids</a>
                        <a href="events.html">Education</a>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default LeftSection;