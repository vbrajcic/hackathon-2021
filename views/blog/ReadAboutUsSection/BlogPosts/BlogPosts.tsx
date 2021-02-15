import React from 'react';
import Grid from '@material-ui/core/Grid';
import cn from 'classnames';
import Post from 'types/posts/post';
import Teaser from 'components/Teaser';

import styles from './BlogPosts.module.scss';

interface BlogPostsProps {
  posts: Post[];
}

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
  if (!posts || !posts.length) {
    return null;
  }

  const expandCards = posts.length < 3;

  return (
    <Grid container classes={{ root: styles.root }} className={styles.container}>
      {posts.map((post: Post) => (
        <Grid item key={post.slug} className={cn(styles.teaser, { [styles.expand]: expandCards })}>
          <Teaser
            title={post.title}
            excerpt={post.excerpt}
            coverImage={post.featuredImage?.node}
            url={`/blog/${post.slug}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogPosts;
