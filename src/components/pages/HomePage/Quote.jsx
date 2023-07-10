import React from "react";

const Quote = () => {
    return (
        <section
            className="home-contact"
            style={{
                backgroundImage:
                    "url('assets/images/background/home-contact-bg.png')",
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="call-title ">
                            {/* <h2>How Can You Help?</h2> */}
                            <p>
                                RIF is a restorative mission to re-engineer the
                                mindsets of indigenes of Warri Kingdom to propel
                                them for a more productive and fulfilling life,
                                and in turn, be worthy examples for the next
                                generation.
                            </p>
                            <p className="mt-8 font-bold text-[1.2rem]">
                                Olori Atuwatse III
                            </p>
                            {/* <div className="btn-group">
                                <div className="header-link-btn">
                                    <a href="donate.html" className="btn-1">
                                        Donate Now<span></span>
                                    </a>
                                </div>
                                <div className="header-link-btn">
                                    <a
                                        href="blog-details.html"
                                        className="btn-1 btn-2"
                                    >
                                        Discover more<span></span>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quote;
