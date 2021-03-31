import { ElementType } from 'react';

import Design from 'components/SvgIcons/Design';
import ProductStrategy from 'components/SvgIcons/ProductStrategy';
import Web from 'components/SvgIcons/Web';

export interface ServiceCategory {
  name: string;
  description: string;
  icon: ElementType;
}

const serviceCategories: ServiceCategory[] = [
  {
    name: 'Product Strategy',
    description:
      'Combining design sprint, agile methods and data analytics, our strategists set the “tone and context”.',
    icon: ProductStrategy,
  },
  {
    name: 'UI/UX Design',
    description:
      'Combining design sprint, agile methods and data analytics, our strategists set the “tone and context”.',
    icon: Design,
  },
  {
    name: 'Web&Mobile Development',
    description:
      'Combining design sprint, agile methods and data analytics, our strategists set the “tone and context”.',
    icon: Web,
  },
];

export default serviceCategories;
