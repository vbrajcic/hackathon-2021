import React, { FC, SVGProps } from 'react';

const Eye: FC<SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 20 13" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 0c4.217 0 7.891 2.586 10 6.5-2.109 3.89-5.783 6.5-10 6.5S2.087 10.414 0 6.5C2.109 2.586 5.783 0 10 0zm0 1.63c-2.5 0-4.543 2.167-4.543 4.87 0 2.68 2.021 4.87 4.543 4.87 2.522 0 4.543-2.167 4.543-4.87 0-2.68-2.021-4.87-4.543-4.87zm0 2.084c1.506 0 2.727 1.247 2.727 2.786S11.507 9.286 10 9.286c-1.506 0-2.727-1.247-2.727-2.786S8.493 3.714 10 3.714z"
      fill="#EA4C89"
      fillRule="nonzero"
    />
  </svg>
);

export default Eye;
