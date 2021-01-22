import React from 'react';

const ProductManager: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#48BBE0" cx="30" cy="30" r="30" />
      <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M36.9 44.875c-2.92 0-5.4-1.58-5.4-4.5v-4.5h10.8v4.5c0 .945-.728 4.5-5.4 4.5zM27.9 32.275l-1.8 3.6M31.5 32.275H20.7a1.8 1.8 0 01-1.8-1.8v-10.8a1.8 1.8 0 011.8-1.8h18.9a1.8 1.8 0 011.8 1.8v5.4M24.3 35.875h3.6M22.5 28.675h9M24.3 28.675v-2.7M27.9 28.675v-4.5M31.5 28.675v-7.2M35.132 29.22c-1.32 1.32 1.307 1.766.018 3.055M38.93 26.923c-2.295 2.293 2.28 3.073.03 5.318" />
        <path d="M42.3 36.775h.9a2.7 2.7 0 010 5.4h-1.36" />
      </g>
    </g>
  </svg>
);

export default ProductManager;
