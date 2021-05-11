import React, { FC, useEffect, useRef, useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import aboutUs from 'config/aboutUs';

import { Grid, IconButton, useTheme } from '@material-ui/core';
import { useWindowSize } from 'react-use';

import ImageCard from './ImageCard';

import styles from './IntroductionSection.module.scss';

interface ScrollableCardStyle {
  paddingLeft: number;
  width: number;
}

const IntroductionSection: FC = () => {
  const [scrollableCardStyle, setScrollableCardStyle] = useState<ScrollableCardStyle>();

  const { isDesktop } = useBreakpoint();
  const {
    breakpoints: {
      values: { xl, lg, sm },
    },
  } = useTheme();
  const { width: clientWidth } = useWindowSize();

  const innerImageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (clientWidth > sm) {
      if (clientWidth > xl) {
        const paddingLeft = 60 + (clientWidth - xl) / 2;
        setScrollableCardStyle({
          paddingLeft,
          width: 600 + paddingLeft,
        });
        return;
      }
      if (clientWidth > lg) {
        setScrollableCardStyle({
          paddingLeft: 60,
          width: 660,
        });
        return;
      }

      setScrollableCardStyle({
        paddingLeft: 24,
        width: 584,
      });
    } else {
      setScrollableCardStyle(undefined);
    }
  }, [clientWidth, xl, lg, sm]);

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
    <Grid component="section" className={styles.container} classes={{ root: styles.root }}>
      <Container maxWidth="xl">
        <Grid className={styles.textWrapper}>
          <Typography variant="h1" className={styles.introText} color="textPrimary">
            {`Digital product agency,\nserving customers worldwide`}
          </Typography>
          <Typography variant="body2" color="textSecondary" className={styles.descriptionText}>
            Profico is a progressive full service digital product agency specialised for building successful and
            award-winning websites and mobile apps.
          </Typography>
          {scrollableCardStyle && (
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
      </Container>
      <Container maxWidth={false} disableGutters={Boolean(scrollableCardStyle)}>
        <Grid className={styles.imageWrapper}>
          <Grid ref={innerImageWrapperRef} className={styles.innerImageWrapper}>
            {aboutUs.map((card, index) => (
              <ImageCard
                style={index === 0 ? scrollableCardStyle : undefined}
                image={card.image}
                heading={card.heading}
                text={card.text}
                key={card.key}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default IntroductionSection;
