import React, { FC, SVGProps } from 'react';

const FingerTouch: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fillRule="evenodd">
      <circle cx="35" cy="35" r="35" />
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25">
        <path
          d="M30.5 51.875l-4.146-4.665a2.336 2.336 0 013.492-3.104l2.904 3.269v-13.5a2.25 2.25 0 114.5 0V44h2.25a6.75 6.75 0 016.75 6.75v1.127"
          stroke="#FFF"
        />
        <path d="M41.75 38.324a11.25 11.25 0 10-13.5 0" stroke="#000" />
        <path d="M41.75 38.324a11.25 11.25 0 10-13.5 0" stroke="#FFF" />
      </g>
    </g>
  </svg>
);

export default FingerTouch;
