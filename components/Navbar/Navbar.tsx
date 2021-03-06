import React from 'react';
import Hyperlink from 'components/Hyperlink';
import useToggleState from 'utils/hooks/useToggleState';
import useScrollDirection, { ScrollDirection } from 'utils/hooks/useScrollDirection';
import cn from 'clsx';
import links from 'config/links';

import { useRouter } from 'next/router';
import { Container, Grid, Slide, Theme, useMediaQuery, useScrollTrigger } from '@material-ui/core';
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
  const scrollDirection = useScrollDirection();

  const isScrollingDown = scrollDirection === ScrollDirection.DOWN;

  return (
    <Grid
      className={cn(styles.root, {
        [styles.painted]: (hasCrossedThreshold && isScrollingDown) || menuOpen,
        [styles.darkTheme]: theme === 'dark',
      })}
    >
      <Slide direction="down" in={isScrollingDown}>
        <div>
          <Container className={styles.container} maxWidth="xl" disableGutters>
            <Grid alignItems="center" className={styles.topBar} justify="space-between" container>
              <Hamburger onToggle={toggleMenu} open={menuOpen} classes={{ bar: styles.bar }} />
              <Grid data-ga-event-name="navigation" container justify="space-between" className={styles.inner}>
                <Hyperlink
                  data-ga-section="logo"
                  href="/"
                  AnchorProps={{
                    variant: 'body1',
                    className: styles.logo,
                  }}
                >
                  Startsiden Guides
                </Hyperlink>
                {isAboveMd && (
                  <Grid>
                    {filteredLinks.map(({ url, text }) => (
                      <Hyperlink
                        data-ga-section={text}
                        key={text}
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
          </Container>
        </div>
      </Slide>
      <MenuDrawer links={filteredLinks} open={menuOpen} onOpen={toggleMenu} onClose={toggleMenu} />
    </Grid>
  );
};

export default Navbar;
