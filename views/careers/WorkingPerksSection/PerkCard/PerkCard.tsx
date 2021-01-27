import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { Typography } from '@material-ui/core';
import { Brain, Coffee, Drinks, Laptop, PalmTree, Star, Time, Travel } from 'components/SvgIcons/Careers';
import { WorkingPerkIcon } from 'config/workingPerks';

import styles from './PerkCard.module.scss';

interface PerkCardProps {
  name: string;
  description: string;
  icon: WorkingPerkIcon;
  image: string;
}

const IconMap: { [key in WorkingPerkIcon]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
  TIME: Time,
  COFFEE: Coffee,
  BRAIN: Brain,
  STAR: Star,
  LAPTOP: Laptop,
  DRINKS: Drinks,
  PALM_TREE: PalmTree,
  TRAVEL: Travel,
};

const PerkCard: React.FC<PerkCardProps> = ({ name, description, icon, image }) => {
  const Icon = IconMap[icon];

  return (
    <Card classes={{ root: styles.root }} className={styles.container}>
      <CardMedia component="img" image={image} alt={name} height="225" className={styles.image} />
      <CardContent className={styles.content}>
        <Icon className={styles.icon} />
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PerkCard;
