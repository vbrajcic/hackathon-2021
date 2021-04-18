import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import ourRules from 'config/ourRules';

import styles from './RulesGrid.module.scss';

const OurRules: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Grid container className={styles.container}>
      {ourRules.map(({ number, heading, description }) => (
        <Grid key={number} item lg={4} md={6} xs={12} className={styles.ruleWrapper}>
          <Grid container wrap="nowrap" direction={isMobile ? 'column' : 'row'}>
            <Grid item>
              <Typography color="secondary" variant="body1" className={styles.number}>
                {number}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={styles.heading} variant="h4" component="h3">
                {heading}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default OurRules;
