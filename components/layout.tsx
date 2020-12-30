import React, { ReactNode } from 'react';
import Alert from './alert';
import Container from './container';
import Header from './header';
import Footer from './footer';
import Meta from './meta';

interface LayoutProps {
  preview?: boolean;
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ preview, children }) => (
  <>
    <Meta />
    <div className="min-h-screen">
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
