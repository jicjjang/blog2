import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

import { baseUrl, PAGE_URL } from '../configs/url';

const robotsTxt = `User-agent: *

Allow: /
Disallow: /resume
Sitemap: ${baseUrl}${PAGE_URL.SITEMAP}`;

const robots: NextPage = () => {
  return <div />;
};

robots.getInitialProps = async ({ res }: NextPageContext) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(robotsTxt);
  res.end();

  return {};
};

export default robots;
