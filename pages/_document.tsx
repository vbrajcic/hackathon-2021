import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from 'styles/theme';

import { ServerStyleSheets } from '@material-ui/core';
import { GTMScriptHead, GTMScriptBody } from 'components/GTMScript';

export default class MyDocument extends Document {
  render() {
    const {
      palette: { primary },
    } = theme;

    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={primary.main} />
          <GTMScriptHead />
        </Head>
        <body>
          <GTMScriptBody />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
