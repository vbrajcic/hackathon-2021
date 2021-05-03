import React, { FC, SVGProps } from 'react';

const File: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g stroke="#BABDC0" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.168 15.75a5.951 5.951 0 01-10.336 0H3a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5h-3.832zM19.5 12.75V2.25A1.5 1.5 0 0018 .75H6a1.5 1.5 0 00-1.5 1.5v10.5M8.25 5.25h3M8.25 8.25h7.5M8.25 11.25h7.5" />
    </g>
  </svg>
);

export default File;
