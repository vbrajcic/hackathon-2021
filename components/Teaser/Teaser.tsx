import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FeaturedImage from 'types/posts/featuredImage';
import cn from 'classnames';

import styles from './Teaser.module.scss';

interface TeaserProps {
  title: string;
  coverImage?: FeaturedImage;
  excerpt: string;
  url: string;
  direction?: 'row' | 'column';
}

const Teaser: React.FC<TeaserProps> = ({ title, coverImage, excerpt, url, direction }) => (
  <Card className={cn(styles.container, { [styles.noImage]: !coverImage })} classes={{ root: styles.root }}>
    <CardActionArea href={url} className={cn(styles.cardArea, { [styles.row]: direction === 'row' })}>
      {coverImage && <CardMedia image={coverImage?.sourceUrl} title={url} className={styles.image} />}
      <CardContent className={styles.content}>
        <Typography variant="h4" component="h3">
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          dangerouslySetInnerHTML={{ __html: excerpt }}
          className={styles.excerpt}
        />
        <CardActions className={styles.actions}>
          <Button className={styles.button} color="primary" variant="text" classes={{ label: styles.label }} fullWidth>
            Read more
          </Button>
        </CardActions>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default Teaser;
