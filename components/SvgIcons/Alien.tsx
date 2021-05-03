import React from 'react';

const Alien: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <g
      transform="translate(1 1)"
      stroke="#FFF"
      strokeWidth="2.5"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.418 13.371l21.213 21.213-6.717 6.718a4 4 0 01-5.657 0L4.7 25.745a4 4 0 010-5.657l6.717-6.717zM32.632 34.582L11.418 13.368l8.144-5.536a13.6 13.6 0 0117.312 1.294 13.6 13.6 0 011.294 17.312l-5.536 8.144z" />
      <circle cx="29.45" cy="16.55" r="4.5" />
      <path d="M11.418 13.368l-4.888-.554a7.022 7.022 0 00-5.086 2.044l-.432.432a1.81 1.81 0 00.038 2.56l3.034 3.034M32.632 34.582l.554 4.888a7.022 7.022 0 01-2.044 5.086l-.432.432a1.81 1.81 0 01-2.56-.038l-3.034-3.034M3.5 42.5h6M6.5 39.5v6M2 3.5h6M5 .5v6M39.5 33.5h6M42.5 30.5v6M40.25 42.5a.75.75 0 01.75.75M39.5 43.25a.75.75 0 01.75-.75M40.25 44a.75.75 0 01-.75-.75M41 43.25a.75.75 0 01-.75.75M1.25 32a.75.75 0 01.75.75M.5 32.75a.75.75 0 01.75-.75M1.25 33.5a.75.75 0 01-.75-.75M2 32.75a.75.75 0 01-.75.75M17.722.5a.752.752 0 01.778.722M17 1.278A.752.752 0 0117.722.5M17.778 2A.752.752 0 0117 1.278M18.5 1.222a.752.752 0 01-.722.778" />
    </g>
  </svg>
);

export default Alien;