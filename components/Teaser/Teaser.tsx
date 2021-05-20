import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FeaturedImage from 'types/posts/featuredImage';
import Tag from 'types/posts/tag';
import cn from 'classnames';

import { Edges } from 'types/common';

import styles from './Teaser.module.scss';

interface TeaserProps {
  title: string;
  coverImage?: FeaturedImage;
  excerpt: string;
  url: string;
  tags?: Edges<Tag>;
  direction?: 'row' | 'column';
  className?: string;
  classes?: Partial<Record<'root' | 'media', string>>;
}

const Teaser: React.FC<TeaserProps> = ({ title, coverImage, excerpt, url, direction, className, tags, classes }) => {
  const blogTags = tags ? tags.edges.map(({ node }) => node.name) : [];

  return (
    <Card
      className={cn(styles.container, className, classes?.root, { [styles.noImage]: !coverImage })}
      classes={{ root: styles.root }}
      data-ga-name={title}
      data-ga-category={blogTags.join(',')}
    >
      <CardActionArea
        href={url}
        className={cn(styles.cardArea, { [styles.row]: direction === 'row' })}
        classes={{ focusHighlight: styles.focusHighlight }}
      >
        {coverImage && (
          <CardMedia image={coverImage?.sourceUrl} title={url} className={cn(styles.image, classes?.media)} />
        )}
        <CardContent className={cn(styles.content, { [styles.row]: direction === 'row' })}>
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
            <Button
              className={styles.button}
              color="primary"
              variant="text"
              classes={{ label: styles.label }}
              fullWidth
            >
              Read more
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Teaser;
