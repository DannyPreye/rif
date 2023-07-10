import Link from "next/link";

const LatestBlog = () => {
    return (
        <section className="blog">
            <div className="blank"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="align-title">
                            <h5>Latest Blog</h5>
                            <h3
                                style={{
                                    fontSize: " 1.2rem",
                                    lineHeight: "20px",
                                }}
                            >
                                The Team at RIF is constantly coming up with
                                helpful resources from our various programs.
                                Stay glued for updates!
                            </h3>
                        </div>
                    </div>
                    <EachBlog
                        img={"assets/images/gallery/blog-01.png"}
                        writer={"Admin"}
                        title={"How does the malnution affect children?"}
                        content={
                            "Aellentesque porttitor lacus quis enim varius sed efficitur..."
                        }
                        createdDate={"20 Feb 2022"}
                    />
                    <EachBlog
                        img={"assets/images/gallery/blog-01.png"}
                        writer={"Admin"}
                        title={"How does the malnution affect children?"}
                        content={
                            "Aellentesque porttitor lacus quis enim varius sed efficitur..."
                        }
                        createdDate={"20 Feb 2022"}
                    />
                    <EachBlog
                        img={"assets/images/gallery/blog-01.png"}
                        writer={"Admin"}
                        title={"How does the malnution affect children?"}
                        content={
                            "Aellentesque porttitor lacus quis enim varius sed efficitur..."
                        }
                        createdDate={"20 Feb 2022"}
                    />
                </div>
            </div>
        </section>
    );
};

const EachBlog = ({ createdDate, title, content, link, img, alt, writer }) => {
    return (
        <div className="col-xl-4 col-lg-4">
            <div
                className="causes-card wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
                style={{
                    visibility: " visible",
                    animationDuration: "1500ms",
                    animationDelay: " 600ms",
                    animationName: "fadeInUp",
                }}
            >
                <Link href={link || "#"} className="causes-image blog-image">
                    <img src={img} alt={alt} />
                </Link>
                <div className="blog-contant">
                    <div className="header-link-btn">
                        <Link href={link || ""} className="btn-1">
                            {createdDate}
                            <span></span>
                        </Link>
                    </div>
                    <div className="comments">
                        <ul>
                            <li>
                                <i className="flaticon-user"></i>{" "}
                                <span> {writer}</span>
                            </li>
                            {/* <li>
                                <i className="flaticon-bubble-chat"></i>{" "}
                                <span> Comment</span>
                            </li> */}
                        </ul>
                    </div>
                    <a href="blog-details.html" className="hover-content">
                        {title}
                    </a>
                    <p>{content}</p>
                </div>
                <div className="blog-btn">
                    <Link href={link || "#"}>
                        Read More <i className="flaticon-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;
