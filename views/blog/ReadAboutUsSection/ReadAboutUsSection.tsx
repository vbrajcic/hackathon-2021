import React, { useRef } from 'react';
import Container from '@material-ui/core/Container';
import useFactory from 'utils/hooks/useFactory';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import Teaser from 'components/Teaser';
import teaserStyle from 'components/Teaser/Teaser.module.scss';

import { useUpdateEffect } from 'react-use';
import { Grid } from '@material-ui/core';
import { FilteredPosts, PostCategory } from 'views/blog/useBlogParams';

import BlogPosts from './BlogPosts';
import Pagination from './Pagination';

import styles from './ReadAboutUsSection.module.scss';

interface ReadAboutUsSectionProps {
  activeCategory: PostCategory;
  filteredPosts: FilteredPosts;
  page: number;
  onPageChange: (newValue: number) => void;
}

const PAGE_SIZE = 6;

const ReadAboutUsSection: React.FC<ReadAboutUsSectionProps> = ({
  activeCategory,
  filteredPosts,
  page,
  onPageChange,
}) => {
  const readAboutUsSectionRef = useRef<HTMLDivElement | null>(null);

  const { isMobile } = useBreakpoint();

  useUpdateEffect(() => {
    if (readAboutUsSectionRef.current) {
      readAboutUsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [page]);

  const featuredPost = useFactory(() => {
    if (activeCategory === 'allPosts' && page === 1 && filteredPosts.allPosts[0]) {
      return filteredPosts.allPosts[0];
    }

    return undefined;
  });

  const posts = useFactory(() => {
    if (activeCategory === 'allPosts') {
      return filteredPosts[activeCategory].slice((page - 1) * PAGE_SIZE + 1, page * PAGE_SIZE + 1);
    }

    return filteredPosts[activeCategory].slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  });

  return (
    <Container
      maxWidth={false}
      component="section"
      className={styles.container}
      disableGutters
      ref={readAboutUsSectionRef}
    >
      {featuredPost && (
        <Grid className={styles.teaser}>
          <Teaser
            title={featuredPost.title}
            excerpt={featuredPost.excerpt}
            coverImage={featuredPost.image?.thumbnailImage || featuredPost.featuredImage?.node}
            url={`/blog/${featuredPost.slug}`}
            direction={isMobile ? 'column' : 'row'}
            classes={{ media: teaserStyle.noLeftBorder }}
          />
        </Grid>
      )}
      <BlogPosts posts={posts} />
      <Pagination
        count={Math.ceil(filteredPosts[activeCategory].length / PAGE_SIZE)}
        page={page}
        onChange={onPageChange}
      />
    </Container>
  );
};

export default ReadAboutUsSection;
