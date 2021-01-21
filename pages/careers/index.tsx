import React from 'react';
import { GetServerSideProps } from 'next';

import { Edges } from 'types/common';
import Post from 'types/posts/post';
import { getAllCareerPosts } from 'lib/api';

import Layout from 'components/Layout';
import OpenPositions from './OpenPositions';

interface CareersPageProps {
  posts: Edges<Post>;
  preview: boolean;
}

const CareersPage: React.FC<CareersPageProps> = ({ posts, preview }) => (
  <Layout preview={preview} title="Careers">
    <OpenPositions positions={posts.edges} />
  </Layout>
);

export default CareersPage;

export const getServerSideProps: GetServerSideProps<CareersPageProps> = async ({ preview = false }) => {
  const allPosts: Edges<Post> = await getAllCareerPosts(preview);
  return {
    props: { posts: allPosts, preview },
  };
};
