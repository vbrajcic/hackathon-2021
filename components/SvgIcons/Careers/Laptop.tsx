import React from 'react';

const Laptop: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#424D56" cx="35" cy="35" r="35" />
      <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M46.2 38.1V26.4c0-.99411255-.8058875-1.8-1.8-1.8h-18c-.99411255 0-1.8.80588745-1.8 1.8v11.7h21.6zM48.7452 43.6692c.247378.5568278.1962678 1.2010029-.1358221 1.7118545C48.277288 45.8919061 47.7093054 46.2 47.1 46.2H23.7c-.60930542 0-1.17728803-.3080939-1.50937793-.8189455-.3320899-.5108516-.38320008-1.1550267-.13582207-1.7118545L24.6 38.1h21.6l2.5452 5.5692zM33.6 42.6h3.6" />
      </g>
    </g>
  </svg>
);

export default Laptop;
