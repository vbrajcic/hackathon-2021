import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import RulesGrid from './RulesGrid';

import styles from './OurRules.module.scss';

const OurRules: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Container maxWidth="xl" component="section" className={styles.container} classes={{ root: styles.root }}>
      <Typography variant="overline" color="textSecondary" className={styles.sectionTitle}>
        OUR RULES
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
    </Container>
  );
};

export default OurRules;
