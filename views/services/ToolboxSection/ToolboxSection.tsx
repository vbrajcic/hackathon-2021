import React from 'react';
import IconsGrid from 'components/IconsGrid';

import styles from './ToolboxSection.module.scss';

const toolbox = [
  'angular',
  'chainlink',
  'figma',
  'firebase',
  'invision',
  'jira',
  'miro',
  'node',
  'react',
  'sketch',
  'slack',
  'wordpress',
  'mLogo',
];

const ToolboxSection: React.FC = () => (
  <section className={styles.container}>
    <div className={styles.backgroundWrapper} />
    <IconsGrid
      mode="toolbox"
      icons={toolbox}
      HeadingProps={{
        title: 'Our\neveryday\ntoolbox',
        description:
          'We are in love with technology, and we channel that love by using technology as a proper tool to deliver value and build the products we all believe in.',
        sectionTitle: 'TECH WE USE TO BUILD GREAT PRODUCTS',
        className: styles.sectionHeading,
      }}
    />
  </section>
);

export default ToolboxSection;
