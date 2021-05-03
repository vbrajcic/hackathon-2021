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
    name: 'Product strategy',
    description:
      'Combining design sprint, agile methods and data analytics, our strategists set the “tone and context” of a user oriented, market-ready product, tailor-made from your idea.',
    icon: ProductStrategy,
  },
  {
    name: 'UI/UX design',
    description:
      'To provide end users with great experience within apps, we base our design solutions on comprehensive research of what user needs, likes and dislikes and we make his journey exciting with beautiful UI.',
    icon: Design,
  },
  {
    name: 'Web & mobile development',
    description:
      'To effectively engage millions of users with high performance digital products, across all the platforms, you need a team with a proven traction record at building successful web & mobile systems.',
    icon: Web,
  },
];

export default serviceCategories;
