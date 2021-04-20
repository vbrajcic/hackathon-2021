import React, { FC, SVGProps } from 'react';

const Quote: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="31" height="25" viewBox="0 0 31 25" {...props}>
    <path
      d="M10.857 25V13.23H5.041v-2.335c0-4.572 2.23-6.81 6.689-6.81V0C4.653 0 0 4.086 0 10.7V25h10.857zm19.27 0V13.23h-5.913v-2.335c0-4.572 2.23-6.81 6.786-6.81V0c-7.077 0-11.73 4.086-11.73 10.7V25h10.858z"
      fill="#1e8de1"
      fillRule="nonzero"
    />
  </svg>
);

export default Quote;
