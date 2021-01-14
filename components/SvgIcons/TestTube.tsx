import React from 'react';

const TestTube: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="46" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 48" {...props}>
    <g
      transform="translate(2 1)"
      strokeWidth="2.5"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M27 38a7.5 7.5 0 01-15 0V.5h15V38zM31.5.5h-24" stroke="#FFF" />
      <path
        d="M21.75 15.5a.75.75 0 01.75.75M21 16.25a.75.75 0 01.75-.75M21.75 17a.75.75 0 01-.75-.75"
        stroke="#54BBCA"
      />
      <path d="M22.5 16.25a.75.75 0 01-.75.75" stroke="#1E8DE1" />
      <path
        d="M17.25 24.5a.75.75 0 01.75.75M16.5 25.25a.75.75 0 01.75-.75M17.25 26a.75.75 0 01-.75-.75"
        stroke="#54BBCA"
      />
      <path d="M18 25.25a.75.75 0 01-.75.75" stroke="#1E8DE1" />
      <path
        d="M20.25 33.5a.75.75 0 01.75.75M19.5 34.25a.75.75 0 01.75-.75M20.25 35a.75.75 0 01-.75-.75"
        stroke="#54BBCA"
      />
      <path d="M21 34.25a.75.75 0 01-.75.75" stroke="#1E8DE1" />
      <path stroke="#FFF" d="M27 9.5H12" />
      <path stroke="#1E8DE1" d="M0 24.5h6M3 21.5v6" />
      <circle stroke="#1E8DE1" cx="39" cy="9.5" r="3" />
    </g>
  </svg>
);

export default TestTube;
