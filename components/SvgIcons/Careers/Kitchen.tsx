import React from 'react';

const Kitchen: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#424D56" cx="35" cy="35" r="35" />
      <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M25.606 35.386h19.788v9.435a1.19 1.19 0 01-1.2 1.179H26.806a1.19 1.19 0 01-1.2-1.18v-9.434z" />
        <path d="M25.606 36.208c-2.825-1.6-4.204-4.866-3.36-7.963.843-3.096 3.698-5.249 6.958-5.245 5.397 0 6.296 5.307 10.793 5.307" />
        <path d="M45.394 36.208c2.825-1.6 4.204-4.866 3.36-7.963-.843-3.096-3.698-5.249-6.958-5.245-3.046 0-4.66 1.691-6.296 3.164M31.003 40.693v1.769M35.5 40.693v1.769M39.997 40.693v1.769" />
      </g>
    </g>
  </svg>
);

export default Kitchen;
