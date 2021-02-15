import React, { useMemo } from 'react';
import Container from '@material-ui/core/Container';
import Teaser from 'components/Teaser';
import StringUtils from 'utils/static/StringUtils';
import Post from 'types/posts/post';

import { Grid } from '@material-ui/core';
import { useBlogPosts } from 'utils/context/BlogPostsContext';
import { Node } from 'types/common';

import BlogPosts from './BlogPosts';

import { PostCategoryFilter } from '../HeroSection';

import styles from './ReadAboutUsSection.module.scss';

interface ReadAboutUsSectionProps {
  activeCategory: PostCategoryFilter;
}

const filterPostsByCategory = (category: PostCategoryFilter, posts: Node<Post>[]): Post[] => {
  const name = StringUtils.capitalise(StringUtils.snakeCaseToSentenceCase(category).toLowerCase());

  return posts
    .filter(({ node: { tags } }) => {
      const tagNames = tags ? tags.edges.map(({ node }) => node.name) : [];

      return tagNames.includes(name);
    })
    .map(({ node }) => node);
};

const ReadAboutUsSection: React.FC<ReadAboutUsSectionProps> = ({ activeCategory }) => {
  const {
    posts: { edges: posts },
  } = useBlogPosts();

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'ALL_POSTS') {
      return posts.map(({ node }) => node);
    }

    return filterPostsByCategory(activeCategory, posts);
  }, [activeCategory, posts]);

  const { featuredPost, restOfPosts } = useMemo(
    () => ({
      featuredPost: filteredPosts[0] ? filteredPosts[0] : undefined,
      restOfPosts: filteredPosts.slice(1, 7),
    }),
    [filteredPosts]
  );

  return (
    <Container maxWidth="xl" component="section" className={styles.container} disableGutters>
      {featuredPost && (
        <Grid className={styles.teaser}>
          <Teaser
            title={featuredPost.title}
            excerpt={featuredPost.excerpt}
            coverImage={featuredPost.featuredImage?.node}
            url={`/blog/${featuredPost.slug}`}
            direction="row"
          />
        </Grid>
      )}
      <BlogPosts posts={restOfPosts} />
    </Container>
  );
};

export default ReadAboutUsSection;
