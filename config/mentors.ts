import { ElementType } from 'react';

import { Coding, DataAnalyst, Fingertouch, Mobile } from 'components/SvgIcons/SummerCamp';
import { addAssetPrefix } from 'utils/static/addAssetPrefix';

export interface Mentor {
  name: string;
  description: string;
  icon: ElementType;
  image: string;
}

const mentors: Mentor[] = [
  {
    name: 'Ivan Lovrić',
    description: 'Frontend',
    icon: Fingertouch,
    image: addAssetPrefix('/images/team/ivan-lovric.png'),
  },
  {
    name: 'Ivan Romac',
    description: 'Backend',
    icon: Coding,
    image: addAssetPrefix('/images/team/ivan-romac.png'),
  },
  {
    name: 'Pero Pavlović',
    description: `Android`,
    icon: Mobile,
    image: addAssetPrefix('/images/team/pero-pavlovic.png'),
  },
  {
    name: 'Ivan Ferenčak',
    description: `iOS`,
    icon: Mobile,
    image: addAssetPrefix('/images/team/ivan-ferencak.png'),
  },
  {
    name: 'Miro Marasović',
    description: `Management`,
    icon: DataAnalyst,
    image: addAssetPrefix('/images/team/miro-marasovic.png'),
  },
];

export default mentors;
