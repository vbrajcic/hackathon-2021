import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Layout from 'components/Layout';
import ContactForm from 'components/ContactForm';

import HeroSection from './HeroSection';
import WhatWeDoSection from './WhatWeDoSection';
import OurProjectsSection from './OurProjectsSection';

import styles from './Home.module.scss';

const Home = () => (
  <Layout>
    <Head>
      <title>Profico</title>
    </Head>
    <Container className={styles.container} maxWidth="xl" disableGutters>
      <HeroSection />
      <WhatWeDoSection />
      <OurProjectsSection />
      <ContactForm />
    </Container>
  </Layout>
);

export default Home;
