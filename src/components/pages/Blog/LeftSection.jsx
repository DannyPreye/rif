import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftSection = ({ categories, recentPosts }) => {
    console.log("recent",recentPosts);
    return (
        <div className="col-xl-4 col-lg-4">
            <div className="causes-details-card event-details-card">
                <div className="blog-details-left-form">
                    <input type="search" name="search" placeholder="Search" />
                    <i className="flaticon-search-interface-symbol"></i>
                </div>
            </div>

            <div className="causes-details-card">
                <div className="causes-details-title">
                    <h3>Categories</h3>
                </div>
                <div className="causes-categories">
                    <ul>
                        {categories?.map((category) => (
                            <li key={category.id}>
                                <a href="events-details.html">
                                    <i className="flaticon-angle-right"></i>
                                    {category.data.category_title}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>

            <div className="causes-details-card">
                <div className="causes-details-title">
                    <h3>Related Blog</h3>
                </div>
                <div className="causes-categories blog-recent-categories">
                    {recentPosts?.map((post) => (
                        <RecentPost
                            key={post?.id}
                            image={post?.data.featured_image.url} date={post?.first_publication_date}
                            title={post?.data?.title}
                            alt={post?.data.featured_image.alt}
                            link={`/blog/${post?.data?.category?.slug}/${post?.uid}`}
                        />
                    ))}
                    {/* <div className="blog-recent">
                        <div className="blog-recent-image">
                            <img
                                src="/assets/images/gallery/bd1.png"
                                alt="img"
                            />
                        </div>
                        <div className="blog-recent-info">
                            <a href="blog-grid.html">
                                Project Concepts or Related Queries
                            </a>
                            <p>Apr 17, 2022</p>
                        </div>
                    </div>
                    <div className="blog-recent">
                        <div className="blog-recent-image">
                            <img
                                src="/assets/images/gallery/bd2.png"
                                alt="img"
                            />
                        </div>
                        <div className="blog-recent-info">
                            <a href="blog-grid.html">
                                To Improve Your Express Application
                            </a>
                            <p>Apr 17, 2022</p>
                        </div>
                    </div>
                    <div className="blog-recent">
                        <div className="blog-recent-image">
                            <img
                                src="/assets/images/gallery/bd3.png"
                                alt="img"
                            />
                        </div>
                        <div className="blog-recent-info">
                            <a href="blog-grid.html">
                                Ensure that Copies of Documents
                            </a>
                            <p>Apr 17, 2022</p>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* <div className="causes-details-card">
                <div className="causes-details-title">
                    <h3>Popular Tags</h3>
                </div>
                <div className="causes-categories">
                    <div className="blog-tags">
                        <a href="events-details.html">fundraising</a>
                        <a href="events.html">charity</a>
                        <a href="donate.html">donation</a>
                        <a href="events-details.html">water</a>
                        <a href="events-carousel.html">kids</a>
                        <a href="events.html">Education</a>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

const RecentPost = ({ image, alt, title, date, link }) => {
    return (
        <div className="blog-recent">
            <div className="blog-recent-image w-[150px] h-[150px] rounded-full
             overflow-hidden relative block ">
                <Image fill src={image} alt={alt} />
            </div>
            <div className="blog-recent-info">
                <Link href={link || "#"}>{title}</Link>
                <p>{moment(date).format("MM DD, YYYY")}</p>
            </div>
        </div>
    );
};
export default LeftSection;
