import React from 'react';
import Container from '@material-ui/core/Container';
import ContactForm from 'components/ContactForm';
import IconsGrid from 'components/IconsGrid';

import styles from './ReferencesSection.module.scss';

const partners = [
  'ericsson',
  'cisco',
  'uhy',
  'leMeridien',
  'sothebys',
  'amd',
  'nvidia',
  'telenor',
  'deloitte',
  'cnn',
  'microsoft',
  'tcom',
  'allianz',
];

const ReferencesSection: React.FC = () => (
  <section className={styles.container}>
    <div className={styles.backgroundWrapper} />
    <IconsGrid
      mode="partners"
      icons={partners}
      HeadingProps={{
        title: 'These\ncompanies\ntrust us',
        description:
          'We shape our core capabilities around lean product teams capable of delivering immense value to organisations worldwide',
        sectionTitle: 'REFERENCES',
      }}
    />
    <Container maxWidth="xl">
      <ContactForm className={styles.contactForm} />
    </Container>
  </section>
);

export default ReferencesSection;
