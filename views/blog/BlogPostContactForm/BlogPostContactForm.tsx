import React from 'react';
import Container from '@material-ui/core/Container';
import ContactForm from 'components/ContactForm';

import styles from './BlogPostContactForm.module.scss';

const BlogPostContactForm: React.FC = () => (
  <Container maxWidth={false} className={styles.container} disableGutters>
    <Container maxWidth="xl" className={styles.formWrapper}>
      <ContactForm />
    </Container>
  </Container>
);

export default BlogPostContactForm;
