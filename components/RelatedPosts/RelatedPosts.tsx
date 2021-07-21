import React from 'react';
import Post from 'types/posts/post';
import Teaser from 'components/Teaser';

import { Node } from 'types/common';
import { Typography } from '@material-ui/core';

import styles from './RelatedPosts.module.scss';

interface RelatedPostsProps {
  posts: Node<Post>[];
  page: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts, page }) => {
  if (!posts.length) {
    return null;
  }

  return (
    <section className={styles.container}>
      <Typography variant="h2" className={styles.heading}>
        More posts
      </Typography>
      <div className={styles.grid}>
        {posts.map(({ node }) => (
          <Teaser
            key={node.slug}
            title={node.title}
            coverImage={node.image?.thumbnailImage || node.featuredImage?.node}
            url={`/${page}/${node.slug}`}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
