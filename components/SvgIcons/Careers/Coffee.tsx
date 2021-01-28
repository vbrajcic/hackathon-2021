import React from 'react';

const Coffee: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#424D56" cx="35" cy="35" r="35" />
      <g transform="translate(24 21)" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M2.6 11.7H17c.9941125 0 1.8.8058875 1.8 1.8v5.4c0 2.3869484-.9482116 4.6761336-2.636039 6.363961C14.4761336 26.9517884 12.1869484 27.9 9.8 27.9h0c-4.97056275 0-9-4.0294373-9-9v-5.4c0-.9941125.80588745-1.8 1.8-1.8z" />
        <path d="M18.8 13.5h1.8c2.9787813.0085683 5.3914317 2.4212187 5.4 5.4h0c-.0085683 2.9787813-2.4212187 5.3914317-5.4 5.4H17M8.9 17.1v-5.4M16.1.9c1.7244 3.4476-3.48 4.6572-.9 8.1M10.7.9c1.7244 3.4476-3.4812 4.6572-.9 8.1M5.3.9C7.0244 4.3476 1.82 5.5572 4.4 9" />
        <rect x="6.2" y="17.1" width="5.4" height="5.4" rx=".6" />
      </g>
    </g>
  </svg>
);

export default Coffee;
