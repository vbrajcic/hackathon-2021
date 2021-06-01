import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import idealCandidate from 'config/idealCandidate';

import CandidateCard from './CandidateCard';

import styles from './IdealCandidate.module.scss';

const IdealCandidate: React.FC = () => (
  <Grid className={styles.container} component="section">
    <Container maxWidth="xl" className={styles.content}>
      <Grid className={styles.textWrapper}>
        <Typography variant="h2" className={styles.title}>
          Ideal candidate
        </Typography>
        <Typography variant="body2" className={styles.descripton}>
          Traži se visoka razina motivacije i želje za učenjem i napredovanjem u struci, kao i elemente osobne
          izvrsnosti. Prednost imaju visokomotivirani pojedinci na završnim godinama studija, ali ne isključuju se ni
          studenti nižih godina studija.
        </Typography>
      </Grid>
      <Container className={styles.cardsWrapper}>
        {idealCandidate.map(tech => (
          <CandidateCard key={tech.id} {...tech} />
        ))}
      </Container>
    </Container>
  </Grid>
);

export default IdealCandidate;
