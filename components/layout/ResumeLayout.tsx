import * as React from 'react';
import Head from 'next/head';

import { PAGE_URL, baseUrl } from '../../configs/url';

const ResumeLayout = (props: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Head>
        <meta name="og:title" content="June's resume" />
        <meta name="og:url" content={`${baseUrl}${PAGE_URL.RESUME}`} />
        <meta name="og:site_name" content="June's resume" />
        <meta name="og:description" content="June's resume" />
        <meta name="og:image" content="/static/image/mine.jpg" />
        <meta name="twitter:description" content="June's resume" />
        <meta name="twitter:title" content="June's resume" />
        <meta name="twitter:url" content={`${baseUrl}${PAGE_URL.RESUME}`} />
        <meta name="twitter:site" content={`${baseUrl}${PAGE_URL.RESUME}`} />
        <meta name="twitter:domain" content={`${baseUrl}${PAGE_URL.RESUME}`} />
        <meta name="twitter:image" content="/static/image/mine.jpg" />

        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="/static/resume/script/main.js"></script>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/static/resume/css/styles-2.css" />
      </Head>

      {props.children}
    </div>
  );
};

export default ResumeLayout;
