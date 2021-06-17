import Network from 'components/SvgIcons/Network';
import ShapeTriangle from 'components/SvgIcons/ShapeTriangle';
import ProgrammingApps from 'components/SvgIcons/ProgrammingApps';

import { ElementType } from 'react';

export interface CareerHeroCard {
  id: number;
  icon: ElementType;
  title: string;
  isSpecial: boolean;
}

const careersHeroCards: CareerHeroCard[] = [
  {
    id: 0,
    icon: ShapeTriangle,
    title: 'Design systems',
    isSpecial: false,
  },
  {
    id: 1,
    icon: Network,
    title: 'Kick ass IoT Delivery',
    isSpecial: true,
  },
  {
    id: 2,
    icon: ProgrammingApps,
    title: 'Killer web and mobile apps',
    isSpecial: false,
  },
];

export default careersHeroCards;
