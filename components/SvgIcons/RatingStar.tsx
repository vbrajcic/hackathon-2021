import React, { FC, SVGProps } from 'react';

const RatingStar: FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1.40625 26.7188V43.5938" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M1.40625 40.7812H29.5312C29.5312 37.6746 27.0129 35.1562 23.9062 35.1562H16.875C16.875 32.0496 14.3566 29.5312 11.25 29.5312H1.40625"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M11.25 35.1562H16.875" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.7475 2.31178L35.5069 9.71053H41.9344C42.6063 9.71139 43.2112 10.1178 43.466 10.7395C43.7207 11.3613 43.575 12.0753 43.0969 12.5474L37.2525 18.2999L40.5169 25.7999C40.8012 26.4523 40.6368 27.2134 40.1085 27.6903C39.5802 28.1672 38.8063 28.2531 38.1863 27.9037L30.27 23.4524L22.3538 27.9037C21.7338 28.2531 20.9598 28.1672 20.4316 27.6903C19.9033 27.2134 19.7388 26.4523 20.0231 25.7999L23.2894 18.2999L17.4375 12.5474C16.9575 12.076 16.8105 11.3609 17.0656 10.7384C17.3207 10.1158 17.9272 9.70954 18.6 9.71053H25.0275L28.7775 2.31178C29.0563 1.74627 29.632 1.38818 30.2625 1.38818C30.893 1.38818 31.4687 1.74627 31.7475 2.31178V2.31178Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RatingStar;
