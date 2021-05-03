import { ElementType } from 'react';

import { Frontend, FullStack, ProductManager, QAEngineer } from 'components/SvgIcons/JobPositions';

export type JobType = 'FULL_STACK' | 'FRONTEND' | 'BACKEND' | 'PRODUCT_MANAGER' | 'QA_ENGINEER' | 'DESIGNER';

export interface JobPosition {
  id: JobType;
  icon: ElementType;
  tag: string;
}

// Missing for Designer and Backend
const jobPositions: JobPosition[] = [
  {
    id: 'FULL_STACK',
    icon: FullStack,
    tag: 'Full-Stack',
  },
  {
    id: 'FRONTEND',
    icon: Frontend,
    tag: 'Frontend',
  },
  {
    id: 'BACKEND',
    icon: Frontend,
    tag: 'Backend',
  },
  {
    id: 'PRODUCT_MANAGER',
    icon: ProductManager,
    tag: 'Product Manager',
  },
  {
    id: 'QA_ENGINEER',
    icon: QAEngineer,
    tag: 'QA',
  },
  {
    id: 'DESIGNER',
    icon: FullStack,
    tag: 'Design',
  },
];

export default jobPositions;
