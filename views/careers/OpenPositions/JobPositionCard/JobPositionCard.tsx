import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Post from 'types/posts/post';
import useJobPosition from 'utils/hooks/useJobPosition';
import Hyperlink from 'components/Hyperlink';

import styles from './JobPositionCard.module.scss';

interface JobPositionCardProps {
  position: Post;
}

const JobPositionCard: React.FC<JobPositionCardProps> = ({ position }) => {
  const jobPosition = useJobPosition(position?.tags);

  if (!position || !jobPosition) {
    return null;
  }

  const JobIcon = jobPosition?.icon;

  return (
    <Card classes={{ root: styles.root }} className={styles.container}>
      <Hyperlink
        href={`/careers/${position.slug}`}
        component={
          <CardActionArea classes={{ focusHighlight: styles.focusHighlight }} className={styles.content}>
            <JobIcon className={styles.icon} />
            <Grid container direction="column" className={styles.textWrapper}>
              <Typography variant="h4">{position.title}</Typography>
              <Typography
                variant="body2"
                component="div"
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
