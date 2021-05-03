import React from 'react';
import Post from 'types/posts/post';
import Layout from 'components/Layout';
import Home from 'views/home';

import { GetServerSideProps } from 'next';
import { Edges } from 'types/common';
import { getAllBlogPosts } from 'lib/api';
import { BlogPostsContextProvider } from 'utils/context/BlogPostsContext';

export type HomePageProps = {
  posts: Edges<Post>;
};

const Homepage: React.FC<HomePageProps> = ({ posts }) => (
  <Layout>
    <BlogPostsContextProvider value={{ posts }}>
      <Home />
    </BlogPostsContextProvider>
  </Layout>
);

export default Homepage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const allPosts = await getAllBlogPosts(false);

  return { props: { posts: allPosts } };
};
