import React from 'react';

const Multisport: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#424D56" cx="35" cy="35" r="35" />
      <g transform="translate(22 22)" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <circle cx="13.5" cy="13.5" r="13.5" />
        <path d="M11.126.208a11.743 11.743 0 01-10.92 10.92M16.99.455C16.464 9.359 9.36 16.462.457 16.99M22.54 3.475A23.497 23.497 0 013.476 22.541M26.378 9.44a28.84 28.84 0 01-16.94 16.938" />
      </g>
    </g>
  </svg>
);

export default Multisport;
