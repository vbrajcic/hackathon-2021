import React from 'react';
import Layout from 'components/Layout';
import Hyperlink from 'components/Hyperlink';

import { Button, Grid, Typography } from '@material-ui/core';

import styles from './Error404Page.module.scss';

const Error404Page: React.FC = () => (
  <Layout title="Not found" ContainerProps={{ className: styles.root }}>
    <Grid className={styles.container} container alignItems="center" justify="center">
      <Grid item className={styles.item}>
        <Typography variant="h1">
          Ooops
          <Typography variant="h1" color="secondary" component="ins" className={styles.ins}>
            !
          </Typography>
        </Typography>
        <Typography variant="h4">We can&apos;t seem to find the page you&apos;re looking for.</Typography>
        <Hyperlink
          data-ga-event-name="go_to_homepage"
          href="/"
          component={
            <Button className={styles.button} color="primary">
              Go to homepage
            </Button>
          }
        />
      </Grid>
    </Grid>
  </Layout>
);

export default Error404Page;
