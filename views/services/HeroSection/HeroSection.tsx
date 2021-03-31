import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ServiceCategories from './ServiceCategories';

import styles from './HeroSection.module.scss';

const words = ['Supporting', 'Creating', 'Implementing'];
const lastIndex = words.length - 1;
let index = 0;

const HeroSection: React.FC = () => {
  const [word, setWord] = useState<string>(words[0]);
  const [nextWord, setNextWord] = useState<string>(words[1]);

  const handleAnimationIteration = () => {
    if (index >= lastIndex) {
      index = 0;
    } else {
      index += 1;
    }

    setWord(words[index]);
    setNextWord(words[index >= lastIndex ? 0 : index + 1]);
  };

  return (
    <Container className={styles.container} component="section" maxWidth="xl" classes={{ root: styles.root }}>
      <Grid className={styles.textWrapper}>
        <Typography
          variant="h1"
          color="secondary"
          data-next={nextWord}
          onAnimationIteration={handleAnimationIteration}
          className={styles.flipText}
        >
          {word}
        </Typography>
        <Typography variant="h1" className={styles.introText} color="textPrimary">
          good ideas at any stage, platform, scale
        </Typography>
        <Typography variant="body2" color="textSecondary" className={styles.descriptionText}>
          We shape our services around lean product teams capable of delivering immense value to organisations
          worldwide.
        </Typography>
      </Grid>
      <ServiceCategories />
    </Container>
  );
};

export default HeroSection;
