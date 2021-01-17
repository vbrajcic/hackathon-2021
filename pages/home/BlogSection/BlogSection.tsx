import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Hyperlink from 'components/Hyperlink';

import BlogPosts from './BlogPosts';

import styles from './BlogSection.module.scss';

const BlogSection: React.FC = () => (
  <Container maxWidth="xl" component="section" className={styles.container}>
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
    <BlogPosts />
  </Container>
);

export default BlogSection;
