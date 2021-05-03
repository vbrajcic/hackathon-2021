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
    title: 'Discovery Workshops',
    subtitle:
      'Interactive workshops based on Design Sprint methodology that help us kickstart the project in a right way.',
  },
  {
    id: 1,
    icon: Alien,
    title: 'Agile Delivery',
    subtitle: 'Iterative approach that enables us to design, prototype and deliver faster and more to the point.',
  },
  {
    id: 2,
    icon: ReactOutlined,
    title: 'Driven by Data',
    subtitle: 'Placing user behaviour analysis, KPIs and A/B tests behind every step we take along the way.',
  },
  {
    id: 3,
    icon: Alien,
    title: 'Long Term Support',
    subtitle:
      'Project is over, but collaboration has just started. Successful deliveries transform us from providers to long term partners.',
  },
];

export default processCheatsheet;
