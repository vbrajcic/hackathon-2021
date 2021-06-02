import React, { FC, SVGProps } from 'react';

const Rocket: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M43.36 2l-4.316.48a15 15 0 00-8.95 4.302L10.48 26.396l8.48 8.484 19.618-19.614a14.989 14.989 0 004.302-8.95L43.36 2z"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M10.48 26.396L3.238 23.98a1.498 1.498 0 01-.586-2.482l.464-.464a12 12 0 0112.28-2.9l2.51.836-7.424 7.426z"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M10.48 26.396L3.238 23.98a1.498 1.498 0 01-.586-2.482l.464-.464a12 12 0 0112.28-2.9l2.51.836-7.424 7.426zM18.96 34.88l2.417 7.244a1.498 1.498 0 002.482.586l.466-.464a12 12 0 002.898-12.28l-.832-2.5-7.43 7.414z"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M18.96 34.88l2.417 7.244a1.498 1.498 0 002.482.586l.466-.464a12 12 0 002.898-12.28l-.832-2.5-7.43 7.414z"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.918 35.942a4.486 4.486 0 01-1.318 3.182C10.844 40.88 2 43.366 2 43.366s2.486-8.85 4.242-10.6a4.492 4.492 0 012.888-1.31"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Rocket;
