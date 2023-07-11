import Image from "next/image";
import React from "react";

const Vision = () => {
    return (
        <section class="about home-three-about bg-white">
            <div class="container ">
                <div class="row flex-row-reverse">
                    <div class="col-xl-6">
                        <div class="about-left-container">
                            <div
                                class="about-image-1 relative overflow-hidden wow fadeInUp animated bg-red-500"
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
                            {/* <div
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
                            </div> */}
                        </div>
                    </div>

                    <div class="col-xl-6">
                        <div class="about-right-container">
                            <div class="about-right-container-inner">
                                <div class="common-title">
                                    <h5>Vision</h5>
                                    <h3>Vision Statement</h3>
                                </div>
                                <p>
                                    To become West Africa’s model Foundation for
                                    indigenous mindset re-engineering, education
                                    and skilling via deliberate collaborative
                                    investment in human capacity/resource
                                    development.
                                </p>
                                {/* <p>
                                    Thing embarrassing hidden in the middle of
                                    text. All the Lorem Ipsum generators on the
                                    Internet tend to repeat predefined chunks as
                                    necessary for Millions of people
                                </p> */}
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
