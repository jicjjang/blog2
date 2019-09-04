import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

import postContents, { IPost } from '../contents/posts';
import { baseUrl, PAGE_URL } from '../configs/url';

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url><loc>${baseUrl}${PAGE_URL.HOME}</loc></url>
<url><loc>${baseUrl}${PAGE_URL.ARCHIVE}</loc></url>
${postContents.map((post: IPost) => `<url><loc>${baseUrl}${post.path}</loc><lastmod>${post.date}</lastmod></url>`)}
</urlset>`;

const sitemap: NextPage = () => {
  return <div />;
};

sitemap.getInitialProps = async ({ res }: NextPageContext) => {
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemapXml);
  res.end();

  return {};
};

export default sitemap;
