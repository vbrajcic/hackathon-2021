import React from 'react';
import Hyperlink from 'components/Hyperlink';
import useToggleState from 'utils/hooks/useToggleState';
import cn from 'classnames';
import links from 'config/links';

import { useRouter } from 'next/router';
import { Button, Container, Grid, Theme, useMediaQuery, useScrollTrigger } from '@material-ui/core';
import { useTheme } from 'utils/context/ThemeContext';

import Hamburger from './Hamburger';
import MenuDrawer from './MenuDrawer';

import styles from './navbar.module.scss';

const filteredLinks = links.filter(({ url }) => !url.includes('work') && !url.includes('contact'));

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [menuOpen, toggleMenu] = useToggleState();
  const router = useRouter();
  const hasCrossedThreshold = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });
  const isAboveMd = useMediaQuery<Theme>(t => t.breakpoints.up('md'));

  const handleGetInTouchClick = () => {
    const contactForm = document.getElementById('contact-form');
    const applyForm = document.getElementById('apply-form');

    const form = contactForm || applyForm;

    if (form) {
      const position = form.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      window.scrollTo({
        top: position - 90,
        behavior: 'smooth',
      });

      if (menuOpen) {
        toggleMenu();
      }
    }
  };

  return (
    <Grid
      className={cn(styles.root, {
        [styles.painted]: hasCrossedThreshold || menuOpen,
        [styles.darkTheme]: theme === 'dark',
      })}
    >
      <Container className={styles.container} maxWidth="xl" disableGutters>
        <Grid alignItems="center" className={styles.topBar} justify="space-between" container>
          <Hamburger onToggle={toggleMenu} open={menuOpen} classes={{ bar: styles.bar }} />
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
            {isAboveMd && (
              <Grid>
                {filteredLinks.map(({ url, text }) => (
                  <Hyperlink
                    key={url}
                    href={url}
                    AnchorProps={{
                      variant: 'body2',
                      align: 'left',
                      className: styles.link,
                      color: router.route === url ? 'secondary' : 'primary',
                    }}
                  >
                    {text}
                  </Hyperlink>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
        <Button className={styles.getInTouchButton} onClick={handleGetInTouchClick}>
          Get in touch
        </Button>
      </Container>
      <MenuDrawer links={filteredLinks} open={menuOpen} onOpen={toggleMenu} onClose={toggleMenu} />
    </Grid>
  );
};

export default Navbar;
