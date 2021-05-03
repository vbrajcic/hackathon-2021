import React from 'react';
import Container from '@material-ui/core/Container';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import projects from 'config/projects';

import CaseStudy from './CaseStudy';

import styles from './OurProjectsSection.module.scss';

const OurProjectsSection: React.FC = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <Container className={styles.container} maxWidth="xl" component="section" disableGutters={!isDesktop}>
      {projects.map(project => (
        <CaseStudy key={project.url} project={project} />
      ))}
    </Container>
  );
};

export default OurProjectsSection;
