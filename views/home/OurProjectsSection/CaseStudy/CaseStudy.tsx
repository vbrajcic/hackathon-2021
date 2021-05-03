import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { CardContent } from '@material-ui/core';
// import CardActionArea from '@material-ui/core/CardActionArea';
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

  const { category, title, images } = project;

  return (
    <Card
      classes={{ root: styles.root }}
      className={styles.container}
      style={{ backgroundImage: `url(${isMobile ? images.small : images.large})` }}
    >
      <CardContent className={styles.wrapper}>
        <Typography variant="overline" className={styles.category}>
          {categoryBadgeMap[category]}
        </Typography>
        <Typography variant="h1" className={styles.title}>
          {title}
        </Typography>
        <Button className={styles.button} color="primary" disabled>
          Case study coming soon
        </Button>
      </CardContent>
    </Card>
  );
};

export default CaseStudy;
