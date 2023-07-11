import Layout from "@/components/layout/Layout";
import BlogDetails from "@/components/pages/Blog/BlogDetails";
import { createClient } from "@/prismicio";
import React from "react";
import * as prismic from "@prismicio/client";

const Details = ({ blog, categories, relatedPosts }) => {
    console.log(blog);
    return (
        <Layout>
            <BlogDetails
                blog={blog}
                categories={categories}
                recentPosts={relatedPosts}
            />
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const client = createClient();
    const blog = await client.getByType("blog");

    const paths = blog.results.map((post) => ({
        params: {
            category: post.data.category.slug,
            slug: post.uid,
        },
    }));
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps = async ({ previewData, params }) => {
    const { slug } = params;

    const client = createClient({ previewData });

    const categories = await client.getByType("blog_category", {
        orderings: {
            field: "document.uid",
            direction: "desc",
        },
    });

    const publication = await client.getByUID("blog", slug);
    const categoryId = publication?.data?.category?.id;
    const postId = publication?.id;
    const relatedPosts = await client.getByType("blog", {
        filters: [
            prismic.filter.at(`my.blog.category`, categoryId),
            prismic.filter.not("document.id", postId),
        ],
        pageSize: 3,
        orderings: {
            field: "document.first_publication_date",
            direction: "desc",
        },
    });
    return {
        props: {
            blog: publication,
            categories: categories.results,
            relatedPosts: relatedPosts?.results,
        },
        revalidate: 60,
    };
};

export default Details;
