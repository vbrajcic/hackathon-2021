import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Popper from '@material-ui/core/Popper';
import summerCampFocusPoints, { SummerCampFocusPoint } from 'config/summerCampFocusPoints';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import cx from 'classnames';

import { Grow } from '@material-ui/core';
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

  const handleTooltipOpen = (e: React.MouseEvent<HTMLHeadingElement>) => {
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

    setAnchorEl(e.currentTarget);
    setCurrentImage(image);
    setShouldPauseAnimation(true);
  };

  const handleTooltipClose = () => {
    setAnchorEl(null);
    setShouldPauseAnimation(false);
    setCurrentImage(undefined);
  };

  return (
    <Container maxWidth={false} className={styles.container} disableGutters>
      <Typography variant="h3" align="center" className={styles.subtitle}>
        What are we going to do
      </Typography>
      <Box className={cx(styles.focusPoints, { [styles.paused]: shouldPauseAnimation })}>
        {focusPoints.map(row => (
          <Box key={row.key} className={styles.row}>
            {row.data.map(({ text, key }) => (
              <Typography
                key={key}
                data-row-key={row.key}
                data-item-key={key}
                onMouseEnter={isDesktop ? handleTooltipOpen : undefined}
                onMouseLeave={isDesktop ? handleTooltipClose : undefined}
                variant="h2"
                className={styles.focusPoint}
              >
                {text}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
      {currentImage && isDesktop && (
        <Popper open transition placement="right" className={styles.focusPointTooltip} anchorEl={anchorEl}>
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <img
                src={addAssetPrefix(currentImage.imageUrl)}
                alt={currentImage.text}
                className={styles.focusPointImage}
              />
            </Grow>
          )}
        </Popper>
      )}
    </Container>
  );
};

export default SummerCampFocusPoints;
