import Head from 'next/head';
import Link from 'next/link';
import Intro from 'components/intro';
import Container from 'components/container';
import Layout from 'components/layout';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Profico</title>
      </Head>
      <Container>
        <Intro text="Home" />
        <Link href="/work">
          <a>Work</a>
        </Link>
        {' | '}
        <Link href="/services">
          <a>Services</a>
        </Link>
        {' | '}
        <Link href="/about">
          <a>About us</a>
        </Link>
        {' | '}
        <Link href="/careers">
          <a>Careers</a>
        </Link>
        {' | '}
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        {' | '}
        <Link href="/contact">
          <a>Contact us</a>
        </Link>
      </Container>
    </Layout>
  );
}
