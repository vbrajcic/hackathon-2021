import React from 'react';
import Img from 'components/Img';
import { useWindowSize } from 'react-use';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { addAssetPrefix } from 'utils/static/addAssetPrefix';

import summerCampPerks from 'config/summerCampPerks';
import PerkCard from './PerkCard';

import styles from './SummerCampPerks.module.scss';

const SummerCampPerks: React.FC = () => {
  const { width: clientWidth } = useWindowSize();
  const { breakpoints } = useTheme();
  const hasMarginLeft = useMediaQuery(() => breakpoints.up('xl'));

  return (
    <Grid component="section" className={styles.container}>
      <Container maxWidth="xl" className={styles.content}>
        <Typography variant="h2" className={styles.title}>
          What is in it for you?
        </Typography>
        <Grid className={styles.imageWrapper}>
          <Img
            src={addAssetPrefix('/images/summerCamp/sandcastle.png')}
            alt="sandcastle"
            layout="responsive"
            height="265"
            width="364"
          />
        </Grid>
      </Container>
      <Grid
        container
        style={{ marginLeft: hasMarginLeft ? (clientWidth - breakpoints.values.xl) / 2 : 0 }}
        className={styles.perksWrapper}
      >
        {summerCampPerks.map(perk => (
          <Grid item key={perk.title}>
            <PerkCard {...perk} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default SummerCampPerks;
