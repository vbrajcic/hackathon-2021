import Head from 'next/head';
import React from 'react';

interface DocumentTitleProps {
  title?: string;
}

const DocumentTitle: React.FC<DocumentTitleProps> = ({ title = '' }) => {
  const docTitle = title ? `${title} | Profico` : 'Profico';
  return (
    <Head>
      <title>{docTitle}</title>
    </Head>
  );
};

export default DocumentTitle;
