import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import processCheatsheat from 'config/processCheatsheat';
import useTheme from '@material-ui/core/styles/useTheme';
import ContactForm from 'components/ContactForm';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import { useWindowSize } from 'react-use';

import CheatsheatCard from './CheatsheatCard';

import styles from './CheatsheatSection.module.scss';

const CheatsheatSection: React.FC = () => {
  const { width: clientWidth } = useWindowSize();
  const { isMobile } = useBreakpoint();

  const {
    breakpoints: {
      values: { xl },
    },
  } = useTheme();

  return (
    <Grid component="section" className={styles.container}>
      <Container maxWidth="xl">
        {!isMobile && (
          <Grid className={styles.textWrapper}>
            <Typography variant="h2">
              Take a quick look at our
              <br />
              process cheatsheat
            </Typography>
          </Grid>
        )}
      </Container>
      <Grid
        container
        style={{ marginLeft: clientWidth > xl ? (clientWidth - xl) / 2 : 0 }}
        className={styles.cheatsheatCardsWrapper}
        wrap="nowrap"
      >
        {processCheatsheat.map(cheatsheat => (
          <Grid item>
            <CheatsheatCard key={cheatsheat.title} {...cheatsheat} />
          </Grid>
        ))}
      </Grid>
      <Container maxWidth="xl" className={styles.contactFormWrapper}>
        <ContactForm className={styles.contactForm} />
      </Container>
    </Grid>
  );
};

export default CheatsheatSection;
