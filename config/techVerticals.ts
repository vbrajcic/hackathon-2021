import React, { ElementType } from 'react';
import FingerTouch from 'components/SvgIcons/Fingertouch';
import ProductStrategy from 'components/SvgIcons/ProductStrategy';
import Mobile from 'components/SvgIcons/Mobile';
import Web from 'components/SvgIcons/Web';

export interface TechVerticals {
  id: string;
  icon: ElementType<React.SVGProps<SVGSVGElement>>;
  title: string;
}

const techVerticals: TechVerticals[] = [
  {
    id: 'mobile',
    icon: Mobile,
    title: 'Mobile',
  },
  {
    id: 'management',
    icon: ProductStrategy,
    title: 'Project Management',
  },
  {
    id: 'frontend',
    icon: FingerTouch,
    title: 'Frontend',
  },
  {
    id: 'backend',
    icon: Web,
    title: 'Backend',
  },
];

export default techVerticals;
