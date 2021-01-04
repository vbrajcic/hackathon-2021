import React, { FC } from 'react';
import { SvgIcon } from 'types/common';

const Arrow: FC<SvgIcon> = props => (
  <svg width="7" height="14" {...props}>
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
