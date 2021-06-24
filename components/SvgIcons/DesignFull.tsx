import React, { FC, SVGProps } from 'react';

const DesignFull: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="329" height="337" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M329 337L205.625 0h-86.87L0 337h77.167l19.87-58.71h130.768L247.212 337H329zM129.88 182.589L162.54 78h2.76l30.82 104.589L209 221h-92l12.88-38.411z"
        fill="#DA7067"
        fillRule="nonzero"
        opacity=".2"
      />
      <circle cx="35" cy="35" r="35" transform="translate(10 185)" fill="#DA7067" />
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25">
        <path
          d="M40.5 236.875l-4.146-4.665a2.336 2.336 0 013.492-3.103l2.904 3.268v-13.5a2.25 2.25 0 114.5 0V229h2.25a6.75 6.75 0 016.75 6.75v1.127"
          stroke="#FFF"
        />
        <path d="M51.75 223.324a11.25 11.25 0 10-13.5 0" stroke="#000" />
        <path d="M51.75 223.324a11.25 11.25 0 10-13.5 0" stroke="#FFF" />
      </g>
    </g>
  </svg>
);

export default DesignFull;
