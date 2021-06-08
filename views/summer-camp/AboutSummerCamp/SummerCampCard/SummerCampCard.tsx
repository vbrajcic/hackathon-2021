import React from 'react';
import Typography from '@material-ui/core/Typography';
import cn from 'classnames';
import { TechVerticals } from 'config/techVerticals';

import styles from './SummerCampCard.module.scss';

const SummerCampCard: React.FC<TechVerticals> = ({ title, id, icon: Icon }) => (
  <div
    className={cn(styles.container, {
      [styles.mobile]: id === 'mobile',
      [styles.management]: id === 'management',
      [styles.frontend]: id === 'frontend',
      [styles.backend]: id === 'backend',
    })}
  >
    <div className={styles.image}>
      <Icon className={styles.cardIcon} />
    </div>
    <Typography className={styles.text} variant="h5" component="h2">
      {title}
    </Typography>
  </div>
);

export default SummerCampCard;
