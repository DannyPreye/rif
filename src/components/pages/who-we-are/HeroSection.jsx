import React from "react";

const HeroSection = () => {
    return (
        <section class="about home-two-about relative">
            {/* <div class="home-two-about-shape">
                <img
                    src="assets/images/shape/home-two-about-shape.png"
                    alt="shape"
                />
            </div> */}
            <div class="container">
                <div className="row">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="about-left-container">
                                <div
                                    class="home-two-about-image-top paroller"
                                    style={{
                                        transform: "unset",
                                        transition:
                                            "transform 0.6s cubic-bezier(0, 0, 0, 1) 0s",
                                        willChange: "transform",
                                    }}
                                >
                                    <img
                                        src="assets/images/gallery/home-two-about-top.png"
                                        alt="image"
                                    />
                                </div>
                                <div
                                    class="about-image-1 wow fadeInUp animated"
                                    style={{
                                        visibility: "visible",
                                        animationName: "fadeInUp",
                                    }}
                                />
                                <img
                                    src="assets/images/gallery/home-two-about-image.png"
                                    alt="image"
                                />
                            </div>
                            <div
                                class="home-two-about-image-bottom paroller"
                                style={{
                                    transform: "unset",
                                    transition:
                                        "transform 0.6s cubic-bezier(0, 0, 0, 1) 0s",
                                    willChange: "transform",
                                }}
                            >
                                <img
                                    src="assets/images/gallery/home-two-about-bottom.png"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="home-two-about-wrapper">
                            <div class="about-right-container">
                                <div class="common-title">
                                    <h5>Get to know about SaveUs</h5>
                                    <h3>
                                        Helping each other can make world better
                                    </h3>
                                </div>
                                <h6>
                                    Cras sed felis eget velit aliquet sagittis
                                    id consectetur purus. <br />
                                    Volutpat commodo sed egestas egestas.
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    notted adipisicing elit sed do eiusmod
                                    tempor incididunt ut labore et simply free
                                    text dolore magna aliqua lonm andhn.
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
