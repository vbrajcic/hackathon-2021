import { ElementType } from 'react';

import { Coding, DataAnalyst, Fingertouch } from 'components/SvgIcons/SummerCamp';
import { addAssetPrefix } from 'utils/static/addAssetPrefix';

export interface Mentor {
  name: string;
  description: string;
  icon: ElementType;
  image: string;
}

const mentors: Mentor[] = [
  {
    name: 'Ivan',
    description: 'Backend Engineer',
    icon: Coding,
    image: addAssetPrefix('/images/team/ivan-romac.png'),
  },
  {
    name: 'Erik',
    description: 'Data Analyst',
    icon: DataAnalyst,
    image: addAssetPrefix('/images/team/erik-zupancic.png'),
  },
  {
    name: 'Nikola',
    description: `UI/UX designer`,
    icon: Fingertouch,
    image: addAssetPrefix('/images/team/nikola-dadic.png'),
  },
];

export default mentors;
