import { ElementType } from 'react';
import Eye from 'components/SvgIcons/Eye';
import Star from 'components/SvgIcons/Star';

export type AchievementLogo = 'DELOITTE' | 'BEHANCE' | 'DRIBBBLE';
export interface Achievement {
  logo: AchievementLogo;
  name: string;
  followers?: number;
  details?: {
    text: string;
    icon: ElementType;
  };
}

const achievements: Achievement[] = [
  {
    logo: 'DELOITTE',
    name: 'deloitte',
  },
  {
    logo: 'BEHANCE',
    name: 'behance',
    followers: 112723,
    details: {
      icon: Star,
      text: '3x Behance featured',
    },
  },
  {
    logo: 'DRIBBBLE',
    name: 'dribbble',
    followers: 13217,
    details: {
      icon: Eye,
      text: '3.1m views',
    },
  },
];

export default achievements;
