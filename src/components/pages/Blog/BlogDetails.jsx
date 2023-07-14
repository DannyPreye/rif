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
                            <div
                                class="causes-image-container
                                cause-details-container">
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

                            <PrismicRichText
                                field={blog?.data.content}
                                components={{
                                    paragraph: ({ children }) => (
                                        <p>{children}</p>
                                    ),
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
