import React from 'react';
import Post from 'types/posts/post';
import Container from '@material-ui/core/Container';
import Layout from 'components/Layout';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import ReadAboutUsSection from 'views/blog/ReadAboutUsSection';
import useBlogParams from 'views/blog/useBlogParams';
import HeroSection from 'views/blog/HeroSection';

import { getAllBlogPosts } from 'lib/api';
import { GetServerSideProps } from 'next';
import { Edges } from 'types/common';
import { BlogPostsContextProvider } from 'utils/context/BlogPostsContext';

import styles from './Blog.module.scss';

interface BlogPageProps {
  allPosts: Edges<Post>;
  preview: boolean;
}

const BlogPage: React.FC<BlogPageProps> = ({ allPosts, preview }) => {
  const { isMobile } = useBreakpoint();
  const { filteredPosts, activeCategory, handleCategoryChange, page, handlePageChange } = useBlogParams(allPosts);

  return (
    <Layout preview={preview} title="Blog" FooterProps={{ bgColor: !isMobile ? 'grey' : undefined }}>
      <HeroSection
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        filteredPosts={filteredPosts}
      />
      <Container maxWidth={false} className={styles.container} disableGutters>
        <Container maxWidth="xl" disableGutters={isMobile}>
          <BlogPostsContextProvider value={{ posts: allPosts }}>
            <ReadAboutUsSection
              activeCategory={activeCategory}
              filteredPosts={filteredPosts}
              page={page || 1}
              onPageChange={handlePageChange}
            />
          </BlogPostsContextProvider>
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
