import React, { ReactNode } from 'react';
import Alert from 'components/Alert';
import Container from 'components/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Meta from 'components/Meta';
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
      <Container>
        <Header />
      </Container>
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
