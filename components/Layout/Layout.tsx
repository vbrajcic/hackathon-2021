import React, { ReactNode } from 'react';

import { PaletteType } from '@material-ui/core';

import Alert from 'components/Alert';
import Footer from 'components/Footer';
import Meta from 'components/Meta';
import Navbar from 'components/Navbar';

import { ThemeContextProvider } from 'utils/context/ThemeContext';

import styles from './Layout.module.scss';

interface LayoutProps {
  theme?: PaletteType;
  preview?: boolean;
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ theme = 'light', preview, children }) => (
  <ThemeContextProvider value={{ theme }}>
    <Meta />
    <div className={styles.container}>
      <Alert preview={preview} />
      <Navbar />
      <main>{children}</main>
    </div>
    <Footer />
  </ThemeContextProvider>
);

export default Layout;
