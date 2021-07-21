import React from 'react';
import Grid from '@material-ui/core/Grid';
import cn from 'clsx';
import Post from 'types/posts/post';
import Teaser from 'components/Teaser';

import { useBlogPosts } from 'utils/context/BlogPostsContext';

import styles from './BlogPosts.module.scss';

const BlogPosts: React.FC = () => {
  const {
    posts: { edges: posts },
  } = useBlogPosts();

  if (!posts || !posts.length) {
    return null;
  }

  const blogPosts = posts.map(({ node }) => node).slice(0, 3);
  const expandCards = blogPosts.length < 3;

  return (
    <Grid container classes={{ root: styles.root }} data-ga-event-name="open-blog-post" className={styles.container}>
      <Grid container wrap="nowrap" data-ga-section="front" className={styles.slider}>
        {blogPosts.map((post: Post) => (
          <Grid item key={post.slug} className={cn(styles.teaser, { [styles.expand]: expandCards })}>
            <Teaser
              title={post.title}
              excerpt={post.excerpt}
              coverImage={post.image?.thumbnailImage || post.featuredImage?.node}
              tags={post.tags}
              url={`/blog/${post.slug}`}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BlogPosts;
