import React from 'react';
import cn from 'classnames';

import { IconButton } from '@material-ui/core';

import { useTheme } from 'utils/context/ThemeContext';
import styles from './hamburger.module.scss';

interface HamburgerProps {
  open: boolean;
  onToggle: () => void;
  classes?: {
    root?: string;
    bar?: string;
  };
}

const Hamburger: React.FC<HamburgerProps> = ({ open, onToggle, classes }) => {
  const { theme } = useTheme();

  return (
    <IconButton
      onClick={onToggle}
      className={cn(styles.container, classes?.root, { [styles.open]: open, [styles.darkTheme]: theme === 'dark' })}
      classes={{ root: styles.root, label: styles.label }}
    >
      <span className={cn(styles.bar, classes?.bar)} />
      <span className={cn(styles.bar, classes?.bar)} />
      <span className={cn(styles.bar, classes?.bar)} />
    </IconButton>
  );
};

export default Hamburger;
