import React from 'react';
import Intro from 'components/Intro';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import careersHeroCards from 'config/careersHeroCards';
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
    <Grid component="section" className={styles.container} classes={{ root: styles.root }}>
      <Container className={styles.sectionContainer} maxWidth="xl">
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
          {careersHeroCards.map(cards => (
            <HeroCard key={cards.id} {...cards} />
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default HeroSection;
