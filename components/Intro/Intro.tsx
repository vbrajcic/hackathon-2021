import { Typography } from '@material-ui/core';
import React from 'react';
import styles from './Intro.module.scss';

interface IntroProps {
  text: string;
}

const Intro: React.FC<IntroProps> = ({ text }) => (
  <section className={styles.container}>
    <Typography variant="h1">{text}</Typography>
  </section>
);

export default Intro;
