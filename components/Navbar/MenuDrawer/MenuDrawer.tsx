import React from 'react';
import Hyperlink from 'components/Hyperlink';

import { Grid, SwipeableDrawer, SwipeableDrawerProps } from '@material-ui/core';
import { Link } from 'config/links';
import { useRouter } from 'next/router';

import styles from './MenuDrawer.module.scss';

interface MenuDrawerProps extends SwipeableDrawerProps {
  links: Link[];
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ links, ...props }) => {
  const router = useRouter();

  return (
    <SwipeableDrawer {...props} className={styles.container} elevation={0} anchor="top" keepMounted disablePortal>
      <Grid className={styles.navigation} container>
        <Grid direction="column" component="nav" className={styles.links} container>
          {links.map(({ url, text }) => (
            <Hyperlink
              key={url}
              href={url}
              AnchorProps={{
                variant: 'h2',
                align: 'left',
                className: styles.link,
                color: router.route === url ? 'secondary' : 'primary',
              }}
            >
              {text}
            </Hyperlink>
          ))}
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
};

export default MenuDrawer;
