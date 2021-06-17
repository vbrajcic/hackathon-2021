import React, { FC, SVGProps } from 'react';

const ShapeTriangle: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="35" cy="35" r="35" fill="#424D56" />
    <circle
      cx="40.769"
      cy="39.616"
      stroke="#fff"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      r="9.231"
    />
    <path
      clipRule="evenodd"
      d="M31.327 21.682a.787.787 0 00-1.486 0l-9.666 16.652c-.41.704-.075 1.28.744 1.28h19.333c.819 0 1.153-.576.744-1.28l-9.67-16.652z"
      stroke="#fff"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ShapeTriangle;
