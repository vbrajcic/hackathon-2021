import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import KeywordChips from '../KeywordChips';

import styles from './ProductTeams.module.scss';

const keywords = ['Methodology', 'Full ownership', 'Product Delivery', 'Skill', 'Commitment', 'Support'];

const ProductTeams: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Grid className={styles.container}>
      <Container maxWidth="xl" className={styles.content} classes={{ root: styles.root }}>
        <Grid className={styles.textWrapper}>
          <Typography variant="h2" className={styles.title}>
            Dedicated Product Teams
          </Typography>
          <Typography variant="body2" className={styles.descripton}>
            Handling digital products through their long-lasting lifecycle requires versatile digital, analytical, and
            managerial skills. Starting with product strategists and designers, to the architects, project/product
            managers, analysts, DevOps, testers, and multi-platform developers. Building and managing teams with such a
            diverse skill set is a painful challenge that takes time and diverts you from your business goals. But for
            us, it&apos;s something that we deeply understand and do with strong passion over the years!
          </Typography>
        </Grid>
        {!isMobile && (
          <Grid className={styles.chipsWrapper}>
            <KeywordChips keywords={keywords} />
          </Grid>
        )}
      </Container>
    </Grid>
  );
};

export default ProductTeams;
