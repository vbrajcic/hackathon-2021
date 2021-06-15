import React, { FC, SVGProps } from 'react';

const MultipleUsers: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle
      cx="7.875"
      cy="10.5"
      r="3.9375"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.875 17.0625C4.25063 17.0625 1.3125 20.0006 1.3125 23.625V27.5625H3.9375L5.25 38.0625H10.5"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="34.125"
      cy="10.5"
      r="3.9375"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M34.125 17.0625C37.7494 17.0625 40.6875 20.0006 40.6875 23.625V27.5625H38.0625L36.75 38.0625H31.5"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="21"
      cy="6.5625"
      r="5.25"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.1875 23.625C30.1875 18.5509 26.0741 14.4375 21 14.4375C15.9259 14.4375 11.8125 18.5509 11.8125 23.625V27.5625H15.75L17.0625 40.6875H24.9375L26.25 27.5625H30.1875V23.625Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MultipleUsers;
