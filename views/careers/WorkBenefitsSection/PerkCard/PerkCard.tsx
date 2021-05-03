import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { Typography } from '@material-ui/core';
import { WorkBenefit } from 'config/workingBenefits';

import styles from './PerkCard.module.scss';

const PerkCard: React.FC<WorkBenefit> = ({ name, description, icon, image }) => {
  const Icon = icon;

  return (
    <Card classes={{ root: styles.root }} className={styles.container}>
      <CardMedia component="img" image={image} alt={name} height="225" className={styles.image} />
      <CardContent className={styles.content}>
        <Icon className={styles.icon} />
        <Typography gutterBottom className={styles.title}>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PerkCard;
