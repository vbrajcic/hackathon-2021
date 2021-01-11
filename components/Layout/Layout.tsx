import React, { ReactNode } from 'react';

import Alert from 'components/Alert';
import Footer from 'components/Footer';
import Meta from 'components/Meta';
import Navbar from 'components/Navbar';
import styles from './Layout.module.scss';

interface LayoutProps {
  preview?: boolean;
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ preview, children }) => (
  <>
    <Meta />
    <div className={styles.container}>
      <Alert preview={preview} />
      <Navbar />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
