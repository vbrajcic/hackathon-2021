import React, { FC, SVGProps } from 'react';

const Snowman: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="36" height="36" viewBox="0 0 36 36" {...props}>
    <g
      transform="translate(1 1)"
      stroke="#000"
      strokeWidth="2.25"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16.989" cy="6.875" r="6.75" />
      <circle cx="16.989" cy="23.75" r="10.125" />
      <path d="M14.74 5.188c.31 0 .562.251.562.562M14.177 5.75a.561.561 0 01.563-.563M14.74 6.313a.561.561 0 01-.563-.563M15.302 5.75c0 .31-.252.563-.563.563M19.24 5.188c.31 0 .562.251.562.562M18.677 5.75a.561.561 0 01.563-.563M19.24 6.313a.561.561 0 01-.563-.563M19.802 5.75c0 .31-.252.563-.563.563M16.99 19.25c.31 0 .562.252.562.563M16.427 19.813a.561.561 0 01.563-.563M16.99 20.375a.561.561 0 01-.563-.563M17.552 19.813c0 .31-.252.562-.563.562M16.99 24.875c.31 0 .562.252.562.563M16.427 25.438a.561.561 0 01.563-.563M16.99 26a.561.561 0 01-.563-.563M17.552 25.438c0 .31-.252.562-.563.562M25.244 17.887l8.631-6.083M29.386 9.125v5.842M8.733 17.887L.125 11.804M4.614 9.125v5.851" />
    </g>
  </svg>
);

export default Snowman;
