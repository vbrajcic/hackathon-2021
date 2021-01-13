import React from 'react';
import Container from '@material-ui/core/Container';
import ContactForm from 'components/ContactForm';
import HeroSection from './HeroSection';
import BlogSection from './BlogSection';
import WhatWeDoSection from './WhatWeDoSection';
import OurProjectsSection from './OurProjectsSection';

import styles from './Home.module.scss';

const Home: React.FC = () => (
  <Container className={styles.container} maxWidth="xl" disableGutters>
    <HeroSection />
    <WhatWeDoSection />
    <OurProjectsSection />
    <BlogSection />
    <ContactForm />
  </Container>
);

export default Home;
