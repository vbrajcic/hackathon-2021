import React from 'react';

const Travel: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#424D56" cx="35" cy="35" r="35" />
      <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M47.9324 36.3468l-10.6632 3.5844-1.4292-1.4196-2.1192.7128c-.2868532.0960755-.5061326.3300085-.5834775.6224688-.0773449.2924603-.0023783.6042103.1994775.8295312l2.8668 3.2088c.4805949.538465 1.2363541.7377965 1.92.5064l3.1404-1.0548-.636 4.536c-.0436247.3088705.0757978.6183054.3156139.8177855.2398161.1994801.5658244.2605564.8615861.1614145l1.6332-.5496c.2528412-.0853439.4549432-.2782195.552-.5268l2.3928-6.1596 2.9856-1.0032c1.1780233-.397645 1.810645-1.6749766 1.413-2.853-.3976451-1.1780233-1.6749766-1.810645-2.853-1.413h.0036z" />
        <path d="M44.9468 37.3512l-3.336-2.298c-.2334017-.1600975-.5283955-.2014144-.7968-.1116l-1.6056.54c-.2958567.0989476-.5192457.3442314-.5901797.6480244-.0709339.303793.0207335.6226407.2421797.8423756l1.8204 1.812" />
        <path d="M30.2 42.5184c-4.88071246-2.2370709-7.37703164-7.7197562-5.85978034-12.86988135 1.5172513-5.15012513 6.58731917-8.40371692 11.90131624-7.63737801C41.555533 22.77747955 45.4997221 27.33102987 45.5 32.7" />
        <path d="M27.83 24.366l6.3372 2.4c.826908.31003979 1.3067617 1.17418318 1.1328 2.04l-.3768 1.8768c-.1364228.6820566-.653609 1.2244713-1.3284 1.3932L31.1 32.7l-1.38 3.4608c-.26976393.6764737-.73893302 1.2548785-1.3452 1.6584l-2.202 1.5084M42.2 24.9228l-1.7664 3.51c-.213686.42683554-.249081.92107006-.0984 1.374L41 31.8" />
      </g>
    </g>
  </svg>
);

export default Travel;