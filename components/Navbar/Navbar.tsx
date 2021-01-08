import React from 'react';
import Hyperlink from 'components/Hyperlink';
import useToggleState from 'utils/hooks/useToggleState';
import cn from 'classnames';
import links from 'config/links';

import { useRouter } from 'next/router';
import { Button, Container, Grid, SwipeableDrawer } from '@material-ui/core';
import { useWindowScroll } from 'react-use';

import Hamburger from './Hamburger';

import styles from './navbar.module.scss';

const filteredLinks = links.filter(({ url }) => !url.includes('work') && !url.includes('contact'));

const Navbar: React.FC = () => {
  const [menuOpen, toggleMenu] = useToggleState();
  const { y } = useWindowScroll();
  const router = useRouter();

  const handleGetInTouchClick = () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
      window.scrollTo({
        top: contactForm.offsetTop - 32,
        behavior: 'smooth',
      });

      if (menuOpen) {
        toggleMenu();
      }
    }
  };

  return (
    <>
      <Container
        className={cn(styles.container, { [styles.painted]: y > 20 || menuOpen })}
        classes={{ root: styles.root }}
        maxWidth="xl"
      >
        <Grid justify="space-between" container>
          <Grid alignItems="center" container>
            <Hamburger onToggle={toggleMenu} open={menuOpen} />
            <Hyperlink
              href="/"
              AnchorProps={{
                variant: 'body1',
                className: styles.logo,
              }}
            >
              Profico
            </Hyperlink>
          </Grid>
          <Button onClick={handleGetInTouchClick}>Get in touch</Button>
        </Grid>
      </Container>
      <SwipeableDrawer
        className={styles.drawer}
        elevation={0}
        open={menuOpen}
        onOpen={toggleMenu}
        onClose={toggleMenu}
        anchor="top"
      >
        <Grid className={styles.navigation} container>
          <Grid direction="column" component="nav" className={styles.links} container>
            {filteredLinks.map(({ url, text }) => (
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
    </>
  );
};

export default Navbar;
