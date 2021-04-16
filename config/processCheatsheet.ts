import { ElementType } from 'react';
import Alien from 'components/SvgIcons/Alien';
import ReactOutlined from 'components/SvgIcons/ReactOutlined';

export interface Cheatsheet {
  id: number;
  icon: ElementType;
  title: string;
  subtitle: string;
}

const processCheatsheet: Cheatsheet[] = [
  {
    id: 0,
    icon: ReactOutlined,
    title: 'Stakeholders over\nplaceholders',
    subtitle: 'A nonprofit organization giving support to women in Alabama who need access to abortion clinics.',
  },
  {
    id: 1,
    icon: Alien,
    title: 'Rise by lifting\nothers',
    subtitle: 'Women Talk Design is on a mission to see more diverse speakers on stage, with training and promotion.',
  },
  {
    id: 2,
    icon: ReactOutlined,
    title: 'Stakeholders over\nplaceholders',
    subtitle: 'A nonprofit organization giving support to women in Alabama who need access to abortion clinics.',
  },
  {
    id: 3,
    icon: Alien,
    title: 'Rise by lifting\nothers',
    subtitle: 'Women Talk Design is on a mission to see more diverse speakers on stage, with training and promotion.',
  },
];

export default processCheatsheet;
