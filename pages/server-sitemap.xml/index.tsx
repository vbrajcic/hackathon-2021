import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';
import { getAllBlogPostsSlugs, getAllCareersPostsSlugs } from 'lib/api';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const [blogPostsSlugs, careersPostsSlugs] = await Promise.all([getAllBlogPostsSlugs(), getAllCareersPostsSlugs()]);

  const blogFields = blogPostsSlugs.edges.map(({ node }) => ({
    loc: `${process.env.SITE_URL}/blog/${node.slug}`,
    lastmod: new Date().toISOString(),
    // changefreq
    // priority
  }));

  const careerFields = careersPostsSlugs.edges.map(({ node }) => ({
    loc: `${process.env.SITE_URL}/careers/${node.slug}`,
    lastmod: new Date().toISOString(),
    // changefreq
    // priority
  }));

  const allFields = [...blogFields, ...careerFields];

  return getServerSideSitemap(ctx, allFields);
};

// Default export to prevent next.js errors
export default () => {};
