import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import processCheatsheet from 'config/processCheatsheet';
import useTheme from '@material-ui/core/styles/useTheme';
import ContactForm from 'components/ContactForm';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useWindowSize } from 'react-use';

import CheatsheetCard from './CheatsheetCard';

import styles from './CheatsheetSection.module.scss';

const CheatsheetSection: React.FC = () => {
  const { width: clientWidth } = useWindowSize();
  const { isMobile } = useBreakpoint();
  const { breakpoints } = useTheme();

  const hasMarginLeft = useMediaQuery(() => breakpoints.up('xl'));

  return (
    <Grid component="section" className={styles.container}>
      <Container maxWidth="xl">
        {!isMobile && (
          <Grid className={styles.textWrapper}>
            <Typography variant="h2">
              Our process
              <br />
              cheat sheet
            </Typography>
          </Grid>
        )}
      </Container>
      <Grid
        container
        style={{ marginLeft: hasMarginLeft ? (clientWidth - breakpoints.values.xl) / 2 : 0 }}
        className={styles.cheatsheetCardsWrapper}
        wrap="nowrap"
      >
        {processCheatsheet.map(cheatsheet => (
          <Grid item key={cheatsheet.id}>
            <CheatsheetCard {...cheatsheet} />
          </Grid>
        ))}
      </Grid>
      <Container maxWidth="xl" className={styles.contactFormWrapper}>
        <ContactForm className={styles.contactForm} />
      </Container>
    </Grid>
  );
};

export default CheatsheetSection;
