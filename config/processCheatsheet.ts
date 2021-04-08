import { ElementType } from 'react';
import Alien from 'components/SvgIcons/Alien';
import ReactOutlined from 'components/SvgIcons/ReactOutlined';

export interface Cheatsheet {
  icon: ElementType;
  title: string;
  subtitle: string;
}

const processCheatsheet: Cheatsheet[] = [
  {
    icon: ReactOutlined,
    title: 'Stakeholders over\nplaceholders',
    subtitle: 'A nonprofit organization giving support to women in Alabama who need access to abortion clinics.',
  },
  {
    icon: Alien,
    title: 'Rise by lifting\nothers',
    subtitle: 'Women Talk Design is on a mission to see more diverse speakers on stage, with training and promotion.',
  },
  {
    icon: ReactOutlined,
    title: 'Stakeholders over\nplaceholders',
    subtitle: 'A nonprofit organization giving support to women in Alabama who need access to abortion clinics.',
  },
  {
    icon: Alien,
    title: 'Rise by lifting\nothers',
    subtitle: 'Women Talk Design is on a mission to see more diverse speakers on stage, with training and promotion.',
  },
];

export default processCheatsheet;
