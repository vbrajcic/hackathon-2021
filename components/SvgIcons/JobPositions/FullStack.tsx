import React from 'react';

const FullStack: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#3ACC9E" cx="30" cy="30" r="30" />
      <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M34.419 42.9c-.905-1.014-3.215-1.8-6.045-2.845-.861-.32-.72-2.566-.338-2.986a6.347 6.347 0 001.652-4.92c0-2.81-1.833-4.547-4.028-4.547-2.195 0-4.03 1.737-4.03 4.547a6.347 6.347 0 001.654 4.92c.38.42.522 2.667-.338 2.986-2.831 1.047-5.14 1.831-6.046 2.845" />
        <path d="M33.1 30.3v5.4l5.4-5.4h3.6a1.8 1.8 0 001.8-1.8V17.7a1.8 1.8 0 00-1.8-1.8H27.7a1.8 1.8 0 00-1.8 1.8V24" />
        <path d="M31.3 20.4l2.7 2.7-2.7 2.7M37.6 23.1h2.7" />
      </g>
    </g>
  </svg>
);

export default FullStack;
