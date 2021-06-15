import React from 'react';
import Image from 'next/image';
import Hyperlink from 'components/Hyperlink';
import cx from 'clsx';

import { Typography, Grid, Button, Box } from '@material-ui/core';
import { addAssetPrefix } from 'utils/static/addAssetPrefix';
import { useRouter } from 'next/router';

import styles from './SummerCampBanner.module.scss';

interface SummerCampBannerProps {
  className?: string;
}

const SummerCampBanner: React.FC<SummerCampBannerProps> = ({ className }) => {
  const router = useRouter();

  if (router.pathname === '/summer-camp') {
    return null;
  }

  return (
    <div className={cx(styles.container, className)}>
      <Grid className={styles.imageWrapper}>
        <Image
          src={addAssetPrefix('/images/summerCamp/sandcastle-banner.png')}
          alt="sandcastle"
          height="57"
          width="126"
        />
      </Grid>
      <Box className={styles.textWrapper}>
        <Typography variant="subtitle1" className={styles.title}>
          Profico Summer Camp
          <div className={styles.label}>2021</div>
        </Typography>
        <Typography variant="body2" className={styles.subtitle}>
          July 19 - July 30
        </Typography>
      </Box>
      <Box className={styles.buttonWrapper}>
        <Hyperlink
          href="summer-camp"
          component={
            <Button className={styles.button} size="small" classes={{ startIcon: styles.startIcon }} color="secondary">
              <Typography variant="overline" className={styles.btnText}>
                Find out more
              </Typography>
            </Button>
          }
        />
      </Box>
    </div>
  );
};

export default SummerCampBanner;
