import React from 'react';
import Image from 'next/image';
import Hyperlink from 'components/Hyperlink';

import { Container, Typography, Grid, Button, Box } from '@material-ui/core';
import { addAssetPrefix } from 'utils/static/addAssetPrefix';
import { useRouter } from 'next/router';

import styles from './SummerCampBanner.module.scss';

const SummerCampBanner: React.FC = () => {
  const router = useRouter();

  if (router.pathname === '/summer-camp') {
    return null;
  }

  return (
    <div className={styles.container}>
      <Container className={styles.content}>
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
          <Typography className={styles.subtitle}>July 19 - July 30</Typography>
        </Box>
        <Box className={styles.buttonWrapper}>
          <Hyperlink
            href="summer-camp"
            component={
              <Button
                className={styles.button}
                size="small"
                classes={{ startIcon: styles.startIcon }}
                color="secondary"
              >
                <Typography className={styles.text}>Find out more</Typography>
              </Button>
            }
          />
        </Box>
      </Container>
    </div>
  );
};

export default SummerCampBanner;
