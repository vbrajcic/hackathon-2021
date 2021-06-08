import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import idealCandidateDetails from 'config/idealCandidateDetails';

import CandidateCard from './CandidateCard';

import styles from './IdealCandidateSection.module.scss';

const IdealCandidateSection: React.FC = () => (
  <Grid className={styles.container} component="section">
    <Container maxWidth="xl" className={styles.content}>
      <Grid className={styles.textWrapper}>
        <Typography variant="h2" className={styles.title}>
          Ideal candidate
        </Typography>
        <Typography variant="body2" className={styles.descripton}>
          We would like to offer this opportunity to highly motivated students, eager to learn and grow professionally,
          with a proven track record of personal excellence in any field (education, competitions, sport, hobbies,
          etc.). We give some advantage to final year students, but younger students and freshmans are not excluded.
        </Typography>
      </Grid>
    </Container>
    <Grid container className={styles.cardsWrapper}>
      {idealCandidateDetails.map(candidate => (
        <Grid className={styles.cardItem} item key={candidate.id}>
          <CandidateCard {...candidate} />
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default IdealCandidateSection;
