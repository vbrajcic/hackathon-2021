import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import { useTheme } from '@material-ui/core/styles';
import { addAssetPrefix } from 'utils/static/addAssetPrefix';

import styles from './Partners.module.scss';

const partners = ['allianz', 'cisco', 'deloitte', 'ericsson', 'leMeridien', 'sothebys', 'tcom', 'telenor', 'uhy'];

const Partners: React.FC = () => {
  const { isMobile } = useBreakpoint();
  const { breakpoints } = useTheme();

  const showTwoColumns = useMediaQuery(() => breakpoints.only('md'));

  return (
    <Container className={styles.container}>
      <Grid container spacing={isMobile ? 4 : 10} alignItems="center" justify="space-around">
        {partners.map(partner =>
          showTwoColumns && partner === 'tcom' ? null : (
            <Grid item key={partner} lg={4} md={6} sm={4} xs={4}>
              <Grid container justify="center">
                <img
                  src={addAssetPrefix(`images/partners/${partner}.png`)}
                  alt={partner}
                  className={styles.partnerImg}
                />
              </Grid>
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
};

export default Partners;