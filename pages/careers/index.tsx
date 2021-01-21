import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Edges } from 'types/common';
import Post from 'types/posts/post';
import Layout from 'components/Layout';
import { getAllCareerPosts } from 'lib/api';

import OpenPositions from './OpenPositions';

interface CareersPageProps {
  posts: Edges<Post>;
  preview: boolean;
}

const CareersPage: React.FC<CareersPageProps> = ({ posts, preview }) => (
  <Layout preview={preview}>
    <Head>
      <title>Profico</title>
    </Head>
    <OpenPositions positions={posts.edges} />
  </Layout>
);

export default CareersPage;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts: Edges<Post> = await getAllCareerPosts(preview);
  return {
    props: { posts: allPosts, preview },
  };
};
