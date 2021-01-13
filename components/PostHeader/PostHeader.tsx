import React from 'react';

import Grid from '@material-ui/core/Grid';

import PostExcerpt from 'components/PostExcerpt';
import PostTitle from 'components/PostTitle';

import EasterEggPostButton from './EasterEggPostButton';

import styles from './PostHeader.module.scss';

interface PostHeaderProps {
  title: string;
  excerpt: string;
  slug: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, excerpt, slug }) => (
  <Grid container justify="center" alignItems="center" className={styles.container}>
    <Grid item>
      <PostTitle>{title}</PostTitle>
      <PostExcerpt excerpt={excerpt} />
    </Grid>
    <EasterEggPostButton slug={slug} />
  </Grid>
);

export default PostHeader;
