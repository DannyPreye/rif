import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <section class="about home-two-about">
            <div class="home-two-about-shape">
                <img
                    src="assets/images/shape/home-two-about-shape.png"
                    alt="shape"
                />
            </div>
            <div class="container">
                <div class="row ">
                    <div class="col-xl-6">
                        <div class="about-left-container">
                            <div
                                class="home-two-about-image-top left-10 top-20 relative overflow-hidden paroller w-[150px] h-[150px] rounded-full"
                                style={{
                                    transform:
                                        " translateY(-31px) matrix(1, 0, 0, 1, 0, 11)",
                                    transition:
                                        "transform 0.6s cubic-bezier(0, 0, 0, 1) 0s",
                                    willChange: "transform",
                                }}
                            >
                                <Image
                                    src="/assets/images/who-we-are/iwere_1.jpg"
                                    alt="image"
                                    fill
                                />
                            </div>
                            <div
                                class="about-image-1 top-[-20%] h-[630px] w-[550px] wow relative fadeInUp animated rounded-full overflow-hidden"
                                style={{
                                    visibility: "visible",
                                    animationName: "fadeInUp",
                                }}
                            >
                                <Image
                                    fill
                                    src="/assets/images/who-we-are/iwere_3.JPG"
                                    alt="image"
                                    // className="object-contain"
                                />
                            </div>
                            <div
                                class="home-two-about-image-bottom right-[-50%] top-[50%] overflow-hidden paroller relative h-[150px] w-[150px] rounded-full"
                                style={{
                                    transform:
                                        " translateY(-31px) matrix(1, 0, 0, 1, 0, 11)",
                                    transition:
                                        "transform 0.6s cubic-bezier(0, 0, 0, 1) 0s",
                                    willChange: "transform",
                                }}
                            >
                                <Image
                                    src="/assets/images/who-we-are/iwere_2.jpg"
                                    alt="image"
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="home-two-about-wrapper">
                            <div class="about-right-container">
                                <div class="common-title">
                                    <h5>Who we are</h5>
                                    <h3>Royal Iwere Foundation (RIF)</h3>
                                </div>
                                <h6>
                                    RIF, an African non profit organisation
                                    founded in 2023, aims to assist the Warri
                                    Kingdom by effectively tackling obstacles
                                    and vulnerabilities that could hinder the
                                    state&apos;s continuous development and its
                                    capacity to compete internationally.
                                </h6>
                                <p>
                                    This foundation was born out of a strategic
                                    rethink of the Warri Kingdom from the lens
                                    of its people, its socio-economic potential
                                    and the limitless possibilities for growth
                                    and advancement via education and upskilling
                                    across various demographics.
                                </p>
                                <div class="header-link-btn">
                                    <a
                                        href="about-us.html"
                                        target="_blank"
                                        class="btn-1"
                                    >
                                        Discover more
                                        <span
                                            style={{
                                                top: "75.6667px",
                                                left: "195.333px",
                                            }}
                                        ></span>
                                    </a>
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
