import React from 'react';
import cn from 'classnames';
import Card from '@material-ui/core/Card';

import DesignFull from 'components/SvgIcons/DesignFull';
import MobileFull from 'components/SvgIcons/MobileFull';
import ProductStrategyFull from 'components/SvgIcons/ProductStrategyFull';
import WebFull from 'components/SvgIcons/WebFull';

import styles from './CategoryCard.module.scss';

interface CategoryCardProps {
  name: string;
  description: string;
  icon: string;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ name, description, icon }) => (
  <Card key={name} className={styles.card}>
    <div className={styles.iconContainer}>
      {icon === 'Web' && (
        <WebFull className={cn(styles.iconWithBackground, styles.left)} style={{ transform: 'translateY(-47px)' }} />
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
          className={cn(styles.iconWithBackground, styles.left)}
          style={{ transform: 'translateY(-139px)' }}
        />
      )}
    </div>
    <div className={styles.textContainer}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  </Card>
);

export default CategoryCard;
