import React from "react";
import LeftSection from "./LeftSection";

const BlogDetails = () => {
    return (
        <section class="causes causes-page">
            <div class="container">
                <div class="row">
                    <LeftSection />

                    <div class="col-xl-8 col-lg-8">
                        <div class="causes-card">
                            <div class="causes-image-container cause-details-container">
                                <div
                                    class="causes-image-overlay wow animated"
                                    style={{
                                        visibility: "visible",
                                        animationName: "panel",
                                    }}
                                ></div>
                                <div class="causes-image cause-details-image">
                                    <img
                                        src="/assets/images/gallery/b4.jpg"
                                        alt="img"
                                    />
                                    <div class="header-link-btn">
                                        <a href="events.html" class="btn-1">
                                            20 Feb 2022<span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="main-causes-content">
                            <div class="causes-details-title">
                                <h3>
                                    Lorem Ipum has been The industry&apos;s{" "}
                                    <br /> standard
                                </h3>
                            </div>
                            <div class="comments">
                                <ul class="comments-icon">
                                    <li>
                                        <a href="#accordion">
                                            <i class="flaticon-user"></i>
                                        </a>{" "}
                                        <span> Admin</span>
                                    </li>
                                    <li>
                                        <a href="#accordion">
                                            <i class="flaticon-bubble-chat"></i>
                                        </a>{" "}
                                        <span> Comment</span>
                                    </li>
                                </ul>
                            </div>
                            <p>
                                Nulla quis lorem ut libero malesuada feugiat.
                                Sed porttitor lectus nibh. Quisque velit nisi,
                                pretium ut lacinia in, elementum id enim.
                                Praesent sapien massa, convallis a pellentesque
                                nec, egestas non nisi. Proin eget tortor risus.
                                Curabitur aliquet quam id dui posuere blandit.
                                Proin eget tortor risus. Vestibulum ac diam sit
                                amet quam vehicula elementum sed sit amet dui.
                                Praesent sapien massa, convallis a pellentesque
                                nec, egestas non nisi. Quisque velit nisi,
                                pretium ut lacinia in, elementum id enim. Nulla
                                quis lorem ut libero malesuada feugiat. Mauris
                                blandit aliquet elit.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla porttitor accumsan
                                tincidunt. Proin eget tortor risus. Vestibulum
                                ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Curabitur non nulla sit amet nisl
                                tempus convallis quis ac lectus. Sed porttitor
                                lectus nibh. Nulla quis lorem ut libero
                                malesuada feugiat. Curabitur arcu erat, accumsan
                                id imperdiet et, porttitor at sem. Curabitur
                                aliquet quam id dui posuere blandit. Praesent
                                sapien massa, convallis a pellentesque nec,
                                egestas non nisi. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a Curabitur
                            </p>

                            <blockquote>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit amet sit purus tempor dui
                                pharetra consequat nibh elit urna interdum viera
                                quam a arcu duis quis lectus donec nulla aliquam
                                sit fermentum morbi sed nisl molestie.”
                                <span>Darlene Robertson</span>
                            </blockquote>

                            <div class="causes-details-title">
                                <h3>Start a Fundraiser for Yourself</h3>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Cursus ornare non non massa
                                elit rutrum. Eros proin nibh neque interdum
                                accumsan, neque vitae. Tortor etiam sed
                                suspendisse faucibus ac volutpat mattis tortor
                                nec Orc velit a posuere turpis amet.
                            </p>

                            <ul class="blog-details-list">
                                <li>
                                    Platea sed fames at egestas amet feugiat
                                    laoreet
                                </li>
                                <li>
                                    Duis et enim justo, in mauris posuere dolor
                                    magnis felis sapien sit egestas. Ut
                                    venenatis faucibus non sed faucibus mauris
                                    ultricies.
                                </li>
                                <li>
                                    Mauris donec ociis et magnis sapien etiam
                                    sapien sagittis congue tempor gravida done
                                </li>
                            </ul>
                        </div>
                        <div class="main-causes-content">
                            <div class="main-causes-content-img">
                                <a href="blog-grid.html">
                                    <img
                                        src="/assets/images/gallery/causes-11.png"
                                        alt="img"
                                    />
                                </a>
                                <a href="blog-grid.html">
                                    <img
                                        src="/assets/images/gallery/causes-12.png"
                                        alt="img"
                                    />
                                </a>
                            </div>
                        </div>

                        <div class="main-causes-content">
                            <div class="causes-details-title">
                                <h3>How we are going to help</h3>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Cursus ornare non non massa
                                elit rutrum. Eros proin nibh neque interdum
                                accumsan, neque vitae. Tortor etiam sed
                                suspendisse faucibus ac volutpat mattis tortor
                                nec Orc velit a posuere turpis amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
