import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import { useTheme } from '@material-ui/core/styles';

import styles from './Partners.module.scss';

const partners = ['allianz', 'cisco', 'deloitte', 'erricson', 'lav', 'sothebys', 'tcom', 'telenor', 'uhy'];

const Partners: React.FC = () => {
  const { isMobile } = useBreakpoint();
  const { breakpoints } = useTheme();

  const showTwoColumns = useMediaQuery(() => breakpoints.only('md'));

  return (
    <Container className={styles.container}>
      <Grid container item spacing={isMobile ? 4 : 10} alignItems="center" justify="space-around">
        {partners.map(partner =>
          showTwoColumns && partner === 'tcom' ? undefined : (
            <Grid item key={partner} lg={4} md={6} sm={4} xs={4}>
              <img
                key={partner}
                src={`/images/partners/${partner}.png`}
                alt={`${partner}`}
                className={styles.partnerImg}
              />
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
};

export default Partners;
