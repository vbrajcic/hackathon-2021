import { ElementType } from 'react';
import Rocket from 'components/SvgIcons/Rocket';

export interface CandidateDetail {
  id: number;
  icon: ElementType;
  title: string;
  subtitle: string;
}

const idealCandidateDetails: CandidateDetail[] = [
  {
    id: 0,
    icon: Rocket,
    title: 'Final year student',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 1,
    icon: Rocket,
    title: 'Free during summer',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    icon: Rocket,
    title: 'Passionate learner',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default idealCandidateDetails;
