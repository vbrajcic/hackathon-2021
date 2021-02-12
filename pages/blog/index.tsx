import React from 'react';
import Post from 'types/posts/post';
import Container from '@material-ui/core/Container';
import Layout from 'components/Layout';
import useFactory from 'utils/hooks/useFactory';
import ContactForm from 'components/ContactForm';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import ReadAboutUsSection from 'views/blog/ReadAboutUsSection';
import FeaturedArticle from 'views/blog/FeaturedArticle';

import { getAllBlogPosts } from 'lib/api';
import { GetServerSideProps } from 'next';
import { Edges } from 'types/common';
import { BlogPostsContextProvider } from 'utils/context/BlogPostsContext';

interface BlogPageProps {
  allPosts: Edges<Post>;
  preview: boolean;
}

const BlogPage: React.FC<BlogPageProps> = ({ allPosts: { edges }, preview }) => {
  const { isMobile } = useBreakpoint();
  const { heroPost, morePosts } = useFactory(() => {
    const [hero, ...more] = edges;

    return { heroPost: hero ? hero.node : undefined, morePosts: more };
  });

  return (
    <Layout preview={preview} title="Blog">
      <FeaturedArticle post={heroPost} />
      <Container maxWidth="xl" disableGutters={isMobile}>
        <BlogPostsContextProvider value={{ posts: { edges: morePosts } }}>
          <ReadAboutUsSection />
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
