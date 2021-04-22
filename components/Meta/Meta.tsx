import Head from 'next/head';

import { metaIcons } from 'config/meta';

const Meta = () => (
  <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ffffff" />
    <link rel="shortcut icon" href="/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    <meta name="theme-color" content="#000" />
    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

    {metaIcons.favicons.map(size => (
      <link href={`/favicon/favicon-${size}.png`} rel="icon" key={size} sizes={size} type="image/png" />
    ))}
    {metaIcons.android.map(size => (
      <link href={`/favicon/android-icon-${size}.png`} rel="icon" key={size} sizes={size} type="image/png" />
    ))}
    {metaIcons.apple.map(size => (
      <link
        href={`/favicon/apple-touch-icon-${size}.png`}
        rel="apple-touch-icon"
        key={size}
        sizes={size}
        type="image/png"
      />
    ))}

    <link href="/favicon/favicon.ico" rel="shortcut icon" />
    <link href="/favicon/manifest.json" rel="manifest" />

    <meta name="description" content="Profico - Mobile app and web development agency." />
    <meta property="og:image" content="/logo/logo-sharing.png" />
  </Head>
);

export default Meta;
