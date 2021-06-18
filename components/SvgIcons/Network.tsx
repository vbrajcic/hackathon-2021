import React, { FC, SVGProps } from 'react';

const Network: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="35" cy="35" r="35" fill="#2ACDA3" />
    <ellipse
      cx="35"
      cy="31.48"
      rx="12"
      ry="11.52"
      stroke="#fff"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 48.76h30M35 43v5.76M35 19.96c-3.31 2.974-5.131 7.17-5 11.52-.131 4.35 1.69 8.546 5 11.52M35 19.96c3.31 2.974 5.132 7.17 5 11.52.132 4.35-1.69 8.546-5 11.52M23.684 27.64h22.628M23.684 35.32h22.632"
      stroke="#fff"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Network;
