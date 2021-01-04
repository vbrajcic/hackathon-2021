import React, { FC } from 'react';
import { SvgIcon } from 'types/common';

const Sailing: FC<SvgIcon> = props => (
  <svg width="36" height="36" viewBox="0 0 36 36" {...props}>
    <g
      transform="translate(1 1)"
      stroke="#000"
      strokeWidth="2.25"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="4.625" cy="11.236" r="3.938" />
      <path d="M12.5 27.548h-2.1a4.524 4.524 0 01-3.86-2.184l-2.719-4.533a2.25 2.25 0 011.488-3.363L8 16.93a4.514 4.514 0 002.977-2.1l1.844-3.065a2.25 2.25 0 113.858 2.316L14.84 17.15a9.02 9.02 0 01-5.524 4.095l1.084 1.8h2.1a9.043 9.043 0 015.586 1.95M12.2.5a1.125 1.125 0 00-.989 1.69L24.52 25.01a1.125 1.125 0 002.034-.197 12.28 12.28 0 016.414-6.968c.522-.262.757-.88.54-1.422C32.072 12.816 26.206.694 12.2.5zM14.845 8.423h13.849M18.782 15.173h14.19M.125 33.125a6.999 6.999 0 005.625-2.85 6.973 6.973 0 0011.25 0 6.973 6.973 0 0011.25 0 6.999 6.999 0 005.625 2.85" />
    </g>
  </svg>
);

export default Sailing;
