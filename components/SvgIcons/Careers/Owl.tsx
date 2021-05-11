import React from 'react';

const Owl: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#424D56" cx="35" cy="35" r="35" />
      <g transform="translate(24 21)" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M11.972 5.198l9.259-2.57L11.97.064a1.756 1.756 0 00-.931 0L1.77 2.629l9.264 2.568c.307.085.63.086.938.001zM17.692 7.607V3.611M6.192 3.856v3.383M1.769 2.63v3.595" />
        <ellipse cx="7.077" cy="10.719" rx="3.538" ry="3.595" />
        <path d="M7.077 10.27a.446.446 0 00-.442.449M7.52 10.719a.446.446 0 00-.443-.45M7.077 11.168a.446.446 0 00.442-.45M6.635 10.719c0 .248.198.45.442.45" />
        <ellipse cx="15.923" cy="10.719" rx="3.538" ry="3.595" />
        <path d="M15.923 10.27a.446.446 0 00-.442.449M16.365 10.719a.446.446 0 00-.442-.45M15.923 11.168a.446.446 0 00.442-.45M15.48 10.719c0 .248.199.45.443.45M8.532 13.996L11.5 17.01l2.968-3.014M18.577 17.01v2.8c0 3.97-3.169 7.19-7.077 7.19s-7.077-3.22-7.077-7.19v-2.8" />
        <path d="M18.842 12.751a3.655 3.655 0 012.893.896A3.779 3.779 0 0123 16.437v2.475a6.296 6.296 0 01-2.044 4.595 6.091 6.091 0 01-4.717 1.567M4.019 12.53a3.678 3.678 0 00-2.821.985A3.802 3.802 0 000 16.29v2.517c0 1.77.732 3.457 2.019 4.65a6.132 6.132 0 004.742 1.617" />
      </g>
    </g>
  </svg>
);

export default Owl;