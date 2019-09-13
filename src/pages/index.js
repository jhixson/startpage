import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Links } from '../components/links';
import { Tools } from '../components/tools';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="New Tab" />
      <Links />
      <Tools />
    </Layout>
  );
};

export default IndexPage;
