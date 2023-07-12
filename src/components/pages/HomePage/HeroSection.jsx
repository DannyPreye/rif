import React from "react";

const HeroSection = () => {
    return (
        <section className="banner">
            <div
                className="banner-image"
                style={{
                    backgroundImage: "url(assets/images/shape/shape-01.png)",
                }}
            >
                <div className="slide-item">
                    <div className="container">
                        <div className="row">
                            <div data-aos="fade-right" className="col-lg-7">
                                <div className="banner-slide">
                                    <div className="">
                                        <div className="banner-content-wrapper">
                                            <div className="banner-content-wrapper-inner text-white">
                                                <h2>
                                                    RIF- ROYAL IWERE FOUNDATION
                                                </h2>
                                                <p>
                                                    An Iwere Nation&apos;s Human
                                                    Capital Development
                                                    Programme
                                                </p>
                                                <div className="btn-group gap-4 mt-4">
                                                    <div
                                                        data-aos="flip-up"
                                                        data-aos-delay="300"
                                                        className="header-link-btn"
                                                    >
                                                        <a
                                                            href="blog-details.html"
                                                            className="btn-1"
                                                        >
                                                            {" "}
                                                            Contact Us
                                                            <span></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-aos="fade-left" className="col-lg-5 ">
                                <div className="banner-right-content ">
                                    <div className="banner-right-image  p-[8px] border-2 border-dashed border-gray-400 grid place-items-center">
                                        <img
                                            src="/assets/images/banner/banner-right-image-03.png"
                                            alt="banner-two-image"
                                        />
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
