import React, { FC } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import ImageGrid from './ImageGrid';

import styles from './MVPSection.module.scss';

const MVPSection: FC = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <Container
      maxWidth="xl"
      component="section"
      disableGutters={!isDesktop}
      className={styles.container}
      classes={{ root: styles.root }}
    >
      <Grid className={styles.textWrapper}>
        <Typography variant="overline" color="textSecondary" className={styles.sectionTitle}>
          SOMETHING
        </Typography>
        <Typography variant="h2" color="secondary">
          Where MVP stands for:
        </Typography>
        <Typography variant="h2">
          Maximum Valuable
          <br />
          People
        </Typography>
      </Grid>
      <ImageGrid />
    </Container>
  );
};

export default MVPSection;
