import Layout from "@/components/layout/Layout";
import Blog from "@/components/pages/Blog";
import { createClient } from "@/prismicio";
// import BlogPage from "@/components/pages/Blog";
import React from "react";

const index = ({ blogs, totalPages }) => {
    return (
        <Layout>
            <Blog posts={blogs} totalPages={totalPages} />
        </Layout>
    );
};

export const getStaticProps = async ({ previewData }) => {
    const client = createClient({ previewData });

    const blogs = await client.getByType("blog", {
        pageSize: 9,
        orderings: {
            field: "document.first_publication_date",
            direction: "desc",
        },
    });


    return {
        props: {
            blogs: blogs.results,
            totalPages: blogs.total_pages,
        },
         revalidate:60
    };
};
export default index;
