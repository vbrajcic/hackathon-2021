import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import Partners from './Partners';
import QuoteCards from './QuoteCards';

import styles from './ReferencesSection.module.scss';

const ReferencesSection: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <section className={styles.container}>
      {!isMobile && <div className={styles.backgroundWrapper} />}
      <Container maxWidth="xl" classes={{ root: styles.root }}>
        <Grid container>
          <Grid item lg={5} md={6} xs={12} className={styles.textWrapper}>
            <Typography variant="h2" className={styles.title}>
              These
              <br />
              companies
              <br />
              trust us
            </Typography>
            <Typography variant="body2" className={styles.subtitle}>
              We shape our core capabilities around lean
              <br />
              product teams capable of delivering immense
              <br />
              value to organisations worldwide
            </Typography>
          </Grid>
          <Grid item container lg={7} md={6} xs={12} alignItems="center" className={styles.partnersWrapper}>
            <Partners />
          </Grid>
        </Grid>
        <QuoteCards />
      </Container>
    </section>
  );
};

export default ReferencesSection;
