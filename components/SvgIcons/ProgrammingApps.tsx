import React, { FC, SVGProps } from 'react';

const ProgrammingApps: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="35" cy="35" r="35" fill="#212529" />
    <path
      clipRule="evenodd"
      d="M41 48.8h-8l1-5.76h6l1 5.76v0z"
      stroke="#fff"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 48.8h14M34 25.76h14c1.105 0 2 .86 2 1.92v13.44c0 1.06-.895 1.92-2 1.92H26c-1.105 0-2-.86-2-1.92V39.2M24 39.2h26"
      stroke="#fff"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="20"
      y="20"
      width="10"
      height="15.36"
      rx="1.5"
      stroke="#fff"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M20 31.52h10" stroke="#fff" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default ProgrammingApps;
