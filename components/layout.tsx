import React, { ReactNode } from 'react';
import Alert from './alert';
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
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
