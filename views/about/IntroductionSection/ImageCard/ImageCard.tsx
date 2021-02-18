import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import styles from './ImageCard.module.scss';

interface ImageCardProps {
  heading: string;
  text: string;
  image: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ heading, text, image }) => (
  <Card classes={{ root: styles.root }} className={styles.container}>
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
