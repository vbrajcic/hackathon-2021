import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import projects from 'config/projects';

import CaseStudy from './CaseStudy';
import SideTitle from '../SideTitle';

import styles from './OurProjectsSection.module.scss';

const OurProjectsSection: React.FC = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <Container className={styles.container} maxWidth="xl" component="section" disableGutters={!isDesktop}>
      <SideTitle title="Our projects" />
      <Grid className={styles.projects} container>
        {projects.map(project => (
          <CaseStudy key={project.url} project={project} />
        ))}
      </Grid>
    </Container>
  );
};

export default OurProjectsSection;
