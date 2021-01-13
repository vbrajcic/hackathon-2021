import React from 'react';
import Grid from '@material-ui/core/Grid';

import { Node } from 'types/common';
import Post from 'types/posts/post';
import Teaser from 'components/Teaser';

import styles from './BlogPosts.module.scss';

interface BlogPostsProps {
  posts: Node<Post>[];
}

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
  if (!posts || !posts.length) return null;
  const blogPosts: Post[] = posts.map(({ node }: Node<Post>) => node).slice(0, 3);
  const expandCards = blogPosts.length < 3;
  return (
    <Grid container classes={{ root: styles.root }} className={`${styles.container}`}>
      <Grid container wrap="nowrap" className={styles.slider}>
        {blogPosts.map((post: Post) => (
          <Grid item className={`${styles.teaser} ${expandCards ? styles.expand : ''}`} key={post.slug}>
            <Teaser
              title={post.title}
              excerpt={post.excerpt}
              coverImage={post.featuredImage?.node}
              slug={`/blog/${post.slug}`}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BlogPosts;
