import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import achievements from 'config/achievements';

import styles from './AchievementsSection.module.scss';
import AchievementCard from './AchievementCard';

const AchievementsSection: React.FC = () => {
  const { isMobile, isDesktop } = useBreakpoint();

  return (
    <section className={styles.container}>
      <Container maxWidth="xl" classes={{ root: styles.root }}>
        {!isMobile && <div className={styles.backgroundWrapper} />}
        <Grid container>
          <Grid item xs={12} lg={3} className={styles.textWrapper}>
            <Typography variant="overline" className={styles.sectionTitle}>
              Achievements
            </Typography>
            <Typography variant="h2" className={styles.title}>
              Street cred
            </Typography>
            <Typography variant="body2" className={styles.subtitle}>
              Profico is recognised by industry leading
              <br />
              communities and organisations
            </Typography>
          </Grid>
          <Grid container item xs={12} lg={9}>
            <Grid container item xs={12} className={styles.bigCard}>
              <AchievementCard achievement={achievements[0]} />
            </Grid>
            <Grid container justify={isDesktop ? 'flex-start' : 'flex-end'} className={styles.bottomCards}>
              {achievements.slice(1).map(achievement => (
                <Grid item className={styles.card} key={achievement.name}>
                  <AchievementCard achievement={achievement} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AchievementsSection;
