import React, { FC, useRef } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import { addAssetPrefix } from 'utils/static/addAssetPrefix';

import styles from './WhoWeAreSection.module.scss';

const WhoWeAreSection: FC = () => {
  const innerImageWrapperRef = useRef<HTMLDivElement>(null);

  const handleScrollBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {
      currentTarget: { value },
    } = e;

    if (innerImageWrapperRef && innerImageWrapperRef.current) {
      if (value === 'right') {
        innerImageWrapperRef.current.scrollLeft += 300;
      } else {
        innerImageWrapperRef.current.scrollLeft -= 300;
      }
    }
  };

  return (
    <Container className={styles.container} maxWidth="xl" component="section" classes={{ root: styles.root }}>
      <Grid>
        <Typography variant="overline" className={styles.sectionTitle}>
          Who we are
        </Typography>
        <Typography variant="h2" className={styles.title}>
          Keeping great people
          <br />
          busy since 2012
        </Typography>
        <Typography variant="body2" className={styles.subtitle}>
          With offices in two of the largest cities in Croatia (Zagreb & Split) and openness to remote positions, we’re
          always looking for talented people to join our team! If you are in love with what you do, that makes you one
          of us. This is our invitation to join us!
        </Typography>
      </Grid>
      <Grid>
        <IconButton onClick={handleScrollBtnClick} value="left" className={styles.scrollBtn} title="left-icon">
          <ChevronLeftIcon className={styles.icon} />
        </IconButton>
        <IconButton onClick={handleScrollBtnClick} value="right" className={styles.scrollBtn} title="right-icon">
          <ChevronRightIcon className={styles.icon} />
        </IconButton>
      </Grid>
      <Grid className={styles.imageWrapper}>
        <Grid ref={innerImageWrapperRef} className={styles.innerImageWrapper}>
          <img src={addAssetPrefix('images/careers/who_we_are-1.jpg')} className={styles.image} alt="Who we are 01" />
          <img src={addAssetPrefix('images/careers/who_we_are-2.jpg')} className={styles.image} alt="Who we are 02" />
          <img src={addAssetPrefix('images/careers/who_we_are-3.jpg')} className={styles.image} alt="Who we are 03" />
          <img src={addAssetPrefix('images/careers/who_we_are-4.jpg')} className={styles.image} alt="Who we are 04" />
          <img src={addAssetPrefix('images/careers/who_we_are-5.jpg')} className={styles.image} alt="Who we are 05" />
          <img src={addAssetPrefix('images/careers/who_we_are-6.jpg')} className={styles.image} alt="Who we are 06" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhoWeAreSection;
