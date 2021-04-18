import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ServiceCategories from './ServiceCategories';

import styles from './HeroSection.module.scss';

// Temporarily disabled this effect until we find typewriting effect we like
const words = ['Supporting', 'Creating', 'Implementing'];
// const lastIndex = words.length - 1;

const HeroSection: React.FC = () => (
  // const [index, setIndex] = useState<number>(0);

  // const handleAnimationIteration = () => {
  //   if (index >= lastIndex) {
  //     setIndex(0);
  //   } else {
  //     setIndex(index + 1);
  //   }
  // };

  <Container className={styles.container} component="section" maxWidth="xl" classes={{ root: styles.root }}>
    <Grid className={styles.textWrapper}>
      <Typography
        variant="h1"
        color="secondary"
        // data-next={words[index >= lastIndex ? 0 : index + 1]}
        // onAnimationIteration={handleAnimationIteration}
        // className={styles.flipText}
      >
        {words[0]}
      </Typography>
      <Typography variant="h1" className={styles.introText} color="textPrimary">
        good ideas at any stage, platform, scale
      </Typography>
      <Typography variant="body2" color="textSecondary" className={styles.descriptionText}>
        We shape our services around lean product teams capable of delivering immense value to organisations worldwide.
      </Typography>
    </Grid>
    <ServiceCategories />
  </Container>
);
export default HeroSection;
