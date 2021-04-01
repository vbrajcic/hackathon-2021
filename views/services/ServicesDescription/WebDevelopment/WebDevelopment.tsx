import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import KeywordChips from '../KeywordChips';

import styles from './WebDevelopment.module.scss';

const keywords = [
  'User Flow',
  'Information Architecture',
  'Wireframes',
  'User Testing',
  'Prototypes',
  'Interface Design',
];

const WebDevelopment: React.FC = () => {
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
          <Grid item>
            <Grid className={styles.textWrapper}>
              <Typography variant="h2" className={styles.title}>
                Web Development
              </Typography>
              <Typography variant="body2" className={styles.descripton}>
                Our frontend and backend teams represent a main force behind our high performing sites across all
                screens and browsers. Robust, and scalable backend development ensures your user journeys and business
                flows work as they are expected to.
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

export default WebDevelopment;
