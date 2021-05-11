import React from 'react';

const Hands: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#424D56" cx="35" cy="35" r="35" />
      <g transform="translate(21 20)" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <ellipse cx="14.5" cy="2.875" rx="2.9" ry="2.875" />
        <path d="M9.311 7.517l2.901-2.876" />
        <ellipse cx="7.733" cy="8.625" rx="1.933" ry="1.917" />
        <path d="M19.689 7.517l-2.901-2.876" />
        <ellipse cx="21.267" cy="8.625" rx="1.933" ry="1.917" />
        <path d="M3.867 26.852L1.27 23.637A5.72 5.72 0 010 20.045v-6.61c0-1.059.866-1.917 1.933-1.917h0c1.068 0 1.934.858 1.934 1.917v4.792" />
        <path d="M9.667 26.852v-4.006a5.715 5.715 0 00-.976-3.195l-1.472-2.185a1.817 1.817 0 00-2.548-.569h0a1.78 1.78 0 00-.611 2.288l1.743 2.875M25.133 26.852l2.596-3.216A5.72 5.72 0 0029 20.044v-6.61a1.925 1.925 0 00-1.933-1.916h0a1.925 1.925 0 00-1.934 1.917v4.792" />
        <path d="M19.333 26.852v-4.006c0-1.137.34-2.249.976-3.195l1.472-2.187a1.817 1.817 0 012.548-.569h0a1.78 1.78 0 01.611 2.29l-1.743 2.875" />
      </g>
    </g>
  </svg>
);

export default Hands;
