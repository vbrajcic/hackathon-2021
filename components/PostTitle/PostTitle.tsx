import React from 'react';

import Typography from '@material-ui/core/Typography';

import styles from './PostTitle.module.scss';

interface PostTitleProps {
  intro?: string;
  title: string;
}

const PostTitle: React.FC<PostTitleProps> = ({ intro, title }) => (
  <Typography variant="h1" className={styles.container}>
    {intro && (
      <Typography color="secondary" variant="h1" component="span">
        {intro}
      </Typography>
    )}
    <br />
    {title}
  </Typography>
);

export default PostTitle;
