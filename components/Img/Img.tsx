import React from 'react';
import Image, { ImageProps } from 'next/image';

const Img: React.FC<ImageProps> = ({ quality = 100, ...props }) => <Image {...props} quality={quality} />;

export default Img;
