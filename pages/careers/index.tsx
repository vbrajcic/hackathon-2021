import React from 'react';
import Post from 'types/posts/post';
import Layout from 'components/Layout';
import WhoWeAreSection from 'views/careers/WhoWeAreSection';
import OpenPositions from 'views/careers/OpenPositions';

import { GetServerSideProps } from 'next';
import { Edges } from 'types/common';
import { getAllCareerPosts } from 'lib/api';

interface CareersPageProps {
  posts: Edges<Post>;
  preview: boolean;
}

const CareersPage: React.FC<CareersPageProps> = ({ posts, preview }) => (
  <Layout preview={preview} title="Careers">
    <WhoWeAreSection />
    <OpenPositions positions={posts.edges} />
  </Layout>
);

export default CareersPage;

export const getServerSideProps: GetServerSideProps<CareersPageProps> = async ({ preview = false }) => {
  const allPosts = await getAllCareerPosts(preview);

  return {
    props: { posts: allPosts, preview },
  };
};
