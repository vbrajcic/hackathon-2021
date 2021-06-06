import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import cx from 'classnames';

import { addAssetPrefix } from 'utils/static/addAssetPrefix';

import styles from './LastYearSection.module.scss';

const PreviousYearSection: React.FC = () => (
  <Box className={styles.container}>
    <Container maxWidth="xl" className={styles.inner}>
      <Typography variant="h2" align="center" className={styles.title}>
        Check out previous year atmosphere
      </Typography>
      <Typography variant="body2" align="center" className={styles.year}>
        2020
      </Typography>
      <Box className={styles.dividers}>
        <Divider className={styles.verticalDivider} />
        <Divider className={styles.horizontalDivider} />
      </Box>
      <Box className={styles.images}>
        <Box display="flex" className={styles.topImages}>
          <img
            className={cx(styles.image, styles.large)}
            src={addAssetPrefix('/images/summerCamp/last-year-group-photo.png')}
            alt="Last year group"
          />
          <Box display="flex" flexDirection="column" justifyContent="space-between" position="relative">
            <img
              className={cx(styles.image, styles.medium)}
              src={addAssetPrefix('/images/summerCamp/last-year-backend-team.png')}
              alt="Last year backend"
            />
            <img
              className={cx(styles.image, styles.small)}
              src={addAssetPrefix('/images/summerCamp/last-year-pm-team.png')}
              alt="Last year PM team"
            />
            <img
              className={cx(styles.image, styles.small)}
              src={addAssetPrefix('/images/summerCamp/last-year-mobile-team.png')}
              alt="Last year mobile team"
            />
          </Box>
        </Box>
        <Box display="flex" className={styles.imageTestimonialWrapper}>
          <img
            className={cx(styles.image, styles.small)}
            src={addAssetPrefix('/images/summerCamp/last-year-mobile-team.png')}
            alt="Last year mobile team"
          />
          <Box className={styles.testimonial}>
            <Typography variant="body2" className={styles.description}>
              I am impressed by the 360 degrees approach that Profico takes on any challenge we throw at them. As a
              result we have now integrated them fully into our organization.
            </Typography>
            <Box className={styles.author}>
              <Typography variant="body2" className={styles.name}>
                Fabijan
              </Typography>
              <Typography variant="body2" className={styles.description}>
                Student 3. godine FESB-a
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default PreviousYearSection;
