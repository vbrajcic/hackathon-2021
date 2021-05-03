import React from 'react';

const Time: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#424D56" cx="35" cy="35" r="35" />
      <g transform="translate(22 22)" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <circle cx="13.4" cy="13.4" r="12.6" />
        <path d="M13.4 13.4V8.9M13.4 13.4l5.6244 5.6256" />
      </g>
    </g>
  </svg>
);

export default Time;
