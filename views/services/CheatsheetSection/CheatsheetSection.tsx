import React, { useRef } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import processCheatsheet from 'config/processCheatsheet';
import useTheme from '@material-ui/core/styles/useTheme';
import ContactForm from 'components/ContactForm';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

import { useWindowSize } from 'react-use';

import CheatsheetCard from './CheatsheetCard';

import styles from './CheatsheetSection.module.scss';

const CheatsheetSection: React.FC = () => {
  const { width: clientWidth } = useWindowSize();
  const { isMobile } = useBreakpoint();
  const { breakpoints } = useTheme();

  const hasMarginLeft = useMediaQuery(() => breakpoints.up('xl'));
  const showScrollBtns = useMediaQuery(() => breakpoints.down(1530));
  const cheatsheetCardsWrapperRef = useRef<HTMLDivElement>(null);

  const handleScrollBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {
      currentTarget: { value },
    } = e;
    const scrollLeft = isMobile ? 320 : 360;

    if (cheatsheetCardsWrapperRef && cheatsheetCardsWrapperRef.current) {
      if (value === 'right') {
        cheatsheetCardsWrapperRef.current.scrollLeft += scrollLeft;
      } else {
        cheatsheetCardsWrapperRef.current.scrollLeft -= scrollLeft;
      }
    }
  };

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
        {showScrollBtns && (
          <Grid className={styles.scrollBtnWrapper}>
            <IconButton onClick={handleScrollBtnClick} value="left" className={styles.scrollBtn} title="left-icon">
              <ChevronLeftIcon className={styles.icon} />
            </IconButton>
            <IconButton onClick={handleScrollBtnClick} value="right" className={styles.scrollBtn} title="right-icon">
              <ChevronRightIcon className={styles.icon} />
            </IconButton>
          </Grid>
        )}
      </Container>
      <Grid
        container
        style={{ marginLeft: hasMarginLeft ? (clientWidth - breakpoints.values.xl) / 2 : 0 }}
        className={styles.cheatsheetCardsWrapper}
        wrap="nowrap"
        ref={cheatsheetCardsWrapperRef}
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
