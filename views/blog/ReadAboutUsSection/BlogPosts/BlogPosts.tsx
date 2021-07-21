import React from 'react';
import Grid from '@material-ui/core/Grid';
import Post from 'types/posts/post';
import Teaser from 'components/Teaser';

import styles from './BlogPosts.module.scss';

interface BlogPostsProps {
  posts: Post[];
}

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => (
  <Grid classes={{ root: styles.root }} className={styles.container}>
    <Grid container className={styles.content}>
      {posts.map((post: Post) => (
        <Grid item key={post.slug} className={styles.teaserWrapper}>
          <Teaser
            title={post.title}
            excerpt={post.excerpt}
            coverImage={post.image?.thumbnailImage || post.featuredImage?.node}
            url={`/blog/${post.slug}`}
            classes={{ root: styles.teaser, media: styles.media }}
          />
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default BlogPosts;
