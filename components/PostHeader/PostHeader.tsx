import React from 'react';

import Grid from '@material-ui/core/Grid';

import PostExcerpt from 'components/PostExcerpt';
import PostTitle from 'components/PostTitle';

import styles from './PostHeader.module.scss';

interface PostHeaderProps {
  title: string;
  excerpt: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, excerpt }) => (
  <Grid container justify="center" alignItems="center" className={styles.container}>
    <Grid item>
      <PostTitle>{title}</PostTitle>
      <PostExcerpt excerpt={excerpt} />
    </Grid>
  </Grid>
);

export default PostHeader;
