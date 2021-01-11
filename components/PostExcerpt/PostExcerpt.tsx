import React from 'react';

import Typography from '@material-ui/core/Typography';

import styles from './PostExcerpt.module.scss';

interface PostExcerptProps {
  excerpt: string;
}

const PostExcerpt: React.FC<PostExcerptProps> = ({ excerpt }) => (
  <Typography
    className={styles.container}
    component="div"
    variant="inherit"
    dangerouslySetInnerHTML={{ __html: excerpt }}
  />
);

export default PostExcerpt;
