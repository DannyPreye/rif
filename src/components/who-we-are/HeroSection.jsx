import React from "react";

const HeroSection = () => {
    return (
        <section
            className="common-banner"
            style={{
                backgroundImage:
                    "url('assets/images/banner/common-banner-bg.png')",
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="common-banner-title">
                            <h3>Who We Are</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
