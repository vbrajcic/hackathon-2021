import React, { FC, SVGProps } from 'react';

const Mobile: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="31.5" cy="31.5" r="31.5" fill="#50CBF2" />
    <path
      d="M34 37v6.357A3.643 3.643 0 0130.356 47h-8.712A3.643 3.643 0 0118 43.357V22.644A3.644 3.644 0 0121.644 19H24M18 41h16"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="28"
      y="17"
      width="16"
      height="16"
      rx="2.16"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M34 23l-2 2 2 2M38 23l2 2-2 2"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Mobile;
