import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import { Cheatsheet } from 'config/processCheatsheet';

import styles from './CheatsheetCard.module.scss';

const CheatsheetCard: React.FC<Cheatsheet> = ({ title, subtitle, icon: Icon }) => (
  <Card elevation={0} classes={{ root: styles.root }} className={styles.container}>
    <Icon className={styles.icon} />
    <Typography variant="h4" className={styles.title}>
      {title}
    </Typography>
    <Typography variant="body2" className={styles.subtitle}>
      {subtitle}
    </Typography>
  </Card>
);

export default CheatsheetCard;
