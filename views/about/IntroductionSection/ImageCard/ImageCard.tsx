import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import styles from './ImageCard.module.scss';

interface ImageCardProps {
  heading: string;
  text: string;
  image: string;
  style?: {
    paddingLeft: number;
    width: number;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ heading, text, image, style }) => (
  <Card classes={{ root: styles.root }} className={styles.container} square style={style}>
    <CardMedia component="img" image={image} alt="Our Home" />
    <CardContent className={styles.content}>
      <Typography className={styles.title}>{heading}</Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {text}
      </Typography>
    </CardContent>
  </Card>
);

export default ImageCard;
