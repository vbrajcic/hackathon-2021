import React from 'react';
import Typography from '@material-ui/core/Typography';
import FingerTouch from 'components/SvgIcons/Fingertouch';
import cn from 'clsx';
import styles from './HeroCard.module.scss';

interface HeroCardProps {
  color: string;
  text: string;
  isSpecial?: boolean;
}

const HeroCard: React.FC<HeroCardProps> = ({ color, text, isSpecial }) => (
  <div className={cn(styles.card, { [styles.cardSpecial]: isSpecial })}>
    <div className={styles.image}>
      <FingerTouch fill={color} className={styles.cardIcon} />
    </div>
    <Typography className={styles.text} variant="h5" component="h2">
      {text}
    </Typography>
  </div>
);

export default HeroCard;
