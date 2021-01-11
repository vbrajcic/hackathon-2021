import React from 'react';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

import PostExcerpt from 'components/PostExcerpt';
import PostTitle from 'components/PostTitle';
import Coding from 'components/SvgIcons/Coding';

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
    <Fab color="secondary" size="large" className={styles.button}>
      <Coding />
    </Fab>
  </Grid>
);

export default PostHeader;
