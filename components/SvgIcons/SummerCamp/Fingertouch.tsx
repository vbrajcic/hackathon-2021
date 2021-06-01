import React, { FC, SVGProps } from 'react';

const FingerTouch: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="63" height="63" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="31.5" cy="31.5" r="31.5" fill="#F4BE44" />
    <path
      d="M27.075 46.42l-3.732-4.198a2.102 2.102 0 013.143-2.793l2.614 2.942V30.22a2.025 2.025 0 014.05 0v9.112h2.025a6.075 6.075 0 016.075 6.075v1.014M37.2 34.225a10.125 10.125 0 10-12.15 0"
      stroke="#fff"
      strokeWidth="2.025"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FingerTouch;
