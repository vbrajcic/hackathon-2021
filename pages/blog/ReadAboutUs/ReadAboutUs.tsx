import React from 'react';
import Container from '@material-ui/core/Container';
import BlogPosts from 'views/home/BlogSection/BlogPosts';

import { Grid, Typography } from '@material-ui/core';

import { useBlogPosts } from 'utils/context/BlogPostsContext';
import Teaser from 'components/Teaser';
import styles from './ReadAboutUs.module.scss';

const ReadAboutUs: React.FC = () => {
  const {
    posts: { edges: posts },
  } = useBlogPosts();

  const topPosts = posts.map(({ node }) => node).slice(0, 3);
  const featuredPost = posts[3].node;
  const bottomPosts = posts.map(({ node }) => node).slice(4, 7);

  return (
    <Container maxWidth="xl" component="section" className={styles.container} disableGutters>
      <Typography variant="h2">Read about us</Typography>
      <BlogPosts posts={topPosts} />
      <Grid className={styles.teaser}>
        <Teaser
          title={featuredPost.title}
          excerpt={featuredPost.excerpt}
          coverImage={featuredPost.featuredImage?.node}
          url={`/blog/${featuredPost.slug}`}
          direction="row"
        />
      </Grid>
      <BlogPosts posts={bottomPosts} />
    </Container>
  );
};

export default ReadAboutUs;
