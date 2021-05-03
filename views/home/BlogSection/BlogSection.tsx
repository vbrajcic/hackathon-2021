import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Hyperlink from 'components/Hyperlink';

import BlogPosts from './BlogPosts';

import styles from './BlogSection.module.scss';

const BlogSection: React.FC = () => (
  <Container maxWidth="xl" component="section" className={styles.container}>
    <div className={styles.main}>
      <Typography variant="h2">
        Find out what we’ve been
        <br />
        talking about
      </Typography>
      <Typography variant="body2" color="textSecondary" className={styles.subtitle}>
        Sharing some random insights & comments about design, technology, projects and approach. On other occasions, we
        just enjoy bragging about our achievements.
      </Typography>
      <Hyperlink href="/blog" component={<Button color="primary">Go to our blog</Button>} />
    </div>
    <BlogPosts />
  </Container>
);

export default BlogSection;
