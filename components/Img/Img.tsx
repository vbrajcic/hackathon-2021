import React from 'react';
import Image, { ImageProps } from 'next/image';

const Img: React.FC<ImageProps> = props => <Image {...props} quality={100} />;

export default Img;
