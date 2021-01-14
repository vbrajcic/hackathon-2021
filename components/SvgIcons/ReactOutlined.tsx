import React from 'react';

const ReactOutlined: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>Group</title>
    <g
      id="Page-1"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g id="Home_1440" transform="translate(-110.000000, -7232.000000)" stroke="#FFFFFF" strokeWidth="2.5">
        <g id="science-molecule" transform="translate(112.000000, 7234.000000)">
          <circle id="Oval" cx="23.0144" cy="23.0144" r="3.6" />
          <ellipse
            id="Oval"
            transform="translate(23.014865, 23.014400) rotate(-45.000000) translate(-23.014865, -23.014400) "
            cx="23.0148651"
            cy="23.0144"
            rx="24"
            ry="8.4"
          />
          <ellipse
            id="Oval"
            transform="translate(23.014865, 23.014400) rotate(-45.000000) translate(-23.014865, -23.014400) "
            cx="23.0148651"
            cy="23.0144"
            rx="8.4"
            ry="24"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default ReactOutlined;
