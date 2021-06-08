import React from 'react';
import cn from 'clsx';
import Alert from 'components/Alert';
import CookieConsent from 'components/CookieConsent';
import Footer, { FooterProps as BaseFooterProps } from 'components/Footer';
import Meta from 'components/Meta';
import Navbar from 'components/Navbar';

import { ThemeContextProvider } from 'utils/context/ThemeContext';
import { PaletteType } from '@material-ui/core';

import styles from './Layout.module.scss';

interface LayoutProps {
  title?: string;
  image?: string;
  description?: string;
  theme?: PaletteType;
  preview?: boolean;
  FooterProps?: BaseFooterProps;
  ContainerProps?: React.HTMLProps<HTMLDivElement>;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  image,
  description,
  theme = 'light',
  preview,
  children,
  FooterProps,
  ContainerProps,
}) => (
  <ThemeContextProvider value={{ theme }}>
    <Meta title={title} image={image} description={description} />
    <div {...ContainerProps} className={cn(styles.container, ContainerProps?.className)}>
      <Alert preview={preview} />
      <Navbar />
      <main>{children}</main>
    </div>
    <Footer {...FooterProps} />
    <CookieConsent />
  </ThemeContextProvider>
);

export default Layout;
