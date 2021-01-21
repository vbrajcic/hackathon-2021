import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { Node } from 'types/common';
import Post from 'types/posts/post';
import JobPositionCard from './JobPositionCard';

import styles from './OpenPositions.module.scss';

interface OpenPositionsProps {
  positions: Node<Post>[];
}

const OpenPositions: React.FC<OpenPositionsProps> = ({ positions }) => {
  if (!positions) {
    return null;
  }
  return (
    <Grid component="section">
      <Container maxWidth="xl" className={styles.container}>
        <Grid>
          <Typography variant="h2" className={styles.title}>
            Let’s create something great together
          </Typography>
        </Grid>
        <Grid container>
          <Typography variant="h4" className={styles.subtitle}>
            Open positions
            <b>{` (${positions.length})`}</b>
          </Typography>
          {positions.map(position => (
            <JobPositionCard key={position.node.slug} position={position.node} />
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default OpenPositions;
