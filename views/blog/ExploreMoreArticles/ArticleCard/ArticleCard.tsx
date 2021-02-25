import React from 'react';
import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@material-ui/core';
import Post from 'types/posts/post';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import styles from './ArticleCard.module.scss';

interface ArticleCardProps {
  post: Post;
}
const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  return (
    <Card classes={{ root: styles.root }} className={styles.container}>
      <CardMedia component="img" image={post.featuredImage.node.sourceUrl} alt="Our Home" />
      <CardContent className={styles.content}>
        <Typography variant="h4" className={styles.title}>
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="div"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
        <Grid className={styles.readMoreContainer}>
          <Typography component="p" className={styles.text}>
            Read more
          </Typography>
          <IconButton value="right" className={styles.openArticleBtn}>
            <ChevronRightIcon className={styles.icon} />
          </IconButton>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
