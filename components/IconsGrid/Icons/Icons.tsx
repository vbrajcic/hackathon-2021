import React from 'react';
import cn from 'clsx';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import useFactory from 'utils/hooks/useFactory';

import { addAssetPrefix } from 'utils/static/addAssetPrefix';

import Heading, { HeadingProps as BaseHeadingProps } from '../Heading';

import styles from './Icons.module.scss';

export interface IconsProps {
  icons: string[];
  mode: 'partners' | 'toolbox';
  HeadingProps: BaseHeadingProps;
}

const Icons: React.FC<IconsProps> = ({ icons, mode, HeadingProps }) => {
  const { isMobile, isDesktop } = useBreakpoint();
  const { breakpoints } = useTheme();

  const showAllIcons = useMediaQuery(() => breakpoints.up(1300));

  const lastIconIndex = useFactory(() => {
    if (!showAllIcons) {
      return mode === 'toolbox' && isMobile ? 9 : 10;
    }

    return icons.length;
  });

  return (
    <Grid container alignItems="center" className={styles.container}>
      <Grid item className={cn(styles.logoWrapper, { [styles.toolbox]: mode === 'toolbox' })}>
        <Grid container justify={isDesktop ? 'flex-start' : 'center'}>
          <img
            src={addAssetPrefix(`images/${mode}/${icons[0]}${mode === 'partners' ? '.png' : '.svg'}`)}
            alt={`${icons[0]}`}
            className={styles.logoImg}
          />
        </Grid>
      </Grid>
      {!isMobile && (
        <Grid item className={styles.cardItem}>
          <Grid container className={styles.cardWrapper} justify={isDesktop ? 'flex-start' : 'center'}>
            <Card className={cn(styles.card, { [styles.toolbox]: mode === 'toolbox' })}>
              <Heading {...HeadingProps} />
            </Card>
          </Grid>
        </Grid>
      )}
      {icons.slice(1, lastIconIndex).map(icon => (
        <Grid item key={icon} className={cn(styles.logoWrapper, { [styles.toolbox]: mode === 'toolbox' })}>
          <Grid container justify={isDesktop ? 'flex-start' : 'center'}>
            <img
              src={addAssetPrefix(`images/${mode}/${icon}${mode === 'partners' ? '.png' : '.svg'}`)}
              alt={icon}
              className={cn(styles.logoImg, styles[icon])}
            />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Icons;
