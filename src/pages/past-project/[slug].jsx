// import Layout from '@/components/layout/Layout';
// import ProjectDetail from '@/components/pages/PastProjects/ProjectDetail';
import { createClient } from '../../prismicio';
import React from 'react';
import Layout from '../../components/layout/Layout';
import ProjectDetail from '../../components/pages/PastProjects/ProjectDetail';
import { useRouter } from 'next/router';

const ProjectDetails = ({ details }) => {
  const router = useRouter();
  return (
    <Layout>
      {router.isFallback ? (
        <></>
      ) : (
        <div className='container'>
          <ProjectDetail details={details} />
        </div>
      )}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const client = createClient();
  const project = await client.getByType('past_project');

  const paths = project.results.map((project) => ({
    params: {
      slug: project.uid,
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

  const details = await client.getByUID('past_project', slug);

  return {
    props: {
      details,
    },
    revalidate: 60,
  };
};

export default ProjectDetails;
