import React from "react";
import EachGoal from "./EachGoal";

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
                                delay={100}
                                icon={"icon-service-icon-02"}
                                title={`Job creation`}
                            />
                            <EachGoal
                                delay={200}
                                icon={"icon-service-icon-03"}
                                title={`Early childhood development`}
                            />
                            <EachGoal
                                delay={300}
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
