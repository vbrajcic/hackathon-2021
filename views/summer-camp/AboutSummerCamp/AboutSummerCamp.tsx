import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hyperlink from 'components/Hyperlink';
import techVerticals from 'config/techVerticals';

import SummerCampCard from './SummerCampCard';
import styles from './AboutSummerCamp.module.scss';

const AboutSummerCamp: React.FC = () => (
  <Grid className={styles.container} component="section">
    <Container className={styles.cardsWrapper}>
      {techVerticals.map(tech => (
        <SummerCampCard key={tech.id} {...tech} />
      ))}
    </Container>
    <Container maxWidth="xl" className={styles.content} classes={{ root: styles.root }}>
      <Grid className={styles.textWrapper}>
        <Typography variant="h2" className={styles.title}>
          What is Profico Summer Camp?
        </Typography>
        <Typography variant="body2" className={styles.descripton}>
          Profico Summer Camp is a two-week educational program where students participate in a digital product
          development course that replicates real-life collaboration in the product team. You will get insights not only
          into the technology, design & delivery methods, but also in our company’s processes and typical work dynamics.
          The main goal is to establish an early interface with a company and hire young talents!
        </Typography>
      </Grid>

      <Container className={styles.buttonWrapper}>
        <Hyperlink
          href="about"
          component={
            <Button className={styles.button} color="secondary">
              About us
            </Button>
          }
        />
      </Container>
    </Container>
  </Grid>
);

export default AboutSummerCamp;
