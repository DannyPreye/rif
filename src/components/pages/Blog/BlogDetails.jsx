import React from "react";
import LeftSection from "./LeftSection";
import moment from "moment";
import { PrismicRichText } from "@prismicio/react";

const BlogDetails = ({ blog, categories, recentPosts }) => {
    return (
        <section class="causes causes-page">
            <div class="container">
                <div class="row">
                    <LeftSection
                        categories={categories}
                        recentPosts={recentPosts}
                    />

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
                                        src={blog?.data.featured_image.url}
                                        alt={blog?.data.featured_image.alt}
                                    />
                                    <div class="header-link-btn">
                                        <a href="events.html" class="btn-1">
                                            {moment(
                                                blog?.first_publication_date
                                            ).format("DD MM YYYY")}
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="main-causes-content">
                            <div class="causes-details-title">
                                <h3>{blog?.data?.title}</h3>
                            </div>
                            {/* <div class="comments">
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
                            </div> */}
                            <PrismicRichText
                                field={blog?.data.content}
                                components={{
                                    // This does not mean all the element is wrapped in a paragraph
                                    // Rather it tells how each paragraph should be displayed
                                    // To confirm this, inspect the newsletter page with this post
                                    // "Unraveling the Mysteries of the Universe: A Journey through Astrophysics"
                                    paragraph: ({ children }) => (
                                        <p>{children}</p>
                                    ),
                                }}
                            />
                        </div>
                        {/* <div class="main-causes-content">
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
                        </div> */}

                        {/* <div class="main-causes-content">
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
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
