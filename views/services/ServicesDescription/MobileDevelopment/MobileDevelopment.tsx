import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import KeywordChips from '../KeywordChips';

import styles from './MobileDevelopment.module.scss';

const keywords = ['iOS', 'Android', 'Swift', 'Kotlin', 'Native', 'Hybrid'];

const MobileDevelopment: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Grid className={styles.container}>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justify={isMobile ? 'flex-start' : 'flex-end'}
          className={styles.content}
          classes={{ root: styles.root }}
        >
          <Grid item md={5}>
            <Grid className={styles.textWrapper}>
              <Typography variant="h2" className={styles.title}>
                Mobile Development
              </Typography>
              <Typography variant="body2" className={styles.descripton}>
                Packing intuitive features, fast performance and high engagement into user’s pockets! In order to make
                an extraordinary app you need people that have a bunch of successful mobile apps in their portfolio.
                Fast forward to millions of downloads, 5 star ratings, revenue growth (and a couple of awards)
                afterwards, you end up with our mobile development team
              </Typography>
            </Grid>
            {!isMobile && (
              <Grid className={styles.chipsWrapper}>
                <KeywordChips keywords={keywords} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default MobileDevelopment;
