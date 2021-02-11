import React, { ReactNode } from 'react';

import { PaletteType } from '@material-ui/core';

import Alert from 'components/Alert';
import Footer, { FooterProps } from 'components/Footer';
import Meta from 'components/Meta';
import DocumentTitle from 'components/DocumentTitle';
import Navbar from 'components/Navbar';

import { ThemeContextProvider } from 'utils/context/ThemeContext';

import styles from './Layout.module.scss';

interface LayoutProps extends FooterProps {
  title?: string;
  theme?: PaletteType;
  preview?: boolean;
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, theme = 'light', preview, children, ...footerProps }) => (
  <ThemeContextProvider value={{ theme }}>
    <Meta />
    <DocumentTitle title={title} />
    <div className={styles.container}>
      <Alert preview={preview} />
      <Navbar />
      <main>{children}</main>
    </div>
    <Footer {...footerProps} />
  </ThemeContextProvider>
);

export default Layout;
