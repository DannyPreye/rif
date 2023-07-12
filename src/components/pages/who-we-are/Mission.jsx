import Image from "next/image";
import React from "react";

const Mission = () => {
    return (
        <section class="about home-three-about">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 ">
                        <div
                            data-aos="zoom-right-in"
                            class="about-left-container"
                        >
                            <div
                                class="about-image-1 relative overflow-hidden wow fadeInUp
                                animated "
                                style={{
                                    visibility: "visible",
                                    animationName: "fadeInUp",
                                }}
                            >
                                <Image
                                    src="/assets/images/who-we-are/iwere_4.JPG"
                                    alt="image"
                                    fill
                                />
                            </div>
                            <div
                                data-aos="zoom-in-right"
                                data-aos-delay="100"
                                class="about-left-intro paroller"
                                style={{
                                    transform:
                                        "translateY(-70px) matrix(1, 0, 0, 1, 0, -11)",
                                    transition:
                                        "transform 0.6s cubic-bezier(0, 0, 0, 1) 0s",
                                    willChange: "transform",
                                }}
                            >
                                <div class="about-left-intro-inner">
                                    <h5>RIF</h5>
                                    <p className="leading-[18px]">
                                        RIF is positioned to deliver obvious
                                        change in today&apos;s society
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-out-left" class="col-xl-6">
                        <div class="about-right-container">
                            <div class="about-right-container-inner">
                                <div class="common-title">
                                    <h5>Mission</h5>
                                    <h3>Mission Statement</h3>
                                </div>
                                <p>
                                    To provide physical, mental, and
                                    entrepreneurial support to indigenes of
                                    Warri Kingdom, thoroughly equipping them
                                    with viable means to thrive in society and
                                    ultimately changing prevailing narratives
                                    within the region,
                                </p>
                                {/* <p>
                                    Thing embarrassing hidden in the middle of
                                    text. All the Lorem Ipsum generators on the
                                    Internet tend to repeat predefined chunks as
                                    necessary for Millions of people
                                </p> */}
                                <div data-aos="" class="about-bnt-group">
                                    <div class="header-link-btn">
                                        <a
                                            href="/contact-us"
                                            target="_blank"
                                            class="btn-1"
                                        >
                                            Get in Touch<span></span>
                                        </a>
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

export default Mission;
