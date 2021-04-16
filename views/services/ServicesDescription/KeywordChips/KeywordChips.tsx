import { Chip, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import styles from './KeywordChips.module.scss';

interface KeywordChipsProps {
  keywords: string[];
}

const KeywordChips: React.FC<KeywordChipsProps> = ({ keywords }) => {
  const { isDesktop } = useBreakpoint();

  return (
    <Grid container direction="row" className={styles.container}>
      {keywords.slice(isDesktop ? 0 : 2).map(word => (
        <Chip key={word} label={<Typography variant="body2">{word}</Typography>} className={styles.chip} />
      ))}
    </Grid>
  );
};

export default KeywordChips;
