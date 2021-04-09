import { addAssetPrefix } from 'utils/static/addAssetPrefix';

export type ProjectCategory = 'MOBILE_APPS';

export interface Project {
  category: ProjectCategory;
  title: string;
  url: string;
  images: {
    large: string;
    small: string;
  };
}

const projects: Project[] = [
  {
    category: 'MOBILE_APPS',
    title: 'Norways Favorite TV Guide',
    url: '/work/meetv',
    images: {
      large: addAssetPrefix('/images/meetv-bg-image-lg.png'),
      small: addAssetPrefix('/images/meetv-bg-image-sm.png'),
    },
  },
  {
    category: 'MOBILE_APPS',
    title: 'Smart parking system',
    url: '/work/smart-parking-system',
    images: {
      large: addAssetPrefix('/images/parking-bg-image-lg.png'),
      small: addAssetPrefix('/images/parking-bg-image-sm.png'),
    },
  },
  {
    category: 'MOBILE_APPS',
    title: 'Hyre: Car anytime you want',
    url: '/work/hyre',
    images: {
      large: addAssetPrefix('/images/hyre-bg-image-lg.png'),
      small: addAssetPrefix('/images/hyre-bg-image-sm.png'),
    },
  },
];

export default projects;
