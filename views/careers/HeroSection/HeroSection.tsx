import React from 'react';
import Intro from 'components/Intro';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Colors from 'styles/Colors';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import HeroCard from './HeroCard';

import styles from './HeroSection.module.scss';

interface HeroSectionProps {
  numberOfOpenPositions: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ numberOfOpenPositions }) => {
  const noOpenPositions: boolean = numberOfOpenPositions === 0;
  const buttonText = noOpenPositions ? 'No open positions' : `View ${numberOfOpenPositions} open positions`;
  const { isMobile } = useBreakpoint();

  const handleButtonClick = (): void => {
    const openPositions = document.getElementById('open-positions-section');

    if (openPositions) {
      const { offsetTop } = openPositions;
      window.scrollTo({
        top: isMobile ? offsetTop - 80 : offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Grid component="section" className={styles.root}>
      <Container className={styles.container} maxWidth="xl">
        <Intro text="Join our team in building great products" className={styles.intro}>
          <Button
            data-ga-event-name="scrollto_open_positions"
            className={styles.button}
            onClick={handleButtonClick}
            color="primary"
            disabled={noOpenPositions}
          >
            {buttonText}
          </Button>
        </Intro>
        <Grid className={styles.cardsContainer}>
          <HeroCard color={Colors.muted} text="Design systems" />
          <HeroCard color="#2ACDA3" text="Kick ass IoT implementations" isSpecial />
          <HeroCard color={Colors.textPrimary} text="Killer web and mobile apps" />
        </Grid>
      </Container>
    </Grid>
  );
};

export default HeroSection;