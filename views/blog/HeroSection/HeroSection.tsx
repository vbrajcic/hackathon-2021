import React from 'react';
import Intro from 'components/Intro';
import StringUtils from 'utils/static/StringUtils';

import { Tab, Tabs, Container } from '@material-ui/core';

import styles from './HeroSection.module.scss';

export type PostCategoryFilter = 'ALL_POSTS' | 'COMPANY' | 'DESIGN' | 'DEVELOPMENT' | 'TECHNOLOGY';
const allCategories: PostCategoryFilter[] = ['ALL_POSTS', 'COMPANY', 'DESIGN', 'DEVELOPMENT', 'TECHNOLOGY'];

interface HeroSectionProps {
  activeCategory: PostCategoryFilter;
  onCategoryChange: (category: PostCategoryFilter) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ activeCategory, onCategoryChange }) => {
  const handleCategoryChange = React.useCallback(
    (_: React.ChangeEvent<{}>, newValue: PostCategoryFilter) => {
      onCategoryChange(newValue);
    },
    [onCategoryChange]
  );

  return (
    <Container className={styles.container} component="section" maxWidth="xl">
      <Intro text="We love what we do and we want tell you all about it" className={styles.intro} />
      <Tabs
        value={activeCategory}
        onChange={handleCategoryChange}
        scrollButtons="off"
        indicatorColor="secondary"
        TabIndicatorProps={{ className: styles.tabIndicator }}
        className={styles.tabs}
        variant="scrollable"
      >
        {allCategories.map(category => {
          const label = StringUtils.capitalise(StringUtils.snakeCaseToSentenceCase(category).toLowerCase());

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
