import React from 'react';
import cn from 'classnames';

import { IconButton } from '@material-ui/core';

import styles from './hamburger.module.scss';

interface HamburgerProps {
  open: boolean;
  onToggle: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ open, onToggle }) => (
  <IconButton
    onClick={onToggle}
    className={cn(styles.container, { [styles.open]: open })}
    classes={{ root: styles.root, label: styles.label }}
  >
    <span className={styles.bar} />
    <span className={styles.bar} />
    <span className={styles.bar} />
  </IconButton>
);

export default Hamburger;
