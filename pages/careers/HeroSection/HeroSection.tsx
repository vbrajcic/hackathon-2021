import React from 'react';
import Intro from 'components/Intro';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import HeroCard from '../HeroCard';
import styles from './HeroSection.module.scss';
import Colors from 'styles/Colors';
import useBreakpoint from 'utils/hooks/useBreakpoint';

interface HeroSectionProps {
  numberOfOpenPositions: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ numberOfOpenPositions }) => {
  const isButtonDisabled: boolean = numberOfOpenPositions === 0;
  const { isMobile } = useBreakpoint();
  let buttonText: string = `View ${numberOfOpenPositions} open positions`;

  if (isButtonDisabled) {
    buttonText = 'No open positions';
  }

  const handleButtonClick = (): void => {
    const openPositions = document.getElementById('open-positions-section');

    if (openPositions) {
      const offsetTop = openPositions.offsetTop;
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
          <Button className={styles.button} onClick={handleButtonClick} color="primary" disabled={isButtonDisabled}>
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
