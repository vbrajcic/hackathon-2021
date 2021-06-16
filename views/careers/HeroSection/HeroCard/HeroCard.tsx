import React from 'react';
import Typography from '@material-ui/core/Typography';
import cn from 'clsx';
import { CareerHeroCard } from 'config/careersHeroCards';

import styles from './HeroCard.module.scss';

const HeroCard: React.FC<CareerHeroCard> = ({ icon: Icon, title, isSpecial }) => (
  <div className={cn(styles.card, { [styles.cardSpecial]: isSpecial })}>
    <div className={styles.image}>
      <Icon className={styles.cardIcon} />
    </div>
    <Typography className={styles.text} variant="h5" component="h2">
      {title}
    </Typography>
  </div>
);

export default HeroCard;
