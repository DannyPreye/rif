import moment from "moment";
import { RichText } from "prismic-dom";

const { default: Link } = require("next/link");

const EachBlog = ({ createdDate, title, content, link, img, alt, writer }) => {
    const convertRichTextToPlain = RichText?.asText(content);
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
                            {moment(createdDate).format("MMMM DD, YYYY")}
                            <span></span>
                        </Link>
                    </div>
                    <div className="comments">
                        <ul>
                            {/* <li>
                                <i className="flaticon-user"></i>{" "}
                                <span> {writer}</span>
                            </li> */}
                            {/* <li>
                                <i className="flaticon-bubble-chat"></i>{" "}
                                <span> Comment</span>
                            </li> */}
                        </ul>
                    </div>
                    <Link href={link || "#"} className="hover-content">
                        {title}
                    </Link>
                    <p>
                        {convertRichTextToPlain
                            ?.split(" ")
                            ?.slice(0, 8)
                            ?.join(" ")}
                        ...
                    </p>
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

export default EachBlog;
