import React from 'react';

import Typography from '@material-ui/core/Typography';

import styles from './PostTitle.module.scss';

const PostTitle: React.FC = ({ children }) => (
  <Typography variant="h1">
    <span className={styles.title}>We are hiring</span>
    <br />
    {children}
  </Typography>
);

export default PostTitle;
