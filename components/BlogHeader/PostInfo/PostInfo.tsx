import React from 'react';
import Author from 'types/posts/author';

import { Box, Typography, Avatar } from '@material-ui/core';
import { estimateReadingTime } from 'utils/static/estimateReadingTime';
import { getAuthorImage, getAuthorName } from 'utils/static/postHelpers';

import styles from './PostInfo.module.scss';

interface PostInfoProps {
  author: Author;
  content?: string;
}

const PostInfo: React.FC<PostInfoProps> = ({ author, content }) => {
  if (!content) {
    return null;
  }

  const timeLeft = estimateReadingTime(content);

  return (
    <Box className={styles.container}>
      <Avatar src={getAuthorImage(author)} className={styles.avatar} alt={getAuthorName(author)} />
      <Typography className={styles.name} variant="body2">
        {getAuthorName(author)}
      </Typography>
      <Typography className={styles.timeLeft} variant="body2">
        {` ${timeLeft} min read`}
      </Typography>
    </Box>
  );
};

export default PostInfo;
