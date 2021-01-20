import React from 'react';
import Hyperlink from 'components/Hyperlink';
import useToggleState from 'utils/hooks/useToggleState';
import cn from 'classnames';
import links from 'config/links';

import { useRouter } from 'next/router';
import { Button, Container, Grid, SwipeableDrawer, Theme, useMediaQuery, useScrollTrigger } from '@material-ui/core';

import Hamburger from './Hamburger';

import styles from './navbar.module.scss';

const filteredLinks = links.filter(({ url }) => !url.includes('work') && !url.includes('contact'));

const Navbar: React.FC = () => {
  const [menuOpen, toggleMenu] = useToggleState();
  const router = useRouter();
  const hasCrossedThreshold = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });
  const isAboveMd = useMediaQuery<Theme>(theme => theme.breakpoints.up('md'));

  const handleGetInTouchClick = () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
      window.scrollTo({
        top: contactForm.offsetTop - 64,
        behavior: 'smooth',
      });

      if (menuOpen) {
        toggleMenu();
      }
    }
  };

  const renderLinks = (variant: 'menu' | 'nav') =>
    filteredLinks.map(({ url, text }) => (
      <Hyperlink
        key={url}
        href={url}
        AnchorProps={{
          variant: variant === 'nav' ? 'body2' : 'h2',
          align: 'left',
          className: styles.link,
          color: router.route === url ? 'secondary' : 'primary',
        }}
      >
        {text}
      </Hyperlink>
    ));

  return (
    <Grid className={cn(styles.root, { [styles.painted]: hasCrossedThreshold || menuOpen })}>
      <Container className={styles.container} maxWidth="xl" disableGutters>
        <Grid alignItems="center" className={styles.topBar} justify="space-between" container>
          <Hamburger onToggle={toggleMenu} open={menuOpen} />
          <Grid container justify="space-between" className={styles.inner}>
            <Hyperlink
              href="/"
              AnchorProps={{
                variant: 'body1',
                className: styles.logo,
              }}
            >
              Profico
            </Hyperlink>
            {isAboveMd && <Grid>{renderLinks('nav')}</Grid>}
          </Grid>
        </Grid>
        <Button className={styles.getInTouchButton} onClick={handleGetInTouchClick}>
          Get in touch
        </Button>
      </Container>
      <SwipeableDrawer
        className={styles.drawer}
        elevation={0}
        open={menuOpen}
        onOpen={toggleMenu}
        onClose={toggleMenu}
        anchor="top"
        keepMounted
        disablePortal
      >
        <Grid className={styles.navigation} container>
          <Grid direction="column" component="nav" className={styles.links} container>
            {renderLinks('menu')}
          </Grid>
        </Grid>
      </SwipeableDrawer>
    </Grid>
  );
};

export default Navbar;
