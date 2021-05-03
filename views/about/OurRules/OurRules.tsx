import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import RulesGrid from './RulesGrid';

import styles from './OurRules.module.scss';

const OurRules: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Container maxWidth="xl" component="section" className={styles.container} classes={{ root: styles.root }}>
      <Grid className={styles.innerWrapper}>
        <Typography variant="overline" color="textSecondary" className={styles.sectionTitle}>
          OUR VALUES
        </Typography>
        <Typography variant="h2" className={styles.title}>
          How we do it is
          {isMobile ? <br /> : ' '}
          equally
          <br />
          important as what we do
        </Typography>
        <Typography variant="body2" color="textSecondary" className={styles.subtitle}>
          Successful project relationships transform us from suppliers to partners and beyond.
        </Typography>
        <RulesGrid />
      </Grid>
    </Container>
  );
};

export default OurRules;
