import React, { FC, SVGProps } from 'react';

const Arrow: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="7" height="14" viewBox="0 0 7 14" {...props}>
    <path
      d="M.657 1.343l4.95 4.95a1 1 0 010 1.414l-4.95 4.95h0"
      stroke="#FFF"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
      opacity=".5"
    />
  </svg>
);

export default Arrow;
