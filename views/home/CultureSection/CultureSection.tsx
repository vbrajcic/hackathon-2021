import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ContactForm from 'components/ContactForm';
import coreValues from 'config/coreValues';

import CoreValueCard from './CoreValueCard';

import styles from './CultureSection.module.scss';

const CultureSection: React.FC = () => (
  <Grid component="section" className={styles.container}>
    <Container maxWidth="xl">
      <Grid className={styles.textWrapper}>
        <Chip
          label={
            <Typography variant="overline" className={styles.label}>
              Our core values
            </Typography>
          }
          color="secondary"
        />
        <Typography variant="h2" className={styles.title}>
          Make something you are proud of.
        </Typography>
        <Typography variant="body2" className={styles.subtitle}>
          We take pride in what we deliver as a team. Embracing full ownership over the challenges we face and
          relentlessly working to help our clients build something both sides can be proud of.
        </Typography>
      </Grid>
      <Grid container>
        {coreValues.map((value, index) => (
          <CoreValueCard key={value.title} value={value} index={index + 1} />
        ))}
      </Grid>
      <ContactForm className={styles.form} />
    </Container>
  </Grid>
);

export default CultureSection;
