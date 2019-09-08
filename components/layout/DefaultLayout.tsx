import * as React from 'react';
import Head from 'next/head';

import { baseUrl } from '../../configs/url';

const DefaultLayout = (props: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Head>
        <title>June blog</title>
        <meta name="og:title" content="June" />
        <meta name="og:url" content={baseUrl} />
        <meta name="og:site_name" content="June" />
        <meta name="og:description" content="June blog" />
        <meta name="og:image" content="/static/image/mine.jpg" />
        <meta name="twitter:description" content="June blog" />
        <meta name="twitter:title" content="June" />
        <meta name="twitter:url" content={baseUrl} />
        <meta name="twitter:site" content={baseUrl} />
        <meta name="twitter:domain" content={baseUrl} />
        <meta name="twitter:image" content="/static/image/mine.jpg" />
      </Head>

      {props.children}
    </>
  );
};

export default DefaultLayout;
