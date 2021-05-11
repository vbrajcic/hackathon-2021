import React from 'react';
import Intro from 'components/Intro';
import StringUtils from 'utils/static/StringUtils';

import { Tab, Tabs, Container } from '@material-ui/core';

import styles from './HeroSection.module.scss';
import { FilteredPosts, PostCategory } from '../useBlogParams';

interface HeroSectionProps {
  filteredPosts: FilteredPosts;
  activeCategory: PostCategory;
  onCategoryChange: (category: PostCategory) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ filteredPosts, activeCategory, onCategoryChange }) => {
  const handleCategoryChange = React.useCallback(
    (_: React.ChangeEvent<{}>, newValue: PostCategory) => {
      onCategoryChange(newValue);
    },
    [onCategoryChange]
  );

  return (
    <Container className={styles.container} component="section" maxWidth="xl">
      <Intro text="We love what we do and we want to tell you all about it" className={styles.intro} />
      <Tabs
        value={activeCategory}
        onChange={handleCategoryChange}
        scrollButtons="off"
        indicatorColor="secondary"
        TabIndicatorProps={{ className: styles.tabIndicator }}
        className={styles.tabs}
        variant="scrollable"
      >
        {Object.entries(filteredPosts).map(([category, posts]) => {
          if (posts.length === 0) {
            return null;
          }

          const label = StringUtils.capitalise(StringUtils.camelCaseToSentenceCase(category).toLowerCase());

          return (
            <Tab
              key={category}
              value={category}
              label={label}
              className={styles.tab}
              classes={{ selected: styles.selected }}
              title={label}
            />
          );
        })}
      </Tabs>
    </Container>
  );
};

export default HeroSection;
