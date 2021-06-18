import React from 'react';

const Backend: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#5E74D2" cx="30" cy="30" r="30" />
      <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M18.7 41.1a1.8 1.8 0 01-1.8-1.8V19.638a1.944 1.944 0 011.938-1.938h23.134a1.934 1.934 0 011.928 1.928v19.534a1.944 1.944 0 01-1.938 1.938H18.7zM43.9 23.1h-27" />
        <path d="M35.8 28.5l3.6 3.6-3.6 3.6M25 28.5l-3.6 3.6 3.6 3.6M32.2 28.5l-3.6 7.2" />
      </g>
    </g>
  </svg>
);

export default Backend;
