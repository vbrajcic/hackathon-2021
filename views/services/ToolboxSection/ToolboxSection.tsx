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
      headingProps={{
        title: 'Our\neveryday\ntoolbox',
        description:
          'We shape our core capabilities around lean product teams capable of delivering immense value to organisations worldwide',
        sectionTitle: 'APPS WE USE TO MAKE AWESOMENESS',
        className: styles.sectionHeading,
      }}
    />
  </section>
);

export default ToolboxSection;
