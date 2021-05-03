import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Post from 'types/posts/post';
import useFactory from 'utils/hooks/useFactory';

import { Node } from 'types/common';

import JobPositionCard from './JobPositionCard';

import styles from './OpenPositions.module.scss';

interface OpenPositionsProps {
  positions?: Node<Post>[];
}

const OpenPositions: React.FC<OpenPositionsProps> = ({ positions }) => {
  const positionsCount = useFactory(() => (positions ? positions.length : 0));

  return (
    <Container
      id="open-positions-section"
      maxWidth="xl"
      component="section"
      className={styles.container}
      classes={{ root: styles.root }}
    >
      <Grid>
        <Typography variant="h2" className={styles.title}>
          Let’s create something great together
        </Typography>
      </Grid>
      <Grid container direction="column">
        <Typography variant="h4" component="h3" className={styles.subtitle}>
          Open positions
          <b>{` (${positionsCount})`}</b>
        </Typography>
        {positions &&
          positionsCount > 0 &&
          positions.map(position => <JobPositionCard key={position.node.slug} position={position.node} />)}
      </Grid>
    </Container>
  );
};

export default OpenPositions;
