import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import styles from './Intro.module.scss';

const Intro: React.FC = () => {
  const { isMobile } = useBreakpoint();

  const handleApplyClick = (): void => {
    const summerCampApplyFrom = document.getElementById('summer-camp-apply-form');

    if (summerCampApplyFrom) {
      const { offsetTop } = summerCampApplyFrom;
      window.scrollTo({
        top: isMobile ? offsetTop - 40 : offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Grid className={styles.container}>
      <Typography variant="h1" className={styles.title}>
        Profico Summer Camp
        <div className={styles.label}>2021</div>
      </Typography>
      <Typography variant="body1" className={styles.subtitle}>
        July 19 - July 30
      </Typography>
      <Button
        data-ga-event-name="scrollto_summercamp_apply_form"
        onClick={handleApplyClick}
        className={styles.button}
        color="secondary"
      >
        Apply now
      </Button>
      <Typography variant="body2" className={styles.disclaimer}>
        Applications close on July 1
      </Typography>
    </Grid>
  );
};

export default Intro;
