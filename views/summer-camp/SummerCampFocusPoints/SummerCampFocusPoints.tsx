import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import summerCampFocusPoints, { SummerCampFocusPoint } from 'config/summerCampFocusPoints';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import cx from 'clsx';

import { addAssetPrefix } from 'utils/static/addAssetPrefix';

import styles from './SummerCampFocusPoints.module.scss';

const chunks = [
  summerCampFocusPoints.slice(0, summerCampFocusPoints.length / 2),
  summerCampFocusPoints.slice(summerCampFocusPoints.length / 2),
];
const focusPoints = chunks.map((row, index) => ({
  key: `row-${index + 1}`,
  data: [
    ...row.map(point => ({ ...point, key: `${point.text}-${index + 1}` })),
    ...row.map(point => ({ ...point, key: `${point.text}-${index + 2}` })),
  ],
}));

const SummerCampFocusPoints: React.FC = () => {
  const [shouldPauseAnimation, setShouldPauseAnimation] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [currentImage, setCurrentImage] = useState<Pick<SummerCampFocusPoint, 'imageUrl' | 'text'>>();

  const { isDesktop } = useBreakpoint();

  const openTooltip = (target: HTMLElement, image: SummerCampFocusPoint) => {
    setAnchorEl(target);
    setCurrentImage(image);
    setShouldPauseAnimation(true);
  };

  const handleDesktopTooltipOpen = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const {
      currentTarget: {
        dataset: { rowKey, itemKey },
      },
    } = e;

    if (!rowKey || !itemKey) {
      return;
    }

    const image = focusPoints.find(row => row.key === rowKey)?.data.find(point => point.key === itemKey);

    if (!image) {
      return;
    }

    openTooltip(e.currentTarget, image);
  };

  const closeTooltip = () => {
    setAnchorEl(null);
    setShouldPauseAnimation(false);
    setCurrentImage(undefined);
  };

  return (
    <Container maxWidth={false} className={styles.container} disableGutters={isDesktop}>
      <Typography variant="h3" className={styles.subtitle}>
        What are we going to do
      </Typography>
      <Box className={cx(styles.focusPoints, { [styles.paused]: shouldPauseAnimation })}>
        {isDesktop &&
          focusPoints.map(row => (
            <Box key={row.key} className={styles.row}>
              {row.data.map(({ text, key }) => (
                <Typography
                  key={key}
                  data-row-key={row.key}
                  data-item-key={key}
                  onMouseEnter={handleDesktopTooltipOpen}
                  onMouseLeave={closeTooltip}
                  variant="h2"
                  className={styles.focusPoint}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          ))}
        {!isDesktop &&
          summerCampFocusPoints.map(({ text }) => (
            <Typography key={text} data-item-key={text} variant="h2" className={styles.focusPoint}>
              {text}
            </Typography>
          ))}
      </Box>
      {currentImage && (
        <Popper open transition placement="right" className={styles.focusPointTooltip} anchorEl={anchorEl}>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <img
                src={addAssetPrefix(currentImage.imageUrl)}
                alt={currentImage.text}
                className={styles.focusPointImage}
              />
            </Fade>
          )}
        </Popper>
      )}
    </Container>
  );
};

export default SummerCampFocusPoints;
