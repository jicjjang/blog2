import * as React from 'react';

import { EMAIL, baseUrl } from '../../configs/url';

const Metas = () => {
  return (
    <>
      <title>June blog</title>
      <link rel="stylesheet" href="/static/css/main.css" />
      <link rel="stylesheet" href="/static/css/spinner.css" />
      <link rel="icon" href="/static/favicon.png" />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      <link rel="alternate" hrefLang="ko-kr" href={baseUrl} />

      <meta http-equiv="cache-control" content="Public" />
      <meta http-equiv="Expires" content="1800" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="This blog has been used since 2019 using Nextjs with Reactjs" />
      <meta name="author" content={`Junseok, Choi <${EMAIL}>`} />
      <meta name="google-site-verification" content="DL3OehOD_wV9A1S0SRWoeXbMtlE5SeUZPlwGrFvPHQ8" />
      <meta name="naver-site-verification" content="a914a06593ce48762aa25cbb7d5e96042da6e549" />
      <meta name="robots" content="index,follow"></meta>

      <meta name="og:type" content="blog" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@jicjjang" />
      <meta name="twitter:site" content="June" />
    </>
  );
};

export default Metas;
