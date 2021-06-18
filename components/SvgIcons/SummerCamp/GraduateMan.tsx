import React, { FC, SVGProps } from 'react';

const GraduateMan: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.1875 10.5C30.1875 15.5741 26.0741 19.6875 21 19.6875C15.9259 19.6875 11.8125 15.5741 11.8125 10.5V1.3125H30.1875V10.5Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.9375 40.6875C3.9375 31.2641 11.5766 23.625 21 23.625C30.4234 23.625 38.0625 31.2641 38.0625 40.6875"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M1.3125 1.3125H40.6875" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.8125 9.1875H30.1875" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.9375 1.3125V14.4375" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12.2734 26.0242L21.0007 32.8124L29.7279 26.0242"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default GraduateMan;
