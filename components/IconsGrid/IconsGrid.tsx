import React from 'react';
import Container from '@material-ui/core/Container';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import Heading from './Heading';
import Icons, { IconsProps } from './Icons';

import styles from './IconsGrid.module.scss';

const IconsGrid: React.FC<IconsProps> = ({ icons, mode, HeadingProps }) => {
  const { isMobile } = useBreakpoint();

  return (
    <Container maxWidth="xl" disableGutters={isMobile} className={styles.container}>
      {isMobile && <Heading {...HeadingProps} />}
      <Icons icons={icons} mode={mode} HeadingProps={HeadingProps} />
    </Container>
  );
};

export default IconsGrid;
