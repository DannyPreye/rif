// import Layout from '@/components/layout/Layout';
import Main from '../../components/pages/PastProjects/Main';
import { createClient } from '../../prismicio';
import React from 'react';
import Layout from '../../components/layout/Layout';

const index = ({ projects, totalPages }) => {
  return (
    <Layout>
      <Main projects={projects} totalPages={totalPages} />
    </Layout>
  );
};

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const projects = await client.getByType('past_project', {
    pageSize: 9,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  return {
    props: {
      projects: projects.results,
      totalPages: projects.total_pages,
    },
    revalidate: 60,
  };
};
export default index;
