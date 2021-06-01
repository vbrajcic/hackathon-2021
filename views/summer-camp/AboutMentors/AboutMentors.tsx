import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import mentors from 'config/mentors';

import MentorCard from './MentorCard';

import styles from './AboutMentors.module.scss';

const AboutMentors: React.FC = () => (
  <Grid className={styles.container} component="section">
    <Container maxWidth="xl" className={styles.content}>
      <Typography variant="h2" className={styles.title}>
        Meet your mentors
      </Typography>
      <Grid className={styles.cards}>
        {mentors.map(({ name, description, icon, image }) => (
          <MentorCard key={name} {...{ name, description, icon, image }} />
        ))}
      </Grid>
    </Container>
  </Grid>
);

export default AboutMentors;
