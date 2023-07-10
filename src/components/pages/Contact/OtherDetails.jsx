import React from "react";

const OtherDetails = () => {
    return (
        <section className="contact-container">
            <div className="container">
                <div className="row gap-[6rem] md:gap-0 ">
                    <div className="col-xl-4 col-lg-4">
                        <div
                            className="contact-containt wow fadeInLeft animated"
                            style={{
                                visibility: "visible",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <h5>Quick Contact</h5>
                            <div className="contact-info">
                                <div className="contact-info-left">
                                    <a href="#">
                                        <i className="fa fa-phone"></i>
                                    </a>
                                </div>
                                <div className="contact-info-right">
                                    <p>Main Office</p>
                                    <a href="tel:(+233)456-789-01">
                                        (+234)456-789-01
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4">
                        <div
                            className="contact-containt wow fadeInUp animated"
                            style={{
                                visibility: "visible",
                                animationName: "fadeInUp",
                            }}
                        >
                            <h5>Email Address</h5>
                            <div className="contact-info">
                                <div className="contact-info-left">
                                    <a href="#">
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                </div>
                                <div className="contact-info-right">
                                    <p>Mail to</p>
                                    <a href="mailto:info@example.com">
                                        d.eyo-enoette@atuwateseii.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4">
                        <div
                            className="contact-containt wow fadeInRight animated"
                            style={{
                                visibility: "visible",
                                animationName: "fadeInRight",
                            }}
                        >
                            <h5>Mailing Address</h5>
                            <div className="contact-info">
                                <div className="contact-info-left">
                                    <a href="#">
                                        <i className="flaticon-location"></i>
                                    </a>
                                </div>
                                <div className="contact-info-right">
                                    <p>
                                        3891 Ranchview Dr. Richardson, <br />
                                        California 62639
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtherDetails;
