import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import KeywordChips from '../KeywordChips';

import styles from './ProductStrategy.module.scss';

const keywords = [
  'User Flow',
  'Information Architecture',
  'Wireframes',
  'User Testing',
  'Prototypes',
  'Interface Design',
];

const ProductStrategy: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Grid className={styles.container}>
      <Container maxWidth="xl" className={styles.content} classes={{ root: styles.root }}>
        <Grid className={styles.textWrapper}>
          <Typography variant="h2" className={styles.title}>
            Product Strategy
          </Typography>
          <Typography variant="body2" className={styles.descripton}>
            Combining design sprint, agile methods and data analytics, our strategists focus on shaping your idea into a
            user oriented, market-ready product. They’ll work closely with your employees, partners, key stakeholders,
            end-users, as they try to discover problems that look like they need to be solved, and transform them into
            opportunities that need to be seized. Uncovering the true user value while driving design and dev teams
            towards key variables that continuously increase it.
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

export default ProductStrategy;
