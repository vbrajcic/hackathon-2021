import React, { FC, SVGProps } from 'react';

const MobileFull: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="355" height="565" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M322.159 353.826v113.297c0 17.221-7.05 33.737-19.6 45.912-12.548 12.175-29.566 19.012-47.31 19.005H125.284c-17.743.007-34.762-6.83-47.31-19.005-12.549-12.175-19.599-28.69-19.599-45.912V97.982c0-35.866 29.956-64.942 66.91-64.942h43.259"
        stroke="#48BBE0"
        strokeWidth="65"
        opacity=".2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="translate(0 397)">
        <circle fill="#48BBE0" cx="34.5" cy="34.5" r="34.5" />
        <g transform="translate(22 18)" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25">
          <path d="M18.375 21.96V28.9a3.92 3.92 0 01-1.2 2.813 4.162 4.162 0 01-2.9 1.165h-9.8a4.162 4.162 0 01-2.9-1.165 3.92 3.92 0 01-1.2-2.813V6.284c0-2.197 1.835-3.979 4.1-3.979h2.65M.375 26.327h18" />
          <rect x="11.625" y=".121" width="18" height="17.471" rx="2.25" />
          <path d="M18.375 6.673l-2.25 2.184 2.25 2.183M22.875 6.673l2.25 2.184-2.25 2.183" />
        </g>
      </g>
    </g>
  </svg>
);

export default MobileFull;
