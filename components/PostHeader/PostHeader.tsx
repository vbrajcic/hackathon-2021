import React from 'react';
import cn from 'clsx';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Author from 'types/posts/author';
import PostTitle from 'components/PostTitle';
import FeaturedImage from 'types/posts/featuredImage';
import { Node } from 'types/common';
import { useTheme } from 'utils/context/ThemeContext';

import PostInfo from './PostInfo';
import styles from './PostHeader.module.scss';

interface PostHeaderProps {
  intro?: string;
  title: string;
  author: Author;
  content?: string;
  featuredImage?: Node<FeaturedImage>;
  template?: 'static' | undefined;
}

const PostHeader: React.FC<PostHeaderProps> = ({ intro, title, author, content, featuredImage, template }) => {
  const { theme } = useTheme();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={cn(styles.container, { [styles.darkTheme]: theme === 'dark', [styles.static]: template === 'static' })}
    >
      <Grid item className={styles.wrapper}>
        <PostTitle intro={intro} title={title} />
        <PostInfo author={author} content={content} />
      </Grid>
      <Box className={styles.imageWrapper}>
        <img className={styles.image} src={featuredImage?.node?.sourceUrl} alt="blogImage" />
      </Box>
    </Grid>
  );
};

export default PostHeader;
