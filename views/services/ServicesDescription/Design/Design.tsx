import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import KeywordChips from '../KeywordChips';

import styles from './Design.module.scss';

const keywords = [
  'User Flow',
  'Information Architecture',
  'Wireframes',
  'User Testing',
  'Prototypes',
  'Interface Design',
];

const Design: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Grid className={styles.container}>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justify={isMobile ? 'flex-start' : 'flex-end'}
          className={styles.content}
          classes={{ root: styles.root }}
        >
          <Grid item md={5}>
            <Grid className={styles.textWrapper}>
              <Typography variant="h2" className={styles.title}>
                Design
              </Typography>
              <Typography variant="body2" className={styles.descripton}>
                We’re driven by a comprehensive understanding of what the user expects, wants and hates about digital
                products we shape. Strongly believing that the true design value lies within the parts that are rather
                felt and unseen. Highlighting the importance of the user experience half of the inseparable UX/UI duo.
                We top that with a visually appealing product that looks good but feels even better.
              </Typography>
            </Grid>
            {!isMobile && (
              <Grid className={styles.chipsWrapper}>
                <KeywordChips keywords={keywords} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Design;
