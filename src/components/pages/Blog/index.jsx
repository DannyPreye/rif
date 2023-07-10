import React from "react";
import EachBlog from "./EachBlog";

const Blog = () => {
    return (
        <div class="blog home-three-blog main-blog">
            <div class="container">
                <div class="row gap-y-5">
                    <EachBlog
                        link={"/blog/blog-detail"}
                        img={"assets/images/gallery/blog-01.png"}
                        writer={"Admin"}
                        title={"How does the malnution affect children?"}
                        content={
                            "Aellentesque porttitor lacus quis enim varius sed efficitur..."
                        }
                        createdDate={"20 Feb 2022"}
                    />
                    <EachBlog
                        link={"/blog/blog-detail"}
                        img={"assets/images/gallery/blog-01.png"}
                        writer={"Admin"}
                        title={"How does the malnution affect children?"}
                        content={
                            "Aellentesque porttitor lacus quis enim varius sed efficitur..."
                        }
                        createdDate={"20 Feb 2022"}
                    />
                    <EachBlog
                        link={"/blog/blog-detail"}
                        img={"assets/images/gallery/blog-01.png"}
                        writer={"Admin"}
                        title={"How does the malnution affect children?"}
                        content={
                            "Aellentesque porttitor lacus quis enim varius sed efficitur..."
                        }
                        createdDate={"20 Feb 2022"}
                    />
                    <EachBlog
                        link={"/blog/blog-detail"}
                        img={"assets/images/gallery/blog-01.png"}
                        writer={"Admin"}
                        title={"How does the malnution affect children?"}
                        content={
                            "Aellentesque porttitor lacus quis enim varius sed efficitur..."
                        }
                        createdDate={"20 Feb 2022"}
                    />
                    {/* <div class="col-xl-4 col-lg-4">
                        <div class="causes-card main-blog-content wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                            <a href="blog-details.html" class="causes-image blog-image">
                                <img src="assets/images/gallery/blog-01.png" alt="img">
                            </a>
                            <div class="blog-contant">
                                <div class="header-link-btn"><a href="javascript:void(0);" class="btn-1">20 Feb 2022<span></span></a></div>
                                <div class="comments">
                                    <ul>
                                        <li><i class="flaticon-user"></i> <span> Admin</span></li>
                                        <li><i class="flaticon-bubble-chat"></i> <span> Comment</span></li>
                                    </ul>
                                </div>
                                <a href="blog-details.html" class="hover-content">How does the malnution affect children?</a>
                                <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p>
                            </div>
                            <div class="blog-btn">
                            <a href="blog-details.html">Read More <i class="flaticon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="causes-card main-blog-content wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 300ms; animation-name: fadeInUp;">
                            <a href="blog-details.html" class="causes-image blog-image">
                                <img src="assets/images/gallery/blog-02.png" alt="img">
                            </a>
                            <div class="blog-contant">
                                <div class="header-link-btn"><a href="javascript:void(0);" class="btn-1">20 Feb 2022<span></span></a></div>
                                <div class="comments">
                                    <ul>
                                        <li><i class="flaticon-user"></i> <span> Admin</span></li>
                                        <li><i class="flaticon-bubble-chat"></i> <span> Comment</span></li>
                                    </ul>
                                </div>
                                <a href="blog-details.html" class="hover-content">Our 10 Favourite Climate Strike protest signs</a>
                                <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p>
                            </div>
                            <div class="blog-btn">
                            <a href="blog-details.html">Read More <i class="flaticon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="causes-card main-blog-content wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 600ms; animation-name: fadeInUp;">
                            <a href="blog-details.html" class="causes-image blog-image">
                                <img src="assets/images/gallery/blog-03.png" alt="img">
                            </a>
                            <div class="blog-contant">
                                <div class="header-link-btn"><a href="javascript:void(0);" class="btn-1">20 Feb 2022<span></span></a></div>
                                <div class="comments">
                                    <ul>
                                        <li><i class="flaticon-user"></i> <span> Admin</span></li>
                                        <li><i class="flaticon-bubble-chat"></i> <span> Comment</span></li>
                                    </ul>
                                </div>
                                <a href="blog-details.html" class="hover-content">There are many variations of passages of Lorem</a>
                                <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p>
                            </div>
                            <div class="blog-btn">
                            <a href="blog-details.html">Read More <i class="flaticon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="causes-card main-blog-content wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                            <a href="blog-details.html" class="causes-image blog-image">
                                <img src="assets/images/gallery/b1.png" alt="img">
                            </a>
                            <div class="blog-contant">
                                <div class="header-link-btn"><a href="javascript:void(0);" class="btn-1">20 Feb 2022<span></span></a></div>
                                <div class="comments">
                                    <ul>
                                        <li><i class="flaticon-user"></i> <span> Admin</span></li>
                                        <li><i class="flaticon-bubble-chat"></i> <span> Comment</span></li>
                                    </ul>
                                </div>
                                <a href="blog-details.html" class="hover-content">How do kids get affected by the pollution?</a>
                                <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p>
                            </div>
                            <div class="blog-btn">
                            <a href="blog-details.html">Read More <i class="flaticon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="causes-card main-blog-content wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                            <a href="blog-details.html" class="causes-image blog-image">
                                <img src="assets/images/gallery/b2.png" alt="img">
                            </a>
                            <div class="blog-contant">
                                <div class="header-link-btn"><a href="javascript:void(0);" class="btn-1">20 Feb 2022<span></span></a></div>
                                <div class="comments">
                                    <ul>
                                        <li><i class="flaticon-user"></i> <span> Admin</span></li>
                                        <li><i class="flaticon-bubble-chat"></i> <span> Comment</span></li>
                                    </ul>
                                </div>
                                <a href="blog-details.html" class="hover-content">There are many variations sof passages of Lorem</a>
                                <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p>
                            </div>
                            <div class="blog-btn">
                            <a href="blog-details.html">Read More <i class="flaticon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4">
                        <div class="causes-card main-blog-content wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                            <a href="blog-details.html" class="causes-image blog-image">
                                <img src="assets/images/gallery/b3.png" alt="img">
                            </a>
                            <div class="blog-contant">
                                <div class="header-link-btn"><a href="javascript:void(0);" class="btn-1">20 Feb 2022<span style="top: 57.2188px; left: 47.5px;"></span></a></div>
                                <div class="comments">
                                    <ul>
                                        <li><i class="flaticon-user"></i> <span> Admin</span></li>
                                        <li><i class="flaticon-bubble-chat"></i> <span> Comment</span></li>
                                    </ul>
                                </div>
                                <a href="blog-details.html" class="hover-content">There are numerous vers ions of Lorem passages.</a>
                                <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p>
                            </div>
                            <div class="blog-btn">
                            <a href="blog-details.html">Read More <i class="flaticon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div> */}
                    <div class="col-xl-12">
                        <div class="paigenition">
                            <ul>
                                <li>
                                    <a href="blog-details.html">1</a>
                                </li>
                                <li>
                                    <a href="blog-details.html">2</a>
                                </li>
                                <li>
                                    <a href="blog-details.html">3</a>
                                </li>
                                <li>
                                    <a href="blog-details.html">
                                        <i class="flaticon-right-arrow-1"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
