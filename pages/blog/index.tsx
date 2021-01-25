import React from 'react';
import Post from 'types/posts/post';
import RelatedPosts from 'components/RelatedPosts';
import Layout from 'components/Layout';
import useFactory from 'utils/hooks/useFactory';

import { getAllBlogPosts } from 'lib/api';
import { GetServerSideProps } from 'next';
import { Edges } from 'types/common';

import FeaturedArticle from './FeaturedArticle';

interface BlogPageProps {
  allPosts: Edges<Post>;
  preview: boolean;
}

const BlogPage: React.FC<BlogPageProps> = ({ allPosts: { edges }, preview }) => {
  const { heroPost, morePosts } = useFactory(() => {
    const [hero, ...more] = edges;

    return { heroPost: hero ? hero.node : undefined, morePosts: more };
  });

  return (
    <Layout preview={preview} title="Blog">
      <FeaturedArticle post={heroPost} />
      <RelatedPosts posts={morePosts} page="blog" />
    </Layout>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async ({ preview = false }) => {
  const allPosts = await getAllBlogPosts(preview);

  return {
    props: {
      allPosts,
      preview,
    },
  };
};
