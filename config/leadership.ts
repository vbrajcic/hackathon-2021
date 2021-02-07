import { ElementType } from 'react';

import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Dribble from 'components/SvgIcons/Dribble';
import { GitHub } from '@material-ui/icons';

export interface Leader {
  name: string;
  jobPosition: string;
  image: string;
  socialMedia: {
    url: string;
    icon: ElementType;
  }[];
}

const leadership: Leader[] = [
  {
    name: 'Mateo Perak',
    jobPosition: 'Founder, Managing Director',
    image: '/images/leadership/team-member-1.jpg',
    socialMedia: [
      { url: 'https://www.instagram.com/mateoperak/', icon: Instagram },
      { url: 'https://www.linkedin.com/in/mateoperak', icon: LinkedIn },
    ],
  },
  {
    name: 'Ante Matijaca',
    jobPosition: 'Founder, Creative Director',
    image: '/images/leadership/team-member-2.jpg',
    socialMedia: [
      { url: 'https://www.instagram.com/antematijaca/', icon: Instagram },
      { url: 'https://www.linkedin.com/in/antematijaca', icon: LinkedIn },
      { url: 'https://dribbble.com/antematijaca', icon: Dribble },
    ],
  },
  {
    name: 'Miro Marasović',
    jobPosition: 'Product Strategy Lead',
    image: '/images/leadership/team-member-3.jpg',
    socialMedia: [{ url: 'https://www.linkedin.com/in/miromarasovic', icon: LinkedIn }],
  },
  {
    name: 'Ivan Ferenčak',
    jobPosition: 'Tech Lead',
    image: '/images/leadership/team-member-4.jpg',
    socialMedia: [
      { url: 'https://www.instagram.com/ferencakivan', icon: Instagram },
      { url: 'https://www.linkedin.com/in/ivan-feren%C4%8Dak-12005a58', icon: LinkedIn },
      { url: 'https://github.com/Iferencak', icon: GitHub },
    ],
  },
];

export default leadership;
