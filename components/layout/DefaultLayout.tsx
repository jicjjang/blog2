import * as React from 'react';
import Head from 'next/head';

import Metas from '../common/Metas';

const DOMAIN = 'https://jicjjang.github.io';

const DefaultLayout = (props: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Head>
        <Metas />
        <meta name="og:title" content="June" />
        <meta name="og:url" content={DOMAIN} />
        <meta name="og:site_name" content="June" />
        <meta name="og:description" content="June\'s blog" />
        <meta name="og:image" content={`${DOMAIN}/static/image/mine.jpg`} />
        <meta name="twitter:description" content="June\'s blog" />
        <meta name="twitter:title" content="June" />
        <meta name="twitter:url" content={DOMAIN} />
        <meta name="twitter:site" content={DOMAIN} />
        <meta name="twitter:domain" content={DOMAIN} />
        <meta name="twitter:image" content={`${DOMAIN}/static/image/mine.jpg`} />
      </Head>

      {props.children}
    </div>
  );
};

export default DefaultLayout;
