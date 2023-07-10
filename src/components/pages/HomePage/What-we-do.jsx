import React from "react";

const WhatWeDo = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="align-title">
                            <h5>What we do</h5>
                            <h3>
                                We are primarily focused on areas that border on
                                the following;
                            </h3>
                            <div className="title-shape">
                                <img
                                    src="assets/images/shape/service-title-shape.png"
                                    alt="map"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="service-content-wrapper">
                        <div className="row">


                            <EachGoal
                                serviceNumber={"1"}
                                icon={"icon-service-icon-01"}
                                title={`Combating militancy to promote positive youth engagement`}
                            />
                            <EachGoal
                                icon={"icon-service-icon-02"}
                                title={`Job creation`}
                            />
                            <EachGoal
                                icon={"icon-service-icon-03"}
                                title={`Early childhood development`}
                            />
                            <EachGoal
                                icon={"icon-service-icon-04"}
                                title={`Enabling platforms for entrepreneurs`}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;

const EachGoal = ({ serviceNumber, title, content, icon }) => {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6">
            <div
                className="service-container wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0ms",
                    animationName: "fadeInUp",
                }}
            >
                <div className="service-container-overlay"></div>
                <div className="service-number">
                    <span>{serviceNumber}</span>
                </div>
                <div className="service-container-inner">
                    <div className="service-image">
                        <img
                            src="assets/images/icons/service-shape-01.png"
                            alt="shape"
                        />
                    </div>
                    <div className="service-icon">
                        <span className={`${icon}`}></span>
                    </div>
                    <h5>{title}</h5>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};
