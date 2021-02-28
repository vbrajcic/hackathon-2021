import React from 'react';
import Container from '@material-ui/core/Container';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import Heading from './Heading';
import PartnersGrid from './PartnersGrid';

import styles from './ReferencesSection.module.scss';

const ReferencesSection: React.FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <section className={styles.container}>
      <div className={styles.backgroundWrapper} />
      <Container maxWidth="xl">
        {isMobile && <Heading />}
        <PartnersGrid />
      </Container>
    </section>
  );
};

export default ReferencesSection;
