import React, { useEffect, useRef, useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Post from 'types/posts/post';
import Teaser from 'components/Teaser';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import { Container, Grid, IconButton, Typography, useTheme } from '@material-ui/core';
import { useWindowSize } from 'react-use';
import { Edges } from 'types/common';

import styles from './ExploreMoreArticles.module.scss';

interface ExploreMoreArticlesProps {
  posts: Edges<Post>;
}

const ExploreMoreArticles: React.FC<ExploreMoreArticlesProps> = ({ posts }) => {
  const innerWrapperRef = useRef<HTMLDivElement | null>(null);
  const { width: clientWidth } = useWindowSize();

  const [innerWrapperWidth, setInnerWrapperWidth] = useState<number>(0);

  const { isDesktop, isMobile } = useBreakpoint();
  const {
    breakpoints: {
      values: { xl, lg },
    },
  } = useTheme();

  useEffect(() => {
    /**
     * .root > padding-left: 120px
     * .exploreMore > width: 400px
     * .root > margin-left: (clientWidth - xl) / 2
     */
    let width = clientWidth === 1024 ? 904 : clientWidth - 520;

    if (clientWidth > xl) {
      width -= (clientWidth - xl) / 2;
    }

    setInnerWrapperWidth(width);
  }, [clientWidth, xl, lg]);

  const handleScrollBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {
      currentTarget: { value },
    } = e;

    if (innerWrapperRef && innerWrapperRef.current) {
      if (value === 'right') {
        innerWrapperRef.current.scrollLeft += 440;
      } else {
        innerWrapperRef.current.scrollLeft -= 440;
      }
    }
  };

  return (
    <section className={styles.container}>
      {!isMobile && <div className={styles.backgroundWrapper} />}
      <Container maxWidth="xl" classes={{ root: styles.root }}>
        <Grid className={styles.exploreMore}>
          <Typography variant="h2" className={styles.title}>
            Explore more
            <br />
            articles
          </Typography>
          <Typography variant="body2" className={styles.text}>
            We shape our core capabilities around lean product teams capable of delivering immense value to
            organisations worldwide
          </Typography>
          <Grid item className={styles.scrollBtnWrapper}>
            <IconButton onClick={handleScrollBtnClick} value="left" className={styles.scrollBtn} title="left-arrow">
              <ChevronLeftIcon className={styles.icon} />
            </IconButton>
            <IconButton onClick={handleScrollBtnClick} value="right" className={styles.scrollBtn} title="right-arrow">
              <ChevronRightIcon className={styles.icon} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item className={styles.cardsWrapper}>
          <Grid
            className={styles.innerCardsWrapper}
            style={{ width: isDesktop ? innerWrapperWidth : undefined }}
            ref={innerWrapperRef}
          >
            {posts.edges.map(({ node }) => (
              <Grid key={node.slug} className={styles.teaser}>
                <Teaser
                  key={node.slug}
                  title={node.title}
                  coverImage={node.featuredImage?.node}
                  url={`/blog/${node.slug}`}
                  excerpt={node.excerpt}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ExploreMoreArticles;
