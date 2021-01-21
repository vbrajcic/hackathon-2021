import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { Node } from 'types/common';
import Post from 'types/posts/post';
import Colors from 'styles/Colors';
import styles from './OpenPositions.module.scss';
import JobPositionCard from './JobPositionCard';

interface OpenPositionsProps {
  positions: Node<Post>[];
}

const OpenPositions: React.FC<OpenPositionsProps> = ({ positions }) => (
  <Grid component="section" className={styles.container}>
    <Container maxWidth="xl">
      <Grid className={styles.textWrapper}>
        <Typography variant="h2" className={styles.title}>
          Let’s create something great together
        </Typography>
      </Grid>
      <Grid container>
        <Typography variant="h4" className={styles.subtitle}>
          Open positions
          <b color={Colors.grey600}>{` (${positions?.length})`}</b>
        </Typography>
        {positions?.length &&
          positions.map(position => <JobPositionCard key={position.node.slug} position={position.node} />)}
      </Grid>
    </Container>
  </Grid>
);

export default OpenPositions;
