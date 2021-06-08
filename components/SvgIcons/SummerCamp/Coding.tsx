import React, { FC, SVGProps } from 'react';

const Coding: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="31.5" cy="31.5" r="31.5" fill="#DC6B42" />
    <rect
      x="30.288"
      y="30.95"
      width="16.2"
      height="16.2"
      rx="2.025"
      stroke="#fff"
      strokeWidth="2.025"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36.362 37.025l-2.025 2.025 2.025 2.025M40.413 37.025l2.025 2.025-2.025 2.025M19.038 32.188V19.024c0-1.118.906-2.025 2.025-2.025h20.25c1.118 0 2.025.907 2.025 2.025v8.1M26.125 32.188H16a5.063 5.063 0 005.063 5.062h5.062"
      stroke="#fff"
      strokeWidth="2.025"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Coding;
