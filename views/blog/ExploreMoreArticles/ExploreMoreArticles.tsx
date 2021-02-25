import React, { useEffect, useRef, useState } from 'react';
import { Container, Grid, IconButton, Typography, useTheme } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { Edges } from 'types/common';
import Post from 'types/posts/post';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import { useWindowSize } from 'react-use';
import styles from './ExploreMoreArticles.module.scss';
import ArticleCard from './ArticleCard';

interface ExploreMoreArticlesProps {
  posts: Edges<Post>;
}

const ExploreMoreArticles: React.FC<ExploreMoreArticlesProps> = ({ posts }) => {
  const ourPosts = posts.edges.map(({ node }) => node);
  const newPosts = [...ourPosts, ...ourPosts];
  const innerWrapperRef = useRef<HTMLDivElement | null>(null);
  const { width: clientWidth } = useWindowSize();

  const [innerWrapperWidth, setInnerWrapperWidth] = useState<number>(0);

  const { isDesktop } = useBreakpoint();
  const {
    breakpoints: {
      values: { xl },
    },
  } = useTheme();

  useEffect(() => {
    /**
     * ReferencesSection > Container > padding-left: 120px
     * QuoteCards > .scrollBtnWrapper > width: 160px
     * ReferencesSection > Container > margin-left: (clientWidth - xl) / 2
     */
    let width = clientWidth - 610;

    if (clientWidth > xl) {
      width -= (clientWidth - xl) / 2;
    }

    setInnerWrapperWidth(width);
  }, [clientWidth, xl]);

  const handleScrollBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {
      currentTarget: { value },
    } = e;

    if (innerWrapperRef && innerWrapperRef.current) {
      if (value === 'right') {
        innerWrapperRef.current.scrollLeft += isDesktop ? 453 : 436;
      } else {
        innerWrapperRef.current.scrollLeft -= isDesktop ? 440 : 636;
      }
    }
  };

  return (
    <Container className={styles.container} maxWidth="xl" component="section" classes={{ root: styles.root }}>
      <Grid className={styles.exploreMore}>
        <Typography variant="h2" className={styles.title}>
          {' '}
          Explore more articles{' '}
        </Typography>
        <Typography variant="body2" className={styles.text}>
          We shape our core capabilities around lean product teams capable of delivering immense value to organisations
          worldwide
        </Typography>
        <Grid item className={styles.scrollBtnWrapper}>
          <IconButton onClick={handleScrollBtnClick} value="left" className={styles.scrollBtn}>
            <ChevronLeftIcon className={styles.icon} />
          </IconButton>
          <IconButton onClick={handleScrollBtnClick} value="right" className={styles.scrollBtn}>
            <ChevronRightIcon className={styles.icon} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item className={styles.cardsWrapper}>
        <Grid
          className={styles.innerCardsWrapper}
          style={{ width: isDesktop ? innerWrapperWidth : '100%' }}
          ref={innerWrapperRef}
        >
          {newPosts.map(post => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExploreMoreArticles;
