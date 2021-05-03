import React from 'react';
import Container from '@material-ui/core/Container';
import Post from 'types/posts/post';
import Layout from 'components/Layout';
import ContactForm from 'components/ContactForm';
import WhoWeAreSection from 'views/careers/WhoWeAreSection';
import WorkBenefitsSection from 'views/careers/WorkBenefitsSection';
import OpenPositions from 'views/careers/OpenPositions';
import HeroSection from 'views/careers/HeroSection';

import { GetServerSideProps } from 'next';
import { Edges } from 'types/common';
import { getAllCareerPosts } from 'lib/api';

interface CareersPageProps {
  posts: Edges<Post>;
  preview: boolean;
}

const CareersPage: React.FC<CareersPageProps> = ({ posts, preview }) => (
  <Layout preview={preview} title="Careers">
    <HeroSection numberOfOpenPositions={posts.edges.length} />
    <WhoWeAreSection />
    <OpenPositions positions={posts.edges} />
    <WorkBenefitsSection />
    <Container maxWidth="xl">
      <ContactForm />
    </Container>
  </Layout>
);

export default CareersPage;

export const getServerSideProps: GetServerSideProps<CareersPageProps> = async ({ preview = false }) => {
  const allPosts = await getAllCareerPosts(preview);

  return {
    props: { posts: allPosts, preview },
  };
};