import { addAssetPrefix } from 'utils/static/addAssetPrefix';

export interface Quote {
  text: string;
  companyImgSrc: string;
  author: {
    name: string;
    title: string;
    imgSrc: string;
  };
}

const quotes: Quote[] = [
  {
    text:
      'I am impressed by the 360 degrees approach that Profico takes on any challenge we throw at them. As a result we have now integrated them fully into our organization and we no longer consider them as a company providing developers, but rather providing us with high quality business development throughout the entire process.',
    companyImgSrc: addAssetPrefix('images/testimonials/startsiden.png'),
    author: {
      name: 'Trygve Sørvaag',
      title: 'director of products and business development at ABC Startsiden AS',
      imgSrc: addAssetPrefix('images/testimonials/trygve.jpeg'),
    },
  },
  {
    text:
      'We are very happy with the willingness and ability that Profico brings to think about our business-needs and co-create solutions. We are developing big slices of our customer journeys together with Profico, and trust them to help us create something that works for our customers.',
    companyImgSrc: addAssetPrefix('images/testimonials/hyre.png'),
    author: {
      name: 'Ola Gjønnes',
      title: 'Product Manager at Hyre AS',
      imgSrc: addAssetPrefix('images/testimonials/ola.jpeg'),
    },
  },
];

export default quotes;
