import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Layout from 'components/Layout';
// import Hyperlink from 'components/Hyperlink';
import ContactForm from 'components/ContactForm';
// import links from 'config/links';

import HeroSection from './HeroSection';
import WhatWeDoSection from './WhatWeDoSection';

import styles from './Home.module.scss';

const Home = () => (
  <Layout>
    <Head>
      <title>Profico</title>
    </Head>
    <Container className={styles.container} maxWidth="xl">
      <HeroSection />
      {/* {links.map(({ text, url }, index) => (
        <Hyperlink key={url} href={url}>{`${text}${index !== links.length - 1 ? ' | ' : ''}`}</Hyperlink>
      ))} */}
      <WhatWeDoSection />
      <ContactForm />
    </Container>
  </Layout>
);

export default Home;
