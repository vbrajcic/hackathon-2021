import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import Heading from '../Heading';

import styles from './PartnersGrid.module.scss';

const partners = [
  'ericsson',
  'cisco',
  'uhy',
  'leMeridien',
  'sothebys',
  'amd',
  'nvidia',
  'telenor',
  'deloitte',
  'cnn',
  'microsoft',
  'tcom',
  'allianz',
];

const PartnersGrid: React.FC = () => {
  const { isMobile, isDesktop } = useBreakpoint();
  const { breakpoints } = useTheme();

  const showAllPartners = useMediaQuery(() => breakpoints.up(1300));

  return (
    <Grid container alignItems="center" className={styles.container}>
      <Grid item className={styles.partnerItem}>
        <Grid container justify={isDesktop ? 'flex-start' : 'center'}>
          <img src={`images/partners/${partners[0]}.png`} alt={`${partners[0]}`} className={styles.partnerImg} />
        </Grid>
      </Grid>
      {!isMobile && (
        <Grid item className={styles.cardItem}>
          <Grid container className={styles.cardWrapper} justify={isDesktop ? 'flex-start' : 'center'}>
            <Card className={styles.card}>
              <Heading />
            </Card>
          </Grid>
        </Grid>
      )}
      {partners.slice(1, showAllPartners ? partners.length : 10).map(partner => (
        <Grid item key={partner} className={styles.partnerItem}>
          <Grid container justify={isDesktop ? 'flex-start' : 'center'}>
            <img src={`images/partners/${partner}.png`} alt={partner} className={styles.partnerImg} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default PartnersGrid;
