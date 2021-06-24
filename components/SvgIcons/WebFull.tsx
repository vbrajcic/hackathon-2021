import React, { FC, SVGProps } from 'react';

const WebFull: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="382" height="262" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        stroke="#5E74D2"
        strokeWidth="65"
        opacity=".2"
        strokeLinecap="round"
        d="M148 228.58L50.42 131 148 33.42M238 228.58L335.58 131 238 33.42"
      />
      <g transform="translate(0 104)">
        <circle fill="#5E74D2" cx="35" cy="35" r="35" />
        <g transform="translate(18 21)" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25">
          <rect x="16" y="16" width="18" height="18" rx="2.25" />
          <path d="M22.75 22.75L20.5 25l2.25 2.25M27.25 22.75L29.5 25l-2.25 2.25M3.5 17.375V2.75A2.25 2.25 0 015.75.5h22.5a2.25 2.25 0 012.25 2.25v9M11.375 17.375H.125A5.625 5.625 0 005.75 23h5.625" />
        </g>
      </g>
    </g>
  </svg>
);

export default WebFull;
