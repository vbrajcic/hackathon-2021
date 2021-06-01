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
];

export default idealCandidate;
