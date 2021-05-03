import { addAssetPrefix } from 'utils/static/addAssetPrefix';

interface About {
  heading: string;
  text: string;
  image: string;
  key: string;
}

const aboutUs: About[] = [
  {
    heading: 'The team',
    text:
      'We’re a collective of 30+ talented and creative designers, engineers and strategists. Once you combine all of us together you end up with an agile, lean machine capable of delivering digital products that are enjoyed and beloved by millions of users.',
    image: addAssetPrefix('/images/aboutUs/home-1.jpg'),
    key: 'card-1',
  },
  {
    heading: 'Built on Culture',
    text:
      'Our culture is built around people that care deeply about their work and clients that care deeply about their products. It’s the people we hire, and the clients we work with, that make us who we truly are: “a digital agency that transforms business and user needs into successful products”. ',
    image: addAssetPrefix('/images/aboutUs/home-2.jpg'),
    key: 'card-2',
  },
  {
    heading: 'Split & Zagreb Office + remote',
    text:
      'Our HQ is located in a beautiful and sunny town of Split. We also have an office in our nation’s capital - Zagreb. A lot of attention was given to establishing a cosy and stimulative work environment that makes Profico a place that not only looks good but feels even better.',
    image: addAssetPrefix('/images/aboutUs/home-1.jpg'),
    key: 'card-3',
  },
];

export default aboutUs;
