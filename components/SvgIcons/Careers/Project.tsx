import React from 'react';

const Project: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#424D56" cx="35" cy="35" r="35" />
      <g transform="translate(22 22)" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M9 22.5l4.764-4.764a.9.9 0 011.273 0l2.327 2.327a.9.9 0 001.273 0L23.4 15.3" />
        <rect width="27" height="27" rx="1.8" />
        <circle cx="9" cy="9" r="5.4" />
        <path d="M9 3.6V9l3.818 3.818M18.9 5.4h3.6M18.9 9h3.6" />
      </g>
    </g>
  </svg>
);

export default Project;
