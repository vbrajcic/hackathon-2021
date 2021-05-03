import React, { FC, SVGProps } from 'react';

const Eye: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.5 17.25l-6.76 3.554 1.291-7.527-5.468-5.33L8.12 6.847 11.5 0l3.38 6.848 7.557 1.098-5.468 5.33 1.29 7.528z"
      fill="#1F4CF6"
      fillRule="evenodd"
    />
  </svg>
);

export default Eye;
