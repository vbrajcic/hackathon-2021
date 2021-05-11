import React from 'react';
import cn from 'classnames';

import Grid from '@material-ui/core/Grid';

import PostExcerpt from 'components/PostExcerpt';
import PostTitle from 'components/PostTitle';
import { Node } from 'types/common';
import FeaturedImage from 'types/posts/featuredImage';
import { useTheme } from 'utils/context/ThemeContext';

import styles from './PostHeader.module.scss';

interface PostHeaderProps {
  intro?: string;
  title: string;
  excerpt: string;
  featuredImage?: Node<FeaturedImage>;
  template?: 'static' | undefined;
}

const PostHeader: React.FC<PostHeaderProps> = ({ intro, title, excerpt, featuredImage, template }) => {
  const { theme } = useTheme();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={cn(styles.container, { [styles.darkTheme]: theme === 'dark', [styles.static]: template === 'static' })}
      style={{ backgroundImage: `url(${featuredImage?.node?.sourceUrl})` }}
    >
      <Grid item className={styles.wrapper}>
        <PostTitle intro={intro} title={title} />
        <PostExcerpt excerpt={excerpt} />
      </Grid>
    </Grid>
  );
};

export default PostHeader;
