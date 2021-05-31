import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import KeywordChips from 'views/services/ServicesDescription/KeywordChips';

import styles from './AboutSummerCamp.module.scss';

const keywords = ['Backend', 'Frontend', 'iOS', 'Android', 'Design', 'Management'];

const AboutSummerCamp: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Grid className={styles.container}>
      <Container maxWidth="xl" className={styles.content} classes={{ root: styles.root }}>
        <Grid className={styles.textWrapper}>
          <Typography variant="h2" className={styles.title}>
            What is Profico Summer Camp?
          </Typography>
          <Typography variant="body2" className={styles.descripton}>
            Profico Summer Camp je naš dvotjedni program gdje polaznici imaju priliku radeći u timu na konkretnom
            projektu iskusiti simulaciju svega onoga što ih očekuje po završetku studiranja. Dakle, fokus nije samo na
            razvijanju tehničkog znanja nego i dobivanju uvida u procese i rad tvrtke s ciljem budućeg zapošljavanja.
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

export default AboutSummerCamp;
