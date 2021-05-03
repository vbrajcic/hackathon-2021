import React from 'react';
import Behance from 'components/SvgIcons/Behance/BehanceLogo';
import Dribbble from 'components/SvgIcons/Dribbble/DribbbleLogo';
import Deloitte from 'components/SvgIcons/Deloitte/DeloitteLogo';
import DeloitteFast50 from 'components/SvgIcons/Deloitte/DeloitteFast50';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { Achievement, AchievementLogo } from 'config/achievements';

import styles from './AchievementCard.module.scss';

interface CoreValueCardProps {
  achievement: Achievement;
}

const LogoMap: { [key in AchievementLogo]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
  BEHANCE: Behance,
  DRIBBBLE: Dribbble,
  DELOITTE: Deloitte,
};

const AchievementCard: React.FC<CoreValueCardProps> = ({ achievement }) => {
  const { logo, followers, details, name } = achievement;
  const Logo = LogoMap[logo];
  const Icon = details?.icon;

  return (
    <Paper classes={{ root: styles.root }} className={`${styles.container} ${styles[name] || ''}`}>
      <Logo className={styles.logo} />
      {followers && (
        <Grid>
          <Typography variant="h3" component="p" className={styles.number}>
            {followers.toLocaleString()}
          </Typography>
          <Typography variant="body2" className={styles.followers}>
            Followers
          </Typography>
        </Grid>
      )}
      {details && (
        <Grid container alignItems="center">
          {Icon && <Icon className={styles.icon} width={22} />}
          <Typography variant="body2" className={styles.detailsText}>
            {details.text}
          </Typography>
        </Grid>
      )}
      {logo === 'DELOITTE' && <DeloitteFast50 height={81} className={styles.fastFifty} />}
    </Paper>
  );
};

export default AchievementCard;
