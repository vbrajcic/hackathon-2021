import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hyperlink from 'components/Hyperlink';
import techVerticals from 'config/techVerticals';

import Arrow from 'components/SvgIcons/Arrow';
import SummerCampCard from './SummerCampCard';
import styles from './AboutSummerCamp.module.scss';

const AboutSummerCamp: React.FC = () => (
  <Grid className={styles.container}>
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
          Profico Summer Camp je naš dvotjedni program gdje polaznici imaju priliku radeći u timu na konkretnom projektu
          iskusiti simulaciju svega onoga što ih očekuje po završetku studiranja. Dakle, fokus nije samo na razvijanju
          tehničkog znanja nego i dobivanju uvida u procese i rad tvrtke s ciljem budućeg zapošljavanja.
        </Typography>
      </Grid>

      <Container className={styles.buttonWrapper}>
        <Hyperlink
          href="about"
          component={
            <Button startIcon={<Arrow stroke="#dc6b42" />} className={styles.button} color="secondary">
              About us
            </Button>
          }
        />
      </Container>
    </Container>
  </Grid>
);

export default AboutSummerCamp;
