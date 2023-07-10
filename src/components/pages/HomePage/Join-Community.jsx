import React from "react";

const JoinCommunity = () => {
    return (
        <section
            className="call"
            style={{
                backgroundImage:
                    "url('assets/images/background/call-image-01.jpg')",
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="call-title">
                            <h2>
                                Become A Volunteer Today
                            </h2>
                            <p className="text-white">
                                <q> The best way to find yourself is to lose
                                yourself in the service of others.</q> These are
                                wise words by revered Mahatma Gandhi
                            </p>
                               <p className="text-white mt-6">
                               Are you an established entrepreneur, teacher or upcoming professional?
Do you see the beautiful work we do at RIF and you believe you can make a firm
contribution with your efforts? We encourage you to join us.
                            </p>

                            <p className="mt-8 text-white"> Click the link below to send us an email. A Designated RIF Representative will reach out to you for a brief
assessment call  </p>
                            <div className="header-link-btn mt-8">
                                <a
                                    href="contact-us.html"
                                    className="btn-1 btn-2"
                                >
                                    Become A Volunteer
                                    <span
                                        style={{
                                            top: "30px",
                                            left: "295.828px",
                                        }}
                                    ></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinCommunity;
