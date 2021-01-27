import React from 'react';
import Post from 'types/posts/post';
import Container from '@material-ui/core/Container';
import Layout from 'components/Layout';
import useFactory from 'utils/hooks/useFactory';

import { getAllBlogPosts } from 'lib/api';
import { GetServerSideProps } from 'next';
import { Edges } from 'types/common';
import ContactForm from 'components/ContactForm';
import { BlogPostsContextProvider } from 'utils/context/BlogPostsContext';
import ReadAboutUs from './ReadAboutUs';

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
      <Container maxWidth="xl">
        <BlogPostsContextProvider value={{ posts: { edges: morePosts } }}>
          <ReadAboutUs />
        </BlogPostsContextProvider>
        <ContactForm />
      </Container>
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
