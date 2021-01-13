import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Post from 'types/posts/post';
import { Node } from 'types/common';
import Hyperlink from 'components/Hyperlink';

import styles from './BlogSection.module.scss';
import BlogPosts from './BlogPosts';

interface BlogSectionProps {
  posts: Node<Post>[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => (
  <Grid container direction="column" component="section" className={styles.container}>
    <Typography variant="h2">
      Find out what we’ve been
      <br />
      talking about
    </Typography>
    <Typography variant="body2" color="textSecondary" className={styles.subtitle}>
      We shape our core capabilities around lean product teams capable of delivering immense value to organisations
      worldwide
    </Typography>
    <Hyperlink href="/blog" component={<Button className={styles.button}>Go to our blog</Button>} />
    <BlogPosts posts={posts} />
  </Grid>
);

export default BlogSection;
