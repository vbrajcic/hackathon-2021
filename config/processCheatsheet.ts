import { ElementType } from 'react';
import TeamIdea from 'components/SvgIcons/TeamIdea';
import TargetPath from 'components/SvgIcons/TargetPath';
import Performance from 'components/SvgIcons/Performance';
import CustomerSupport from 'components/SvgIcons/CustomerSupport';

export interface Cheatsheet {
  id: number;
  icon: ElementType;
  title: string;
  subtitle: string;
}

const processCheatsheet: Cheatsheet[] = [
  {
    id: 0,
    icon: TeamIdea,
    title: 'Discovery Workshops',
    subtitle:
      'Interactive workshops based on Design Sprint methodology that help us kickstart the project in a right way.',
  },
  {
    id: 1,
    icon: TargetPath,
    title: 'Agile Delivery',
    subtitle: 'Iterative approach that enables us to design, prototype and deliver faster and more to the point.',
  },
  {
    id: 2,
    icon: Performance,
    title: 'Driven by Data',
    subtitle: 'Placing user behaviour analysis, KPIs and A/B tests behind every step we take along the way.',
  },
  {
    id: 3,
    icon: CustomerSupport,
    title: 'Long Term Support',
    subtitle:
      'Project is over, but collaboration has just started. Successful deliveries transform us from providers to long term partners.',
  },
];

export default processCheatsheet;
