import { Typography } from '@material-ui/core';
import React from 'react';

interface IntroProps {
  text: string;
}

const Intro: React.FC<IntroProps> = ({ text }) => (
  <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
    <Typography variant="h1">{text}</Typography>
  </section>
);

export default Intro;
