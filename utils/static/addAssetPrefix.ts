export const addAssetPrefix = (path: string) =>
  process.env.NODE_ENV === 'production'
    ? `https://d3ddu43d9lttf7.cloudfront.net${path.charAt(0) === '/' ? path : `/${path}`}`
    : path;
