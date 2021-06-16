import React from 'react';

const Designer: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="30" cy="30" r="30" fill="#3ACC9E" />
    <rect
      x="16.875"
      y="16.875"
      width="26.25"
      height="26.25"
      rx="1"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="25.197"
      cy="28.678"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      r="4.803"
    />
    <path
      d="M29.981 28.25h2.394c.621 0 1.124-.504 1.125-1.125V21.5c0-.621-.504-1.124-1.125-1.125H26.75c-.621 0-1.124.504-1.125 1.125v2.394M20.375 37.875h10.5M32.853 32.62l3.287 2.739"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="36.125"
      y="34.375"
      width="3.5"
      height="5.25"
      rx="1"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37 21.25h2.625M37 24.75h2.625"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Designer;
