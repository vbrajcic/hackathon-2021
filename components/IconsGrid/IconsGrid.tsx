import React from 'react';
import Container from '@material-ui/core/Container';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import Heading from './Heading';
import Icons, { IconsProps } from './Icons';

import styles from './IconsGrid.module.scss';

const IconsGrid: React.FC<IconsProps> = ({ icons, mode, headingProps }) => {
  const { isMobile } = useBreakpoint();

  return (
    <Container maxWidth="xl" disableGutters={isMobile} className={styles.container}>
      {isMobile && <Heading {...headingProps} />}
      <Icons icons={icons} mode={mode} headingProps={headingProps} />
    </Container>
  );
};

export default IconsGrid;
