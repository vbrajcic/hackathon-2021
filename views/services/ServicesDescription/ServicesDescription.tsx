import React from 'react';

import Design from './Design';
import MobileDevelopment from './MobileDevelopment';
import ProductStrategy from './ProductStrategy';
import WebDevelopment from './WebDevelopment';
import ProductTeams from './ProductTeams';

import styles from './ServicesDescription.module.scss';

const ServicesDescription: React.FC = () => (
  <section className={styles.container}>
    <ProductStrategy />
    <Design />
    <WebDevelopment />
    <MobileDevelopment />
    <ProductTeams />
  </section>
);

export default ServicesDescription;
