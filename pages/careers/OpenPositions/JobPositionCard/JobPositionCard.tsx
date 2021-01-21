/* eslint-disable no-console */
import React from 'react';

import Post from 'types/posts/post';
import { Button, Card, CardActionArea, Grid, Typography } from '@material-ui/core';
import useJobPosition from 'utils/hooks/useJobPosition';
import Hyperlink from 'components/Hyperlink';
import styles from './JobPositionCard.module.scss';

interface JobPositionCardProps {
  position: Post;
}

const JobPositionCard: React.FC<JobPositionCardProps> = ({ position }) => {
  const jobPosition = useJobPosition(position.tags);
  if (!jobPosition) {
    return null;
  }

  const JobIcon = jobPosition?.icon;

  return (
    <Card classes={{ root: styles.root }} className={styles.container}>
      <Hyperlink
        href={`/career/${position.slug}`}
        component={
          <CardActionArea classes={{ focusHighlight: styles.focusHighlight }} className={styles.content}>
            <JobIcon className={styles.icon} />
            <Grid container direction="column" className={styles.textWrapper}>
              <Typography variant="h4">{position.title}</Typography>
              <Typography
                variant="body2"
                dangerouslySetInnerHTML={{ __html: position.excerpt }}
                className={styles.subtitle}
              />
            </Grid>
            <Button className={styles.button}>View more details</Button>
          </CardActionArea>
        }
      />
    </Card>
  );
};

export default JobPositionCard;
