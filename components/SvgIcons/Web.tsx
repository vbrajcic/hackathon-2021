import React, { FC, SVGProps } from 'react';

const Web: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="70px" height="70px" {...props}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Home_1440" transform="translate(-781.000000, -1260.000000)">
        <g id="Group" transform="translate(781.000000, 1260.000000)">
          <circle id="Oval" fill="#5E74D2" cx="35" cy="35" r="35" />
          <g
            transform="translate(18.000000, 21.000000)"
            id="laptop-settings"
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.25"
          >
            <g>
              <rect id="Rectangle-path" x="16" y="16" width="18" height="18" rx="2.25" />
              <polyline id="Shape" points="22.75 22.75 20.5 25 22.75 27.25" />
              <polyline id="Shape" points="27.25 22.75 29.5 25 27.25 27.25" />
              <path
                d="M3.5,17.375 L3.5,2.75 C3.5,1.50735931 4.50735931,0.5 5.75,0.5 L28.25,0.5 C29.4926407,0.5 30.5,1.50735931 30.5,2.75 L30.5,11.75"
                id="Shape"
              />
              <path d="M11.375,17.375 L0.125,17.375 C0.125,20.4816017 2.64339828,23 5.75,23 L11.375,23" id="Shape" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Web;
