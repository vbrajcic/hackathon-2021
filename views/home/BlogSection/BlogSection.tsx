import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Hyperlink from 'components/Hyperlink';

import { useBlogPosts } from 'utils/context/BlogPostsContext';
import BlogPosts from './BlogPosts';

import styles from './BlogSection.module.scss';

const BlogSection: React.FC = () => {
  const {
    posts: { edges: posts },
  } = useBlogPosts();

  if (!posts || !posts.length) {
    return null;
  }

  const blogPosts = posts.map(({ node }) => node).slice(0, 3);

  return (
    <Container maxWidth="xl" component="section" className={styles.container}>
      <div className={styles.main}>
        <Typography variant="h2">
          Find out what we’ve been
          <br />
          talking about
        </Typography>
        <Typography variant="body2" color="textSecondary" className={styles.subtitle}>
          We shape our core capabilities around lean product teams capable of delivering immense value to organisations
          worldwide
        </Typography>
        <Hyperlink href="/blog" component={<Button>Go to our blog</Button>} />
      </div>
      <BlogPosts posts={blogPosts} />
    </Container>
  );
};

export default BlogSection;
