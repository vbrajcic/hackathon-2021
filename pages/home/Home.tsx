import React from 'react';
import Container from '@material-ui/core/Container';

import Post from 'types/posts/post';
import { Node } from 'types/common';

import ContactForm from 'components/ContactForm';
import HeroSection from './HeroSection';
import BlogSection from './BlogSection';
import WhatWeDoSection from './WhatWeDoSection';

import styles from './Home.module.scss';

interface HomeProps {
  posts: Node<Post>[];
}

const Home: React.FC<HomeProps> = ({ posts }) => (
  <Container className={styles.container} maxWidth="xl">
    <HeroSection />
    <WhatWeDoSection />
    <BlogSection posts={posts} />
    <ContactForm />
  </Container>
);

export default Home;
