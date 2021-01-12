import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import FeaturedImage from 'types/posts/featuredImage';
import styles from './Teaser.module.scss';

interface TeaserProps {
  title: string;
  coverImage: FeaturedImage;
  excerpt: string;
  slug: string;
}

const Teaser: React.FC<TeaserProps> = ({ title, coverImage, excerpt, slug }) => (
  <Card className={styles.container} classes={{ root: styles.root }}>
    <CardActionArea href={slug} className={styles.cardArea}>
      <CardMedia image={coverImage?.sourceUrl} title={slug} className={styles.image} />
      <CardContent className={styles.content}>
        <Typography variant="h4">{title}</Typography>
        <Typography
          variant="body2"
          component="div"
          dangerouslySetInnerHTML={{ __html: excerpt }}
          className={styles.excerpt}
        />
        <CardActions className={styles.actions}>
          <Button className={styles.button} classes={{ label: styles.label }}>
            Read more
          </Button>
        </CardActions>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default Teaser;
