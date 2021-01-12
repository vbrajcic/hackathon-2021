import React from 'react';
import cn from 'classnames';

import { Typography } from '@material-ui/core';

import styles from './Intro.module.scss';

interface IntroProps {
  text: string;
  className?: string;
}

const Intro: React.FC<IntroProps> = ({ text, className, children }) => (
  <section className={cn(styles.container, className)}>
    <Typography variant="h1">{text}</Typography>
    {children}
  </section>
);

export default Intro;
