import { ElementType } from 'react';
import Rocket from 'components/SvgIcons/Rocket';

export interface SummerCampPerk {
  title: string;
  subtitle: string;
  icon: ElementType;
}

const summerCampPerks: SummerCampPerk[] = [
  {
    title: 'Practical work',
    subtitle: 'Connect theoretical knowledge with practical work and realistic project situations.',
    icon: Rocket,
  },
  {
    title: 'Easier career start',
    subtitle: `Some practical experience truly helps kick-start your career!`,
    icon: Rocket,
  },
  {
    title: 'New set of skills',
    subtitle: 'We bet you don’t know everything about product design, development and delivery, don’t you?',
    icon: Rocket,
  },
  {
    title: 'Mentor guidance',
    subtitle:
      'You will meet established professionals as your mentors. Ask them anything you want to know! Get hired or recommended by a mentor!',
    icon: Rocket,
  },
  {
    title: 'Great networking opportunity',
    subtitle: 'Start building your business network early, it is valuable capital for your future career development.',
    icon: Rocket,
  },
  {
    title: 'Prepare yourself for the job',
    subtitle: `Break that barrier between education and the business world and prepare yourself for the reality of the first job!`,
    icon: Rocket,
  },
];

export default summerCampPerks;
