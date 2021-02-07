import React, { FC } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import SocialIcon from 'components/SocialIcon';
import { Leader } from 'config/leadership';

import styles from './LeaderCard.module.scss';

interface LeaderCardProps {
  leader: Leader;
}

const LeaderCard: FC<LeaderCardProps> = ({ leader: { name, jobPosition, image, socialMedia } }) => (
  <Card classes={{ root: styles.root }} className={styles.container}>
    <CardMedia component="img" image={image} alt={name} className={styles.image} />
    <CardContent className={styles.content}>
      <Typography className={styles.name}>{name}</Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {jobPosition}
      </Typography>
      <Grid container className={styles.socialIcons}>
        {socialMedia.map(item => (
          <SocialIcon icon={item.icon} url={item.url} key={item.url} />
        ))}
      </Grid>
    </CardContent>
  </Card>
);

export default LeaderCard;
