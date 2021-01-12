import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import Post from 'types/posts/post';
import { Node } from 'types/common';
import Layout from 'components/Layout';
import { getAllBlogPosts } from 'lib/api';

import Home from './home';

export type HomePageProps = {
  posts: Node<Post>[];
};

const Homepage: React.FC<HomePageProps> = ({ posts }) => (
  <Layout>
    <Head>
      <title>Profico</title>
    </Head>
    <Home posts={posts} />
  </Layout>
);

export default Homepage;

export const getStaticProps: GetStaticProps = async () => {
  const preview = false;
  type Data = {
    edges: {
      node: Post;
    }[];
  };

  const allPosts: Data = await getAllBlogPosts(preview);
  return { props: { posts: allPosts.edges } };
};
