module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml', '/404/*', '/blog', '/cookie-policy', '/legal-info', '/privacy-policy'],
  robotsTxtOptions: {
    additionalSitemaps: [`${process.env.SITE_URL}/server-sitemap.xml`],
  },
};
