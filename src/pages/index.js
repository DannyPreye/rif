import Image from 'next/image';
import { Inter } from 'next/font/google';
// import Layout from '@/components/layout/Layout';
import HomePage from '@/components/pages/HomePage';
import { createClient } from '@/prismicio';
import Layout from '../components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ blogs }) {
  return (
    <Layout>
      <HomePage posts={blogs} />
    </Layout>
  );
}

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const blogs = await client.getByType('blog', {
    pageSize: 4,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  return {
    props: {
      blogs: blogs.results,
    },
    revalidate: 60,
  };
};
