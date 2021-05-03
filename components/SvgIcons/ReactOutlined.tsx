import React from 'react';

const ReactOutlined: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
    <g
      transform="translate(2 2)"
      stroke="#FFF"
      strokeWidth="2.5"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="23.014" cy="23.014" r="3.6" />
      <ellipse transform="rotate(-45 23.015 23.014)" cx="23.015" cy="23.014" rx="24" ry="8.4" />
      <ellipse transform="rotate(-45 23.015 23.014)" cx="23.015" cy="23.014" rx="8.4" ry="24" />
    </g>
  </svg>
);

export default ReactOutlined;
