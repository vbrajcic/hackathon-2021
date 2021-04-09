import { ElementType } from 'react';

import { Brain, Coffee, Drinks, Laptop, PalmTree, Star, Time, Travel } from 'components/SvgIcons/Careers';
import { addAssetPrefix } from 'utils/static/addAssetPrefix';

export interface WorkBenefit {
  name: string;
  description: string;
  icon: ElementType;
  image: string;
}

const workingBenefits: WorkBenefit[] = [
  {
    name: 'Flexible working hours',
    description: 'Feeling like a late starter? Tailor your own work schedule.',
    icon: Time,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Work from home',
    description: 'Get all the work done while enjoying the comfortness of your home.',
    icon: Coffee,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Constant learning',
    description: 'The easiest way to unlock your full potential is to constantly learn.',
    icon: Brain,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Best team ever',
    description: 'Calling it any differently would be an understatement.',
    icon: Star,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Top equipment',
    description: '94% of us are irrational Apple brand disciples, the remaining part comes down to backend developers.',
    icon: Laptop,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Legendary office parties',
    description: 'They probably happen more often than we’d like to confess in front our management board.',
    icon: Drinks,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Team building',
    description: 'Everyone from Split and Zagreb offices gets together at least once a year.',
    icon: PalmTree,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Travel opportunities',
    description: 'You’ll get to work with clients and projects from all over the world.',
    icon: Travel,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
];

export default workingBenefits;
