import React, { FC, useRef } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import aboutUs from 'config/aboutUs';

import { Grid, IconButton, useMediaQuery, useTheme } from '@material-ui/core';

import ImageCard from './ImageCard';

import styles from './IntroductionSection.module.scss';

const IntroductionSection: FC = () => {
  const { isDesktop } = useBreakpoint();
  const { breakpoints } = useTheme();

  const showScrollBtns = useMediaQuery(() => breakpoints.up(500));
  const innerImageWrapperRef = useRef<HTMLDivElement>(null);

  const handleScrollBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {
      currentTarget: { value },
    } = e;

    if (innerImageWrapperRef && innerImageWrapperRef.current) {
      if (value === 'right') {
        innerImageWrapperRef.current.scrollLeft += isDesktop ? 600 : 560;
      } else {
        innerImageWrapperRef.current.scrollLeft -= isDesktop ? 600 : 560;
      }
    }
  };

  return (
    <Container className={styles.container} component="section" maxWidth="xl" classes={{ root: styles.root }}>
      <Grid className={styles.textWrapper}>
        <Typography variant="h1" className={styles.introText} color="textPrimary">
          {`Digital product agency\nwith a global impact`}
        </Typography>
        <Typography variant="body2" color="textSecondary" className={styles.descriptionText}>
          Profico is a progressive full service digital product agency specialised for building successful and
          award-winning websites and mobile apps.
        </Typography>
        {showScrollBtns && (
          <Grid item className={styles.scrollBtnWrapper}>
            <IconButton onClick={handleScrollBtnClick} value="left" className={styles.scrollBtn} title="left-icon">
              <ChevronLeftIcon className={styles.icon} />
            </IconButton>
            <IconButton onClick={handleScrollBtnClick} value="right" className={styles.scrollBtn} title="right-icon">
              <ChevronRightIcon className={styles.icon} />
            </IconButton>
          </Grid>
        )}
      </Grid>
      <Grid className={styles.imageWrapper}>
        <Grid ref={innerImageWrapperRef} className={styles.innerImageWrapper}>
          {aboutUs.map(card => (
            <ImageCard image={card.image} heading={card.heading} text={card.text} key={card.key} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default IntroductionSection;
