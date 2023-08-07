// import Layout from "@/components/layout/Layout";
import Blog from '../../../components/pages/Blog';
import { createClient } from '../../../prismicio';
// import BlogPage from "@/components/pages/Blog";
import React from 'react';
import Layout from '../../../components/layout/Layout';
import Head from 'next/head';
import defaultMetadata from '@/METADATA';

const index = ({ blogs, totalPages }) => {
  return (
    <Layout>
      <Head>
        <title>{defaultMetadata.title} | Blog</title>
      </Head>
      <Blog posts={blogs} totalPages={totalPages} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const client = createClient();
  const paths = [];
  const publication = await client.getByType('blog', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  for (let page = 1; page <= publication.total_pages; page++) {
    paths.push({
      params: {
        page: page.toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ previewData, params }) => {
  const page = params.page;
  const client = createClient({ previewData });

  const blogs = await client.getByType('blog', {
    pageSize: 9,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    page,
  });

  return {
    props: {
      blogs: blogs.results,
      totalPages: blogs.total_pages,
    },
    revalidate: 60,
  };
};
export default index;
