export type WorkingPerkIcon = 'TIME' | 'COFFEE' | 'BRAIN' | 'STAR' | 'LAPTOP' | 'DRINKS' | 'PALM_TREE' | 'TRAVEL';

interface WorkingPerks {
  name: string;
  description: string;
  icon: WorkingPerkIcon;
  image: string;
}

const workingPerks: WorkingPerks[] = [
  {
    name: 'Flexible working hours',
    description: 'Feeling like a late starter? Tailor your own work schedule.',
    icon: 'TIME',
    image: '/images/careers/who-we-are-3.jpg',
  },
  {
    name: 'Work from home',
    description: 'Get all the work done while enjoying the comfortness of your home.',
    icon: 'COFFEE',
    image: '/images/careers/who-we-are-3.jpg',
  },
  {
    name: 'Constant learning',
    description: 'The easiest way to unlock your full potential is to constantly learn.',
    icon: 'BRAIN',
    image: '/images/careers/who-we-are-3.jpg',
  },
  {
    name: 'Best team ever',
    description: 'Calling it any differently would be an understatement.',
    icon: 'STAR',
    image: '/images/careers/who-we-are-3.jpg',
  },
  {
    name: 'Top equipment',
    description: '94% of us are irrational Apple brand disciples, the remaining part comes down to backend developers.',
    icon: 'LAPTOP',
    image: '/images/careers/who-we-are-3.jpg',
  },
  {
    name: 'Legendary office parties',
    description: 'They probably happen more often than we’d like to confess in front our management board.',
    icon: 'DRINKS',
    image: '/images/careers/who-we-are-3.jpg',
  },
  {
    name: 'Team building',
    description: 'Everyone from Split and Zagreb offices gets together at least once a year.',
    icon: 'PALM_TREE',
    image: '/images/careers/who-we-are-3.jpg',
  },
  {
    name: 'Travel opportunities',
    description: 'You’ll get to work with clients and projects from all over the world.',
    icon: 'TRAVEL',
    image: '/images/careers/who-we-are-3.jpg',
  },
];

export default workingPerks;
