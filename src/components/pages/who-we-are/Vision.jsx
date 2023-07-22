import Image from "next/image";
import React from "react";

const Vision = () => {
    return (
        <section class="about home-three-about bg-white">
            <div class="container ">
                <div class="row flex-row-reverse">
                    <div class="col-xl-6">
                        <div
                            data-aos="zoom-right-in"
                            class="about-left-container"
                        >
                            <div
                                class="about-image-1 relative
                                 overflow-hidden wow fadeInUp
                                  animated bg-red-500"
                                style={{
                                    visibility: "visible",
                                    animationName: "fadeInUp",
                                }}
                            >
                                <Image
                                    src="/assets/images/who-we-are/iwere_5.JPG"
                                    alt="image"
                                    fill
                                />
                            </div>

                        </div>
                    </div>

                    <div data-aos="zoom-in-left" class="col-xl-6">
                        <div class="about-right-container">
                            <div class="about-right-container-inner">
                                <div class="common-title">
                                    <h5>Vision</h5>

                                </div>
                                <p>
                                    To become West Africa&apos;s model
                                    foundation for indigenous mindset
                                    re-engineering, education, and skilling
                                    via deliberate collaborative
                                    investment in human
                                    capacity/resource development.
                                </p>

                                <div class="about-bnt-group">
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

export default Vision;
