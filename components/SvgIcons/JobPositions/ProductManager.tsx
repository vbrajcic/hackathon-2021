import React from 'react';

const ProductManager: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="30" cy="30" r="30" fill="#48BBE0" />
    <path
      clipRule="evenodd"
      d="M34.5 41.043h-7l.875-5.04h5.25l.875 5.04v0z"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M24.875 41.043h12.25" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <rect
      x="17.875"
      y="15.843"
      width="26.25"
      height="20.16"
      rx="3"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.125 20.883v10.08M33.625 20.883h5.25v10.08h-5.25zM28.375 24.243h5.25v6.72h-5.25zM23.125 27.603h5.25v3.36h-5.25z"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ProductManager;
