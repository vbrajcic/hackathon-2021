import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ContactForm from 'components/ContactForm';
import coreValues from 'config/coreValues';

import SideTitle from '../SideTitle';
import CoreValueCard from './CoreValueCard';

import styles from './CultureSection.module.scss';

const CultureSection: React.FC = () => (
  <Grid component="section" className={styles.container}>
    <Container maxWidth="xl">
      <SideTitle title="Culture" />
      <Grid className={styles.wrapper}>
        <Chip
          label={
            <Typography variant="overline" className={styles.label}>
              Our core values
            </Typography>
          }
          color="secondary"
        />
        <Typography variant="h2" className={styles.title}>
          Make something you’re proud of.
        </Typography>
        <Typography variant="body2" className={styles.subtitle}>
          Successful project relationships transform us from suppliers to partners and beyond.
        </Typography>
        <Grid container>
          {coreValues.map((value, index) => (
            <CoreValueCard key={value.title} {...value} index={index + 1} />
          ))}
        </Grid>
        <ContactForm className={styles.form} />
      </Grid>
    </Container>
  </Grid>
);

export default CultureSection;
