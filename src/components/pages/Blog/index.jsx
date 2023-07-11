import React from "react";
import EachBlog from "./EachBlog";
import Link from "next/link";
import { useRouter } from "next/router";

const Blog = ({ posts, totalPages }) => {
    const router = useRouter();
    const currentPage = Number(router.query.page) || 1;

    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );
    return (
        <div class="blog home-three-blog main-blog">
            <div class="container">
                <div class="row gap-y-5">
                    {posts.map((post) => (
                        <EachBlog
                            key={post.id}
                            img={post?.data?.featured_image?.url}
                            alt={post?.data?.featured_image?.alt}
                            writer={"Admin"}
                            title={post?.data?.title}
                            content={post.data.content}
                            createdDate={"20 Feb 2022"}
                            link={`/blog/${post.data.category.slug}/${post.uid}`}
                        />
                    ))}
                    <div class="col-xl-12">
                        <div class="paigenition">
                            <ul>
                                {pageNumbers.map((page) => (
                                    <li key={`page_${page}`}>
                                        <Link href={`/blog/page/${page}`}>
                                            {page}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        href={`/blog/page/${currentPage + 1}`}
                                    >
                                        <i class="flaticon-right-arrow-1"></i>
                                    </Link>
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
