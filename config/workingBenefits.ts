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
    name: 'Flexible work hours',
    description:
      'Do you feel like a late starter? Choose your own daily start time, with respect to your colleagues, meetings, and customers.',
    icon: Time,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Remote work possibilities',
    description:
      'If you need a day or more for yourself, but still feels like you have to do something, take a day from home.',
    icon: Coffee,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Education',
    description: `Tell us what you need to develop your skills further, and we'll do our best to make it happen.`,
    icon: Brain,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Unforgettable social moments',
    description: `Yes, we are here for work and we are all serious about it. But we also know how to celebrate our wins and throw a party or team building. Actually, that's where most of the unforgettable moments are created ;)`,
    icon: Star,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Constant learning, constant growing',
    description:
      'We will help you to constantly improve to become the best in what you love. You can count on honest feedback and clear pointers on how to strengthen your strengths and overthrow your weaknesses.',
    icon: Laptop,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Projects versatility',
    description:
      'We are not a single project company. Although you can stay as long as you want on that project you particularly like, you will probably get multiple exciting project opportunities in your career with us!',
    icon: Drinks,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Kitchen perks',
    description:
      'To support your healthy lifestyle while in the office (or even the opposite one), we have a full-size kitchen. Make some smoothies or protein shake in the morning, or bring your favorite meal.',
    icon: PalmTree,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Business travel opportunities',
    description:
      'Our clients are all over the world, and we really like visiting them. The same thing goes for conferences. Pandemics won’t last forever!',
    icon: Travel,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Empowering organisational culture',
    description:
      'We can help you build your career path no matter if you are a single contributor or the team lead. We will help you rise, and you will help us by lifting others!',
    icon: Star,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
  {
    name: 'Multi-sport gym membership',
    description:
      'Working on your abbs lately?! We can support easier access to multiple sports programs through multi-sport memberships.',
    icon: PalmTree,
    image: addAssetPrefix('/images/careers/who-we-are-3.jpg'),
  },
];

export default workingBenefits;
