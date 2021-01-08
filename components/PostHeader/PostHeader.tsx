import React from 'react';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import CodeIcon from '@material-ui/icons/Code';

import PostExcerpt from 'components/PostExcerpt';
import PostTitle from 'components/PostTitle';

import styles from './PostHeader.module.scss';

interface PostHeaderProps {
  title: string;
  excerpt: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, excerpt }) => (
  <Grid container justify="center" alignItems="center" classes={{ root: styles.container }}>
    <Grid item>
      <PostTitle>{title}</PostTitle>
      <PostExcerpt excerpt={excerpt} />
    </Grid>
    <Fab color="secondary" size="large" classes={{ root: styles.button }}>
      <CodeIcon classes={{ root: styles.icon }} />
    </Fab>
  </Grid>
);

export default PostHeader;
