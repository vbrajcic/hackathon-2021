import React from 'react';
import Post from 'types/posts/post';
import Container from '@material-ui/core/Container';
import Layout from 'components/Layout';
import ContactForm from 'components/ContactForm';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import ReadAboutUsSection from 'views/blog/ReadAboutUsSection';
import HeroSection, { PostCategoryFilter } from 'views/blog/HeroSection';

import { getAllBlogPosts } from 'lib/api';
import { GetServerSideProps } from 'next';
import { Edges } from 'types/common';
import { BlogPostsContextProvider } from 'utils/context/BlogPostsContext';
import { decodeString, encodeString, useQueryParam, withDefault } from 'use-query-params';

import styles from './Blog.module.scss';

interface BlogPageProps {
  allPosts: Edges<Post>;
  preview: boolean;
}

const BlogPage: React.FC<BlogPageProps> = ({ allPosts, preview }) => {
  const { isMobile } = useBreakpoint();
  const [postCategoryFilter, setPostCategoryFilter] = useQueryParam<PostCategoryFilter>(
    'category',
    withDefault(
      {
        encode: encodeString,
        decode: v => decodeString(v) as PostCategoryFilter,
      },
      'ALL_POSTS'
    )
  );

  return (
    <Layout preview={preview} title="Blog" FooterProps={{ hasGreyBackground: true }}>
      <HeroSection activeCategory={postCategoryFilter} onCategoryChange={setPostCategoryFilter} />
      <Container maxWidth={false} className={styles.container} disableGutters>
        <Container maxWidth="xl" disableGutters={isMobile}>
          <BlogPostsContextProvider value={{ posts: allPosts }}>
            <ReadAboutUsSection activeCategory={postCategoryFilter} />
          </BlogPostsContextProvider>
          <ContactForm className={styles.contactForm} />
        </Container>
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
