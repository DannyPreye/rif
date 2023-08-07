// import Layout from "@/components/layout/Layout";
import WhoWeArePage from '../components/pages/who-we-are';
import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import defaultMetadata from '@/METADATA';

const WhoWeAre = () => {
  return (
    <Layout>
      <Head>
        <title>{defaultMetadata.title} | Who we are</title>
      </Head>
      <WhoWeArePage />
    </Layout>
  );
};

export default WhoWeAre;
