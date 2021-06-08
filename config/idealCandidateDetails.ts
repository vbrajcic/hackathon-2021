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
      'Although we believe that it is never too early to start learning, we believe that this program is more suitable for students who have at least some theoretical knowledge. But if you are young and ambitious, drop us a message anyway!',
  },
  {
    id: 1,
    icon: Rocket,
    title: 'Free during summer',
    subtitle:
      'We count on your full commitment to the program, and that means 10 workdays hangin’ and learnin’ with the top professionals in their fields ready to invest their time in your personal growth. So you better clear your schedule! Afternoons are for swimming. :)',
  },
  {
    id: 2,
    icon: Rocket,
    title: 'Passionate learner',
    subtitle:
      'Show us you are passionate about IT stuff and we will help you light up your passion into great fireworks of skill and knowledge. We would like to dedicate ourselves to people dedicated to learning and growing!',
  },
];

export default idealCandidateDetails;
