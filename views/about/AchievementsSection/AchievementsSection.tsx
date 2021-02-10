import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import achievements from 'config/achievements';

import styles from './AchievementsSection.module.scss';
import AchievementCard from './AchievementCard';

const AchievementsSection: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <section className={styles.container}>
      <Container maxWidth="xl" classes={{ root: styles.root }}>
        {!isMobile && <div className={styles.backgroundWrapper} />}
        <Grid container>
          <Grid item className={styles.textWrapper}>
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
          <Grid container className={styles.cardsWrapper}>
            <Grid container className={styles.bigCard}>
              <AchievementCard achievement={achievements[0]} />
            </Grid>
            <Grid container className={styles.bottomCards}>
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
