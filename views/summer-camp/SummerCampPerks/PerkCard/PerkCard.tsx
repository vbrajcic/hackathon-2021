import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import { SummerCampPerk } from 'config/summerCampPerks';

import styles from './PerkCard.module.scss';

const PerkCard: React.FC<SummerCampPerk> = ({ title, subtitle, icon: Icon }) => (
  <Card elevation={0} classes={{ root: styles.root }} className={styles.container}>
    <Icon className={styles.icon} />
    <Typography variant="h4" component="h3" className={styles.title}>
      {title}
    </Typography>
    <Typography variant="body2" className={styles.subtitle}>
      {subtitle}
    </Typography>
  </Card>
);

export default PerkCard;
