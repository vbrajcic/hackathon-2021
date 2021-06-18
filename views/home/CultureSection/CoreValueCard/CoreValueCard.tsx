import React from 'react';
import Target from 'components/SvgIcons/Target';
import CustomerCenter from 'components/SvgIcons/CustomerCenter';
import RatingStar from 'components/SvgIcons/RatingStar';
import HandHeart from 'components/SvgIcons/HandHeart';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { CoreValue, CoreValueIcon } from 'config/coreValues';

import styles from './CoreValueCard.module.scss';

interface CoreValueCardProps {
  value: CoreValue;
  index: number;
}

const IconMap: { [key in CoreValueIcon]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
  EMPATHY: HandHeart,
  TARGET: Target,
  STAR: RatingStar,
  CUSTOMER: CustomerCenter,
};

const CoreValueCard: React.FC<CoreValueCardProps> = ({ value, index }) => {
  if (!value) {
    return null;
  }

  const { title, subtitle, icon } = value;
  const Icon = IconMap[icon];

  return (
    <Paper elevation={0} classes={{ root: styles.root }} className={styles.container} data-index={`0${index}`}>
      <Icon className={styles.icon} />
      <Typography variant="h5" component="h3" className={styles.title}>
        {title}
      </Typography>
      <Typography variant="body2" className={styles.subtitle}>
        {subtitle}
      </Typography>
    </Paper>
  );
};

export default CoreValueCard;
