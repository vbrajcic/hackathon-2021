import React from 'react';
import cn from 'classnames';
import Card from '@material-ui/core/Card';
import DesignFull from 'components/SvgIcons/DesignFull';
import MobileFull from 'components/SvgIcons/MobileFull';
import ProductStrategyFull from 'components/SvgIcons/ProductStrategyFull';
import WebFull from 'components/SvgIcons/WebFull';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import Design from 'components/SvgIcons/Design';
import Mobile from 'components/SvgIcons/Mobile';
import ProductStrategy from 'components/SvgIcons/ProductStrategy';
import Web from 'components/SvgIcons/Web';

import { Typography } from '@material-ui/core';

import styles from './CategoryCard.module.scss';

interface CategoryCardProps {
  name: string;
  description: string;
  icon: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, description, icon }) => {
  const { isDesktop } = useBreakpoint();

  return (
    <Card className={styles.container} classes={{ root: styles.root }}>
      {isDesktop && (
        <div className={styles.iconContainer}>
          {icon === 'Web' && (
            <WebFull
              className={cn(styles.iconWithBackground, styles.left)}
              style={{ transform: 'translateY(-47px)' }}
            />
          )}
          {icon === 'ProductStrategy' && (
            <ProductStrategyFull
              className={cn(styles.iconWithBackground, styles.right)}
              style={{ transform: 'translateY(-44px)' }}
            />
          )}
          {icon === 'Mobile' && (
            <MobileFull
              className={cn(styles.iconWithBackground, styles.left)}
              style={{ transform: 'translateY(-113px)' }}
            />
          )}
          {icon === 'Design' && (
            <DesignFull
              className={cn(styles.iconWithBackground, styles.design)}
              style={{ transform: 'translateY(-139px)' }}
            />
          )}
        </div>
      )}

      {!isDesktop && (
        <div>
          {icon === 'Web' && <Web className={styles.icon} />}
          {icon === 'ProductStrategy' && <ProductStrategy className={styles.icon} />}
          {icon === 'Mobile' && <Mobile className={styles.icon} />}
          {icon === 'Design' && <Design className={styles.icon} />}
        </div>
      )}
      <div className={styles.textContainer}>
        <Typography variant="body1" className={styles.title}>
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </div>
    </Card>
  );
};

export default CategoryCard;
