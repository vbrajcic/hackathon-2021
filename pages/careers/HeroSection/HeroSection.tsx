import React from 'react';
import Intro from 'components/Intro';
import Button from '@material-ui/core/Button';
import Hyperlink from 'components/Hyperlink';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import HeroCard from '../HeroCard';
import styles from './HeroSection.module.scss';

interface HeroSectionProps {
  numberOfOpenPositions: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ numberOfOpenPositions }) => (
  <Grid component="section" className={styles.root}>
    <Container className={styles.container} maxWidth="xl">
      <Intro text="Join our team in building great products" className={styles.intro}>
        <Hyperlink
          href="/careers"
          component={
            <Button className={styles.button} color="primary">
              View {numberOfOpenPositions} open positions
            </Button>
          }
        />
      </Intro>
      <Grid className={styles.cardsContainer}>
        <HeroCard color="#424D56" text="Design systems" />
        <HeroCard color="#2ACDA3" text="Kick ass IoT implementations" isSpecial />
        <HeroCard color="#212529" text="Killer web and mobile apps" />
      </Grid>
    </Container>
  </Grid>
);

export default HeroSection;
