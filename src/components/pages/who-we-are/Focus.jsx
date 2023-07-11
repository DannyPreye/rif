import React from "react";
import EachGoal from "../HomePage/EachGoal";

const Focus = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="align-title">
                            <h5>Focus</h5>
                            <h3>
                                RIFSI is focused on achieving five objectives
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
                        <div className="row items-stretch">
                            <EachGoal
                                serviceNumber={"1"}
                                icon={"icon-service-icon-01"}
                                title={`Combating militancy to promote positive youth engagement`}
                                content={`
                                   Engage youth productively to combat and diminish militancy, youth restiveness,
                                    and other vices, redirecting their energy towards economic development.
                                `}
                            />
                            <EachGoal
                                icon={"icon-service-icon-02"}
                                title={`Learning`}
                                content={`
                                    Create learning platforms and incubation centres to
                                    train young aspiring entreprenuers, nurture and scale
                                    business Ideas and entrench a culture of innovation
                                    `}
                            />
                            <EachGoal
                                icon={"icon-service-icon-03"}
                                title={`Early childhood development`}
                                content={`Raise the next generation via the Montessori
                                    System, as a stop-gap measure to reducing street children
                                `}
                            />
                            <EachGoal
                                icon={"icon-service-icon-04"}
                                title={`Enabling platforms for entrepreneurs`}
                                content={`Accelerate funding opportunities, thereby removing
                                 barriers to finance, deepening financial inclusion and de-risking
                                 young aspiring entrepreneurs and making them eligible for further
                                 small business loans to fund growth`}
                            />
                            <EachGoal
                                icon={"icon-service-icon-05"}
                                title={`Job Creation`}
                                content={`Support the Federal and State Government's job creation and
                                skilling efforts by empowering more young people to gainfully employed
                                and become job creator
                                `}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Focus;