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
    image: addAssetPrefix('/images/team/ivan-lovric.jpg'),
  },
  {
    name: 'Ivan Romac',
    description: 'Backend',
    icon: Coding,
    image: addAssetPrefix('/images/team/ivan-romac.jpg'),
  },
  {
    name: 'Pero Pavlović',
    description: `Android`,
    icon: Mobile,
    image: addAssetPrefix('/images/team/pero-pavlovic.jpg'),
  },
  {
    name: 'Ivan Ferenčak',
    description: `iOS`,
    icon: Mobile,
    image: addAssetPrefix('/images/team/ivan-ferencak.jpg'),
  },
  {
    name: 'Miro Marasović',
    description: `Management`,
    icon: DataAnalyst,
    image: addAssetPrefix('/images/team/miro-marasovic.jpg'),
  },
];

export default mentors;
