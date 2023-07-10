import React from "react";

const ContactForm = () => {
    return (
        <section className="contact-us">
            <div
                className="pattern-layer"
                style={{
                    backgroundImage: "url(assets/images/shape/shape-02.png)",
                }}
            ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="align-title">
                            <h5>Contact with us</h5>
                            <h3>
                                Send Us A Message For <br /> Next Project
                            </h3>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <form>
                            <input
                                type="text"
                                name="name"
                                className="contuct-us-input"
                                placeholder="Your Name"
                            />
                        </form>
                    </div>
                    <div className="col-xl-6">
                        <form>
                            <input
                                type="email"
                                name="email"
                                className="contuct-us-input"
                                placeholder="Your Email"
                            />
                        </form>
                    </div>
                    <div className="col-xl-6">
                        <form>
                            <input
                                type="number"
                                name="number"
                                className="contuct-us-input"
                                placeholder="Phone Number"
                            />
                        </form>
                    </div>
                    <div className="col-xl-6">
                        <form>
                            <input
                                type="text"
                                name="sub"
                                className="contuct-us-input"
                                placeholder="Subject"
                            />
                        </form>
                    </div>
                    <div className="col-xl-12">
                        <form>
                            <textarea
                                name="textarea"
                                className="contuct-us-input contuct-us-textarea"
                            >
                                Your Message
                            </textarea>
                        </form>
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-us-btn">
                            <form>
                                <button
                                    type="submit"
                                    className="btn-1 bg-[#00715d]"
                                >
                                    Send Message{" "}
                                    <span
                                        style={{
                                            top: " 113px",
                                            left: " 150.766px",
                                        }}
                                    ></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
