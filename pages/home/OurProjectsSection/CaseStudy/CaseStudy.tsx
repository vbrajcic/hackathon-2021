import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hyperlink from 'components/Hyperlink';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import { Project, ProjectCategory } from 'config/projects';

import styles from './CaseStudy.module.scss';

interface CaseStudyProps {
  project: Project;
}

const categoryBadgeMap: { [key in ProjectCategory]: string } = {
  MOBILE_APPS: 'Mobile apps',
};

const CaseStudy: React.FC<CaseStudyProps> = ({ project }) => {
  const { isMobile } = useBreakpoint();

  /**
   * This check fixes Next.js build error. Apart from that, it does nothing.
   *
   * ```
   *  Error occurred prerendering page "/home/OurProjectsSection/CaseStudy".
   *  TypeError: Cannot read property 'category' of undefined.
   * ```
   */
  if (!project) {
    return null;
  }

  const { category, title, url, images } = project;

  return (
    <Paper
      classes={{ root: styles.root }}
      className={styles.container}
      style={{ backgroundImage: `url(${isMobile ? images.small : images.large})` }}
    >
      <Typography variant="overline" className={styles.category}>
        {categoryBadgeMap[category]}
      </Typography>
      <Typography variant="h1" className={styles.title}>
        {title}
      </Typography>
      <Hyperlink
        href={url}
        component={
          <Button className={styles.button} color="primary">
            View case study
          </Button>
        }
      />
    </Paper>
  );
};

export default CaseStudy;
