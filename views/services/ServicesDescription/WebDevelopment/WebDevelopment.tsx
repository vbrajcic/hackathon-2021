import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import KeywordChips from '../KeywordChips';

import styles from './WebDevelopment.module.scss';

const keywords = ['Backend', 'Backoffice', 'API', 'Web UI', 'Interactions', 'CMS'];

const WebDevelopment: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Grid className={styles.container}>
      <Container maxWidth="xl" className={styles.content} classes={{ root: styles.root }}>
        <Grid className={styles.textWrapper}>
          <Typography variant="h2" className={styles.title}>
            Web Development
          </Typography>
          <Typography variant="body2" className={styles.descripton}>
            Our frontend and backend teams represent a main force behind our high performing sites across all screens
            and browsers. Both teams are committed to building a robust and scalable backend that supports your business
            flow and user journeys, transforming design sketches into a live and visually appealing product with smooth
            interactions and the clean code.
          </Typography>
        </Grid>
        {!isMobile && (
          <Grid className={styles.chipsWrapper}>
            <KeywordChips keywords={keywords} />
          </Grid>
        )}
      </Container>
    </Grid>
  );
};

export default WebDevelopment;
