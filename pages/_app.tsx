import React from 'react';
import Head from 'next/head';
import theme from 'styles/theme';
import QueryParamProvider from 'utils/context/QueryParamContext';

import { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import '../styles/index.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <QueryParamProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryParamProvider>
    </>
  );
};

export default App;
