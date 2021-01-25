import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Fingerprint from 'components/SvgIcons/Fingerprint';

import styles from './FingerprintCard.module.scss';

const FingerprintCard: React.FC = () => (
  <Card className={styles.container}>
    <Grid container alignItems="center" className={styles.fingerprintWrapper}>
      <Fingerprint className={styles.fingerprint} />
    </Grid>
  </Card>
);

export default FingerprintCard;
