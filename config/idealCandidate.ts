import { ElementType } from 'react';
import Alien from 'components/SvgIcons/Alien';
import ReactOutlined from 'components/SvgIcons/ReactOutlined';

export interface IdealCandidate {
  id: number;
  icon: ElementType;
  title: string;
  subtitle: string;
}

const idealCandidate: IdealCandidate[] = [
  {
    id: 0,
    icon: ReactOutlined,
    title: 'Final year student',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 1,
    icon: Alien,
    title: 'Free during summer',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    icon: ReactOutlined,
    title: 'Passionate learner',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default idealCandidate;
