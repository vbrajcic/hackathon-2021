import React, { FC, SVGProps } from 'react';

const ProductStrategyFull: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="270" height="270" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle stroke="#3ACC9E" strokeWidth="65" opacity=".2" cx="135" cy="135" r="102.5" />
      <circle cx="35" cy="35" r="35" transform="translate(99 99)" fill="#3ACC9E" />
      <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25">
        <path d="M120.375 148.844l12.75-20.25a1.891 1.891 0 013 0l12.75 20.25h-28.5z" />
        <path d="M120.375 148.844h-5.25l5.625-10.125 3.262 4.35M127.067 138.216l3.505 2.986a1.5 1.5 0 002.03-.083l.963-.963a1.5 1.5 0 012.12 0l.964.963a1.5 1.5 0 002.029.084l3.53-2.95M134.5 124.5l-.25-9.407M134.25 114.094h5.625v2.25h6.75l-2.25 3.375 2.25 3.375h-6.75v-1.125h-5.625" />
      </g>
    </g>
  </svg>
);

export default ProductStrategyFull;
